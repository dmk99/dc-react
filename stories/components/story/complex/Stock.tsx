// @ts-nocheck

import * as React from "react";
import crossfilter from "crossfilter2";
import BubbleChart from "../../../../src/BubbleChart";
import {
    axisBottom,
    axisLeft,
    scaleLinear,
    scaleTime,
    schemeRdYlGn,
    timeFormat,
    timeMonth,
    timeMonths,
    timeParse,
    timeYear,
    ascending
} from "d3";
import PieChart from "../../../../src/PieChart";
import {AllDcCharts} from "../../../../src";
import RowChart from "../../../../src/RowChart";
import BarChart from "../../../../src/BarChart";
import dc, {legend} from "dc";
import LineChart from "../../../../src/LineChart";
import DataCount from "../../../../src/DataCount";
import DataTable from "../../../../src/DataTable";
import {format} from "d3-format";

export default class Stock extends React.Component<any, any> {
    readonly chartById: { [key: string]: AllDcCharts } = {};

    dateFormatSpecifier = '%m/%d/%Y';
    dateFormat = timeFormat(this.dateFormatSpecifier);
    dateFormatParser = timeParse(this.dateFormatSpecifier);
    numberFormat = format('.2f');
    decimalFormat = format('02d');

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        const data = require("../../../data/ndx.csv");

        const ndx = crossfilter(data);

        data.forEach(d => {
            d.dd = this.dateFormatParser(d.date);
            d.month = timeMonth(d.dd); // pre-calculate month for better performance
            d.close = +d.close; // coerce to number
            d.open = +d.open;
        });

        //### Create Crossfilter Dimensions and Groups

        //See the [crossfilter API](https://github.com/square/crossfilter/wiki/API-Reference) for reference.
        const all = ndx.groupAll();

        // Dimension by year
        const yearlyDimension = ndx.dimension(d => timeYear(d.dd).getFullYear());
        // Maintain running tallies by year as filters are applied or removed
        const yearlyPerformanceGroup = yearlyDimension.group().reduce(
            /* callback for when data is added to the current filter results */
            (p, v) => {
                ++p.count;
                p.absGain += v.close - v.open;
                p.fluctuation += Math.abs(v.close - v.open);
                p.sumIndex += (v.open + v.close) / 2;
                p.avgIndex = p.sumIndex / p.count;
                p.percentageGain = p.avgIndex ? (p.absGain / p.avgIndex) * 100 : 0;
                p.fluctuationPercentage = p.avgIndex ? (p.fluctuation / p.avgIndex) * 100 : 0;
                return p;
            },
            /* callback for when data is removed from the current filter results */
            (p, v) => {
                --p.count;
                p.absGain -= v.close - v.open;
                p.fluctuation -= Math.abs(v.close - v.open);
                p.sumIndex -= (v.open + v.close) / 2;
                p.avgIndex = p.count ? p.sumIndex / p.count : 0;
                p.percentageGain = p.avgIndex ? (p.absGain / p.avgIndex) * 100 : 0;
                p.fluctuationPercentage = p.avgIndex ? (p.fluctuation / p.avgIndex) * 100 : 0;
                return p;
            },
            /* initialize p */
            () => ({
                count: 0,
                absGain: 0,
                fluctuation: 0,
                fluctuationPercentage: 0,
                sumIndex: 0,
                avgIndex: 0,
                percentageGain: 0
            })
        );

        // Dimension by full date
        const dateDimension = ndx.dimension(d => d.dd);

        // Dimension by month
        const moveMonths = ndx.dimension(d => d.month);
        // Group by total movement within month
        const monthlyMoveGroup = moveMonths.group().reduceSum(d => Math.abs(d.close - d.open));
        // Group by total volume within move, and scale down result
        const volumeByMonthGroup = moveMonths.group().reduceSum(d => d.volume / 500000);
        const indexAvgByMonthGroup = moveMonths.group().reduce(
            (p, v) => {
                ++p.days;
                p.total += (v.open + v.close) / 2;
                p.avg = Math.round(p.total / p.days);
                return p;
            },
            (p, v) => {
                --p.days;
                p.total -= (v.open + v.close) / 2;
                p.avg = p.days ? Math.round(p.total / p.days) : 0;
                return p;
            },
            () => ({days: 0, total: 0, avg: 0})
        );

        // Create categorical dimension
        const gainOrLoss = ndx.dimension(d => d.open > d.close ? 'Loss' : 'Gain');
        // Produce counts records in the dimension
        const gainOrLossGroup = gainOrLoss.group();

