import * as React from "react";
import crossfilter from "crossfilter2";
import PieChart from "../../../../src/PieChart";
import BubbleChart from "../../../../src/BubbleChart";

export default class Stock extends React.PureComponent {
    componentDidMount() {
        const morley = require("../../../data/ndx.csv");

        const ndx = crossfilter(morley);

        // // @ts-ignore
        // const scatterDimension = ndx.dimension(d => [+d.Run, d.Speed * d.Run / 1000]);
        // const scatterGroup = scatterDimension.group();
        // // @ts-ignore
        // const lineDimension = ndx.dimension((d) => +d.Run);
        // const lineGroup = lineDimension.group().reduceSum((d) => {
        //     // @ts-ignore
        //     return d.Speed * d.Run / 4000;
        // });
        //
        // this.setState({
        //     ndx,
        //     scatterDimension,
        //     scatterGroup,
        //     lineDimension,
        //     lineGroup
        // });
    }

    render() {
        return (
            <div>

                <h2>Nasdaq 100 Index 1985/11/01-2012/06/29</h2>

                {/*<div className="row">*/}
                {/*    <div id="yearly-bubble-chart" className="dc-chart">*/}
                {/*        <strong>Yearly Performance</strong> (radius: fluctuation/index ratio, color: gain/loss)*/}
                {/*        <a className="reset"*/}
                {/*           href="javascript:yearlyBubbleChart.filterAll();dc.redrawAll();"*/}
                {/*           style={{display: "none"}}*/}
                {/*        >*/}
                {/*            reset*/}
                {/*        </a>*/}
                {/*        <BubbleChart x={} dimension={} group={}/>*/}

                {/*        <div className="clearfix"/>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="row">*/}
                {/*    <div id="gain-loss-chart">*/}
                {/*        <strong>Days by Gain/Loss</strong>*/}
                {/*        <a className="reset" href="javascript:gainOrLossChart.filterAll();dc.redrawAll();"*/}
                {/*           style={{display: "none"}}>reset</a>*/}

                {/*        <PieChart dimension={} group={}/>*/}
                {/*        */}
                {/*        <div className="clearfix"></div>*/}
                {/*    </div>*/}

                {/*    <div id="quarter-chart">*/}
                {/*        <strong>Quarters</strong>*/}
                {/*        <a className="reset" href="javascript:quarterChart.filterAll();dc.redrawAll();"*/}
                {/*           style={{display: "none"}}>reset</a>*/}

                {/*        <div className="clearfix"></div>*/}
                {/*    </div>*/}

                {/*    <div id="day-of-week-chart">*/}
                {/*        <strong>Day of Week</strong>*/}
                {/*        <a className="reset" href="javascript:dayOfWeekChart.filterAll();dc.redrawAll();"*/}
                {/*           style={{display: "none"}}>reset</a>*/}

                {/*        <div className="clearfix"></div>*/}
                {/*    </div>*/}

                {/*    <div id="fluctuation-chart">*/}
                {/*        <strong>Days by Fluctuation(%)</strong>*/}
                {/*        <span className="reset" style={{display: "none"}}>range: <span className="filter"></span></span>*/}
                {/*        <a className="reset" href="javascript:fluctuationChart.filterAll();dc.redrawAll();"*/}
                {/*           style={{display: "none"}}>reset</a>*/}

                {/*        <div className="clearfix"></div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="row">*/}
                {/*    <div id="monthly-move-chart">*/}
                {/*        <strong>Monthly Index Abs Move & Volume/500,000 Chart</strong>*/}
                {/*        <span*/}
                {/*            className="reset"*/}
                {/*            style={{display: "none"}}*/}
                {/*        >*/}
                {/*            range: <span className="filter"></span>*/}
                {/*        </span>*/}
                {/*        <a*/}
                {/*            className="reset"*/}
                {/*            href="javascript:moveChart.filterAll();volumeChart.filterAll();dc.redrawAll();"*/}
                {/*            style={{display: "none"}}*/}
                {/*        >*/}
                {/*            reset*/}
                {/*        </a>*/}

                {/*        <div className="clearfix"></div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="row">*/}
                {/*    <div id="monthly-volume-chart">*/}
                {/*    </div>*/}
                {/*    <p className="muted pull-right" style={{marginRight: "15px"}}>select a time range to zoom in</p>*/}
                {/*</div>*/}

                {/*<div className="row">*/}
                {/*    <div>*/}
                {/*        <div className="dc-data-count">*/}
                {/*            <span className="filter-count"/> selected out of <span*/}
                {/*            className="total-count"/> records | <a*/}
                {/*            href="javascript:dc.filterAll(); dc.renderAll();">Reset All</a>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <table className="table table-hover dc-data-table">*/}
                {/*    </table>*/}
                {/*</div>*/}

                {/*<div className="clearfix"></div>*/}
            </div>
        )
    }
}
