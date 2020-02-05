import * as React from "react";
import CompositeChart from "../../../../src/CompositeChart";
import {scaleLinear} from "d3-scale";
import {csv} from "d3-fetch";
import {csvParse, DSVRowArray} from "d3-dsv";
import {Crossfilter, Dimension, Group} from "crossfilter2";
import {legend, pluck, lineChart} from "dc";
import crossfilter from "crossfilter2";
import LineChart from "../../../../src/LineChart";

interface CompositeExampleState {
    exp1?: any[];
    exp2?: any[];

    ndx?: Crossfilter<any>;
    dim?: Dimension<any, any>;
    grp1?: Group<any, any, any>;
    grp2?: Group<any, any, any>;
}

export default class CompositeExample extends React.Component<void, CompositeExampleState> {
    constructor(props: any) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        const morley = require("../../../data/morley.csv");
        const morley2 = require("../../../data/morley2.csv");

        const exp1 = morley;
        const exp2 = morley2;

        const ndx = crossfilter();
        ndx.add(exp1.map((d) => ({
            x: +d.Run,
            y2:0,
            // @ts-ignore
            y1: d.Speed * d.Run / 1000
        })));

        ndx.add(exp2.map((d) => ({
            x: +d.Run,
            y1:0,
            // @ts-ignore
            y2: d.Speed * d.Run / 1000
        })));

        const dim = ndx.dimension(pluck('x'));
        const grp1 = dim.group().reduceSum(pluck('y1'));
        const grp2 = dim.group().reduceSum(pluck('y2'));

        this.setState({
            exp1: exp1,
            exp2: exp2,
            ndx: ndx,
            dim: dim,
            grp1: grp1,
            grp2: grp2
        });
    }

    render() {
        if (this.state.exp1 == null && this.state.exp2 == null) {
            return (
                <div>
                    Loading Data...
                </div>
            )
        }

        return (
            <div>
                <a
                    href={"https://github.com/dc-js/dc.js/blob/master/web/examples/composite.html"}
                    target="_blank"
                >
                    https://github.com/dc-js/dc.js/blob/master/web/examples/composite.html
                </a>
                <CompositeChart
                    width={768}
                    height={480}
                    x={scaleLinear().domain([0, 20])}
                    yAxisLabel={"The Y Axis"}
                    legend={legend().x(80).y(20).itemHeight(13).gap(5)}
                    renderHorizontalGridLines
                    brushOn={false}
                    charts={(composite) => [
                        // TODO: Can this be handled as a collection of children components?
                        lineChart(composite)
                            .dimension(this.state.dim)
                            .colors('red')
                            .group(this.state.grp1, "Top Line")
                            .dashStyle([2,2]),
                        lineChart(composite)
                            .dimension(this.state.dim)
                            .colors('blue')
                            .group(this.state.grp2, "Bottom Line")
                            .dashStyle([5,5])
                    ]}
                >

                </CompositeChart>
            </div>
        )
    }
}