        // Determine a histogram of percent changes
        const fluctuation = ndx.dimension(d => Math.round((d.close - d.open) / d.open * 100));
        const fluctuationGroup = fluctuation.group();

        // Summarize volume by quarter
        const quarter = ndx.dimension(d => {
            const month = d.dd.getMonth();
            if (month <= 2) {
                return 'Q1';
            } else if (month > 2 && month <= 5) {
                return 'Q2';
            } else if (month > 5 && month <= 8) {
                return 'Q3';
            } else {
                return 'Q4';
            }
        });
        const quarterGroup = quarter.group().reduceSum(d => d.volume);

        // Counts per weekday
        const dayOfWeek = ndx.dimension(d => {
            const day = d.dd.getDay();
            const name = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            return `${day}.${name[day]}`;
        });
        const dayOfWeekGroup = dayOfWeek.group();

        this.setState({
            ndx,
            all,
            yearlyDimension,
            yearlyPerformanceGroup,
            dateDimension,
            moveMonths,
            monthlyMoveGroup,
            volumeByMonthGroup,
            indexAvgByMonthGroup,
            gainOrLoss,
            gainOrLossGroup,
            fluctuation,
            fluctuationGroup,
            quarter,
            quarterGroup,
            dayOfWeek,
            dayOfWeekGroup
        });
    }

    private onChartMounted = (key: string) => (chart: AllDcCharts) => {
        this.chartById[key] = chart;
    };

    private onChartReset = (key: string) => (e) => {
        this.chartById[key].filterAll();
        dc.redrawAll();

        e.preventDefault();
    };

    private getChartResetComponent = (key: string) => {
        return (
            <a className="reset"
               onClick={this.onChartReset(key)}
               href={"#"}
               style={{display: "none"}}
            >
                reset
            </a>
        )
    };

    render() {
        if (this.state.ndx == null) {
            return (
                <div>
                    Loading Data...
                </div>
            )
        }

        const {
            ndx,
            all,
            yearlyDimension,
            yearlyPerformanceGroup,
            dateDimension,
            moveMonths,
            monthlyMoveGroup,
            volumeByMonthGroup,
            indexAvgByMonthGroup,
            gainOrLoss,
            gainOrLossGroup,
            fluctuation,
            fluctuationGroup,
            quarter,
            quarterGroup,
            dayOfWeek,
            dayOfWeekGroup
        } = this.state;

        const numberFormat = this.numberFormat;

        return (
            <div className="container">
                <div className="row">
                    Refer to&nbsp; <a href={"https://dc-js.github.io/dc.js"} target={"_blank"}>dc.js home page</a>&nbsp;for the Nasdaq example.
                </div>

                <h2>Nasdaq 100 Index 1985/11/01-2012/06/29</h2>

                <div className="row">
                    <div id="yearly-bubble-chart" className="dc-chart">
                        <strong>Yearly Performance</strong> (radius: fluctuation/index ratio, color: gain/loss)
                        {this.getChartResetComponent("yearly-bubble-chart")}
                        <BubbleChart
                            chartGroup={"chartGroup"}
                            onChartMounted={this.onChartMounted("yearly-bubble-chart")}
                            parent={"#yearly-bubble-chart"}
                            dimension={this.state.yearlyDimension}
                            group={this.state.yearlyPerformanceGroup}
                            width={990}
                            height={250}
                            transitionDuration={1500}
                            margins={{top: 10, right: 50, bottom: 30, left: 40}}
                            colors={schemeRdYlGn[9]}
                            colorDomain={[-500, 500]}
                            colorAccessor={d => d.value.absGain}
                            keyAccessor={d => d.value.absGain}
                            valueAccessor={d => d.value.percentageGain}
                            maxBubbleRelativeSize={0.3}
                            radiusValueAccessor={(d => d.value.fluctuationPercentage)}
                            x={scaleLinear().domain([-2500, 2500])}
                            y={scaleLinear().domain([-100, 100])}
                            r={scaleLinear().domain([0, 4000])}
                            elasticY
                            elasticX
                            yAxisPadding={100}
                            xAxisPadding={500}
                            renderHorizontalGridLines
                            renderVerticalGridLines
                            xAxisLabel={"Index Gain"}
                            yAxisLabel={"Index Gain %"}
                            renderLabel
                            label={p => p.key}
                            renderTitle
                            title={p => [
                                p.key,
                                `Index Gain: ${this.numberFormat(p.value.absGain)}`,
                                `Index Gain in Percentage: ${this.numberFormat(p.value.percentageGain)}%`,
                                `Fluctuation / Index Ratio: ${this.numberFormat(p.value.fluctuationPercentage)}%`
                            ].join("\n")}
                            yAxis={axisLeft().tickFormat(v => `${v}%`)}
                        />

                        <div className="clearfix"/>
                    </div>
                </div>

                <div className="row">
                    <div id="gain-loss-chart">
                        <strong>Days by Gain/Loss</strong>
                        {this.getChartResetComponent("gain-loss-chart")}

                        <PieChart
                            chartGroup={"chartGroup"}
                            onChartMounted={this.onChartMounted("gain-loss-chart")}
                            parent={"#gain-loss-chart"}
                            width={180}
                            height={180}
                            radius={80}
                            dimension={this.state.gainOrLoss}
                            group={this.state.gainOrLossGroup}
                            label={(d) => {
                                const gainLossChart = this.chartById["gain-loss-chart"];

                                if (gainLossChart.hasFilter() && !gainLossChart.hasFilter(d.key)) {
                                    return `${d.key} (0%)`
                                }

                                let label = d.key;

                                if (all.value()) {
                                    label += ` (${Math.floor(d.value / all.value() * 100)}%)`;
                                }
                                return label;
                            }}
                        />

                        <div className="clearfix"/>
                    </div>

                    <div id="quarter-chart">
                        <strong>Quarters</strong>
                        {this.getChartResetComponent("quarter-chart")}

                        <PieChart
                            chartGroup={"chartGroup"}
                            onChartMounted={this.onChartMounted("quarter-chart")}
                            parent={"#quarter-chart"}
                            width={180}
                            height={180}
                            innerRadius={30}
                            radius={80}
                            dimension={quarter}
                            group={quarterGroup}
                        />

                        <div className="clearfix"/>
                    </div>

                    <div id="day-of-week-chart">
                        <strong>Day of Week</strong>
                        {this.getChartResetComponent("day-of-week-chart")}
                        <RowChart
                            width={180}
                            height={180}
                            chartGroup={"chartGroup"}
                            onChartMounted={this.onChartMounted("day-of-week-chart")}
                            parent={"#day-of-week-chart"}
                            dimension={dayOfWeek}
                            group={dayOfWeekGroup}
                            ordinalColors={['#3182bd', '#6baed6', '#9ecae1', '#c6dbef', '#dadaeb']}
                            label={(d) => d.key.split(".")[1]}
                            title={(d) => d.value}
                            elasticX
                            xAxis={axisBottom().ticks(4)}
                        />

                        <div className="clearfix"/>
                    </div>

                    <div id="fluctuation-chart">
                        <strong>Days by Fluctuation(%)</strong>
                        <span className="reset" style={{display: "none"}}>range: <span className="filter"/></span>
                        {this.getChartResetComponent("fluctuation-chart")}

                        <BarChart
                            chartGroup={"chartGroup"}
                            onChartMounted={this.onChartMounted("fluctuation-chart")}
                            parent={"#fluctuation-chart"}
                            width={420}
                            height={180}
                            margins={{top: 10, right: 50, bottom: 30, left: 40}}
                            dimension={fluctuation}
                            group={fluctuationGroup}
                            elasticY
                            centerBar
                            gap={1}
                            round={Math.floor}
                            alwaysUseRounding
                            x={scaleLinear().domain([-25, 25])}
                            xAxis={axisBottom().tickFormat(v => `${v}%`)}
                            yAxis={axisLeft().ticks(5)}
                            renderHorizontalGridLines
                            filterPrinterFunction={(filters => {
                                const filter = filters[0];
                                let s = '';
                                s += `${this.numberFormat(filter[0])}% -> ${this.numberFormat(filter[1])}%`
                                return s;
                            })}
                        />

                        <div className="clearfix"/>
                    </div>
                </div>

                <div className="row">
                    <div id="monthly-move-chart">
                        <strong>Monthly Index Abs Move & Volume/500,000 Chart</strong>
                        <span
                            className="reset"
                            style={{display: "none"}}
                        >
                            range: <span className="filter"/>
                        </span>

                        {this.getChartResetComponent("monthly-move-chart")}
                        {/*<a*/}
                        {/*    className="reset"*/}
                        {/*    href="javascript:moveChart.filterAll();volumeChart.filterAll();dc.redrawAll();"*/}
                        {/*    style={{display: "none"}}*/}
                        {/*>*/}
                        {/*    reset*/}
                        {/*</a>*/}

                        <LineChart
                            onChartMounted={this.onChartMounted("monthly-move-chart")}
                            chartGroup={"chartGroup"}
                            parent={"#monthly-move-chart"}
                            renderArea
                            width={990}
                            height={200}
                            transitionDuration={1000}
                            margins={{top: 30, right: 50, bottom: 25, left: 40}}
                            mouseZoomable
                            dimension={moveMonths}
                            // TODO: Verify group with: .group(indexAvgByMonthGroup, 'Monthly Index Average')
                            group={{
                                first: indexAvgByMonthGroup,
                                second: 'Monthly Index Average'
                            }}
                            rangeChart={this.chartById["monthly-volume-chart"]}
                            x={scaleTime().domain([new Date(1985, 0, 1), new Date(2012, 11, 31)])}
                            round={timeMonth.round}
                            xUnits={timeMonths}
                            elasticY
                            renderHorizontalGridLines
                            legend={legend().x(800).y(10).itemHeight(13).gap(5)}
                            brushOn={false}
                            valueAccessor={(d => d.value.avg)}
                            stacks={[
                                {group: monthlyMoveGroup, name: "Monthly Index Move", accessor: (d) => d.value}
                            ]}
                            title={d => {
                                let value = d.value.avg ? d.value.avg : d.value;
                                if (isNaN(value)) {
                                    value = 0;
                                }
                                return `${this.dateFormat(d.key)}\n${this.numberFormat(value)}`;
                            }}
                        />

                        <div className="clearfix"/>
                    </div>
                </div>

                <div className="row">
                    <div id="monthly-volume-chart">
                    </div>
                    <p className="text-secondary font-italic m-auto" style={{marginRight: "15px"}}>select a time range to zoom in</p>

                    <BarChart
                        chartGroup={"chartGroup"}
                        parent={"#monthly-volume-chart"}
                        width={990}
                        height={40}
                        margins={{top: 0, right: 50, bottom: 20, left: 40}}
                        dimension={moveMonths}
                        group={volumeByMonthGroup}
                        centerBar
                        gap={1}
                        x={scaleTime().domain([new Date(1985, 0, 1), new Date(2012, 11, 31)])}
                        round={timeMonth.round}
                        alwaysUseRounding
                        xUnits={timeMonths}
                    />
                </div>

                <div className="row">
                    <div>
                        <div className="dc-data-count">
                            <span className="filter-count"/> selected out of <span className="total-count"/> records | {this.getChartResetComponent(".dc-data-count")}
                        </div>
                    </div>
                    <table className="table table-hover table-striped dc-data-table"/>

                    <DataCount
                        chartGroup={"chartGroup"}
                        onChartMounted={this.onChartMounted(".dc-data-count")}
                        parent={".dc-data-count"}
                        crossfilter={ndx}
                        groupAll={all}
                        html={{
                            // TODO: Fix on-click handling. dc is not registered (obviously)
                            some: '<strong>%filter-count</strong> selected out of <strong>%total-count</strong> records' +
                                ' | <a href="javascript:void(0);" onclick="dc.filterAll(); dc.renderAll();">Reset All</a>',
                            all: 'All records selected. Please click on the graph to apply filters.'
                        }}
                    />

                    <DataTable
                        width={990}
                        parent={".dc-data-table"}
                        chartGroup={"chartGroup"}
                        onChartMounted={this.onChartMounted(".dc-data-table")}
                        dimension={dateDimension}
                        section={d => {
                            return `${d.dd.getFullYear()}/${this.decimalFormat((d.dd.getMonth() + 1))}`;
                        }}
                        size={10}
                        columns={[
                            // Use the `d.date` field; capitalized automatically
                            'date',
                            // Use `d.open`, `d.close`
                            'open',
                            'close',
                            {
                                // Specify a custom format for column 'Change' by using a label with a function.
                                label: 'Change',
                                format: function (d) {
                                    return numberFormat(d.close - d.open);
                                }
                            },
                            // Use `d.volume`
                            'volume'
                        ]}
                        sortBy={d => d.dd}
                        order={ascending}
                        onRenderlet={(table) => {
                            table.selectAll('.dc-table-group').classed('info', true);
                        }}
                    />

                </div>

                <div className="clearfix"/>
            </div>
        )
    }
}

// @ts-ignore-end
