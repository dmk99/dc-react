import * as React from "react";
import {Crossfilter, Dimension, Group} from "crossfilter2";
import crossfilter from "crossfilter2";
import BoxPlot from "../../../../src/BoxPlot";
import PieChart from "../../../../src/PieChart";
import {bisectLeft} from "d3-array";
import LineChart from "../../../../src/LineChart";
import {scaleLinear} from "d3-scale";
import {StackGroup} from "../../../../src";

interface AreaExampleState {
    ndx?: Crossfilter<any>;
    runDimension?: Dimension<any, any>;
    speedSumGroup?: Group<any, any, any>;
}

export default class AreaExample extends React.Component<void, AreaExampleState> {
    constructor(props: any) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        const experiments = require("../../../data/morley.csv");

        experiments.forEach((x) => {
            x.Speed = +x.Speed;
        });

        const ndx = crossfilter(experiments);
        // @ts-ignore
        const runDimension = ndx.dimension(d => +d.Run);
        // @ts-ignore
        const speedSumGroup = runDimension.group().reduce(
            function(p,v) {
                // keep array sorted for efficiency
                // @ts-ignore
                p[v.Expt] = (p[v.Expt] || 0) + v.Speed;
                return p;
            },
            function(p,v) {
                // @ts-ignore
                p[v.Expt] = (p[v.Expt] || 0) - v.Speed;
                return p;
            },
            function() {
                return {};
            }
        );

        this.setState({
            ndx,
            runDimension,
            speedSumGroup
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

        const stacks: StackGroup[] = [];

        const selStack = (i) => {
            return function(d) {
                return d.value[i];
            }
        };

        for(let i = 1; i < 6; ++i) {
            stacks.push({
                group: this.state.speedSumGroup,
                name: `${i}`,
                accessor: selStack(i)
            })
        }

        return (
            <div>
                <a
                    href={"https://dc-js.github.io/dc.js/examples/area.html"}
                    target="_blank"
                >
                    https://dc-js.github.io/dc.js/examples/area.html
                </a>
                <LineChart
                    width={768}
                    height={480}
                    x={scaleLinear().domain([1, 20])}
                    margins={{left: 50, top: 10, right: 10, bottom: 20}}
                    renderArea
                    brushOn={false}
                    renderDataPoints
                    clipPadding={10}
                    yAxisLabel={"This is the Y Axis!"}
                    dimension={this.state.runDimension}
                    group={this.state.speedSumGroup}
                    stacks={stacks}
                />
            </div>
        )
    }
}
