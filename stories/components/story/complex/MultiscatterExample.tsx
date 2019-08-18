import * as React from "react";
import CompositeChart from "../../../../src/CompositeChart";
import {scaleLinear} from "d3-scale";
import {Crossfilter, Dimension, Group} from "crossfilter2";
import {legend, lineChart, scatterPlot} from "dc";
import * as crossfilter from "crossfilter2";
import ScatterPlot from "../../../../src/ScatterPlot";

interface MultiscatterExampleState {
    ndx?: Crossfilter<any>;
    scatterDimension?: Dimension<any, any>;
    scatterGroup?: Group<any, any, any>;
    lineDimension?: Dimension<any, any>;
    lineGroup?: Group<any, any, any>;
}

export default class MultiscatterExample extends React.Component<void, MultiscatterExampleState> {
    constructor(props: any) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        const morley = require("../../../data/morley.csv");

        const ndx = crossfilter(morley);
        // @ts-ignore
        const scatterDimension = ndx.dimension(d => [+d.Run, d.Speed * d.Run / 1000]);
        const scatterGroup = scatterDimension.group();
        // @ts-ignore
        const lineDimension = ndx.dimension((d) => +d.Run);
        const lineGroup = lineDimension.group().reduceSum((d) => {
            // @ts-ignore
            return d.Speed * d.Run / 4000;
        });

        this.setState({
            ndx,
            scatterDimension,
            scatterGroup,
            lineDimension,
            lineGroup
        });
    }

    render() {
        if (this.state.ndx == null) {
            return (
                <div>
                    Loading Data...
                </div>
            )
        }

        return (
            <div>
                <a
                    href={"https://dc-js.github.io/dc.js/examples/multi-scatter.html"}
                    target="_blank"
                >
                    https://dc-js.github.io/dc.js/examples/multi-scatter.html
                </a>
                <ScatterPlot
                    x={scaleLinear().domain([6, 20])}
                    dimension={this.state.scatterDimension}
                    group={this.state.scatterGroup}
                    colors={"blue"}
                />
                <CompositeChart
                    width={768}
                    height={480}
                    x={scaleLinear().domain([6, 20])}
                    yAxisLabel={"This is the Y Axis!"}
                    legend={legend().x(70).y(10).itemHeight(13).gap(5)}
                    brushOn={false}
                    charts={(composite) => [
                        scatterPlot(composite)
                            .group(this.state.scatterGroup, "Blue Group")
                            .colors("blue"),
                        scatterPlot(composite)
                            .group(this.state.scatterGroup, "Red Group")
                            .colors("red")
                            .valueAccessor(function (d) { return d.key[1] + 5; }),
                        lineChart(composite)
                            .dimension(this.state.lineDimension)
                            .group(this.state.lineGroup, "Line Group")
                    ]}
                />
            </div>
        )
    }
}
