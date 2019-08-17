import * as React from "react";
import {Crossfilter, Dimension, Group} from "crossfilter2";
import * as crossfilter from "crossfilter2";
import BoxPlot from "../../../../src/BoxPlot";
import PieChart from "../../../../src/PieChart";
import {bisectLeft} from "d3-array";

interface BoxPlotBasicExampleState {
    ndx?: Crossfilter<any>;
    runDimension?: Dimension<any, any>;
    runGroup?: Group<any, any, any>;
    experimentDimension?: Dimension<any, any>;
    speedArrayGroup?: Group<any, any, any>;
}

export default class BoxPlotBasicExample extends React.Component<void, BoxPlotBasicExampleState> {
    constructor(props: any) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        const experiments = require("./data/morley.csv");

        experiments.forEach((x) => {
            x.Speed = +x.Speed;
        });

        const ndx = crossfilter(experiments);
        // @ts-ignore
        const runDimension = ndx.dimension(d => +d.Run);
        const runGroup = runDimension.group();
        // @ts-ignore
        const experimentDimension = ndx.dimension((d) => `exp-${d.Expt}`);
        const speedArrayGroup = experimentDimension.group().reduce(
            function(p,v) {
                // keep array sorted for efficiency
                // @ts-ignore
                p.splice(bisectLeft(p, v.Speed), 0, v.Speed);
                return p;
            },
            function(p,v) {
                // @ts-ignore
                p.splice(bisectLeft(p, v.Speed), 1);
                return p;
            },
            function() {
                return [];
            }
        );

        this.setState({
            ndx,
            runDimension,
            runGroup,
            experimentDimension,
            speedArrayGroup
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
                    href={"https://dc-js.github.io/dc.js/examples/boxplot-basic.html"}
                    target="_blank"
                >
                    https://dc-js.github.io/dc.js/examples/boxplot-basic.html
                </a>
                <BoxPlot
                    width={768}
                    height={480}
                    margins={{top: 10, right: 50, bottom: 30, left: 50}}
                    dimension={this.state.experimentDimension}
                    group={this.state.speedArrayGroup}
                    elasticX
                    elasticY
                />
                <PieChart
                    width={140}
                    height={140}
                    radius={70}
                    dimension={this.state.runDimension}
                    group={this.state.runGroup}
                />
            </div>
        )
    }
}
