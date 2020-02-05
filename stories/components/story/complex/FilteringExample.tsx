import * as React from "react";
import PieChart from "../../../../src/PieChart";
import BarChart from "../../../../src/BarChart";
import {scaleLinear} from "d3-scale";
import RowChart from "../../../../src/RowChart";
import crossfilter from "crossfilter2";

export default class FilteringExample extends React.PureComponent {
    render() {
        let spendData = [
            {Name: 'Mr A', Spent: '$40', Year: 2011},
            {Name: 'Mr B', Spent: '$10', Year: 2011},
            {Name: 'Mr C', Spent: '$40', Year: 2011},
            {Name: 'Mr A', Spent: '$70', Year: 2012},
            {Name: 'Mr B', Spent: '$20', Year: 2012},
            {Name: 'Mr B', Spent: '$50', Year: 2013},
            {Name: 'Mr C', Spent: '$30', Year: 2013}
        ];

        spendData.forEach(function (d: any) {
            d.Spent = d.Spent.match(/\d+/);
        });

        var ndx = crossfilter(spendData),
            yearDim = ndx.dimension(function (d) {
                return +d.Year;
            }),
            spendDim = ndx.dimension(function (d) {
                return Math.floor((d.Spent as any) / 10);
            }),
            nameDim = ndx.dimension(function (d) {
                return d.Name;
            }),
            spendPerYear = yearDim.group().reduceSum(function (d) {
                return +d.Spent;
            }),
            spendPerName = nameDim.group().reduceSum(function (d) {
                return +d.Spent;
            }),
            spendHist = spendDim.group().reduceCount();

        return (
            <div>
                <a
                    href={"https://dc-js.github.io/dc.js/examples/filtering.html"}
                    target="_blank"
                >
                    https://dc-js.github.io/dc.js/examples/filtering.html
                </a>
                <PieChart
                    dimension={yearDim}
                    group={spendPerYear}
                    innerRadius={50}
                    controlsUseVisibility
                />
                <BarChart
                    x={scaleLinear().domain([0, 10])}
                    dimension={spendDim}
                    group={spendHist}
                    elasticY
                    controlsUseVisibility
                />
                <RowChart
                    dimension={nameDim}
                    group={spendPerName}
                    elasticX
                    controlsUseVisibility
                />
            </div>
        )
    }
}
