import * as React from "react";
import PieChart from "../../../../src/PieChart";
import crossfilter from "crossfilter2";
import {legend} from "dc";

export default class HtmlLegend extends React.PureComponent {
    render() {
        let spendData = [
            {Name: 'Mr A', Spent: '$40', Year: 2010},
            {Name: 'Mr B', Spent: '$10', Year: 2011},
            {Name: 'Mr C', Spent: '$40', Year: 2012},
            {Name: 'Mr D', Spent: '$70', Year: 2013},
            {Name: 'Mr E', Spent: '$20', Year: 2014},
            {Name: 'Mr F', Spent: '$50', Year: 2015},
            {Name: 'Mr G', Spent: '$30', Year: 2016},
            {Name: 'Mr D', Spent: '$70', Year: 2017},
            {Name: 'Mr E', Spent: '$20', Year: 2018},
            {Name: 'Mr F', Spent: '$50', Year: 2019},
            {Name: 'Mr G', Spent: '$30', Year: 2020}
        ];

        spendData.forEach(function (d: any) {
            d.Spent = d.Spent.match(/\d+/)[0];
        });

        const ndx = crossfilter(spendData);
        const yearDim = ndx.dimension(d => +d.Year);
        const nameDim = ndx.dimension(d => d.Name);
        const spendPerYearGroup = yearDim.group().reduceSum(d => +d.Spent);
        const nameGroup = nameDim.group().reduceCount();

        return (
            <div>
                <a
                    href={"https://dc-js.github.io/dc.js/examples/html-legend.html"}
                    target="_blank"
                >
                    https://dc-js.github.io/dc.js/examples/html-legend.html
                </a>

                <h1>
                    WIP
                </h1>
                <h3>
                    There's an issue where using the legends causes other filtering to stop working on other charts.
                </h3>

                <br/>
                <div id={"test"}>
                </div>
                <div
                    style={{
                        width: "250px",
                        height: "150px",
                        display: "inline-block"
                    }}
                >
                    <PieChart
                        width={300}
                        height={200}
                        cx={100}
                        dimension={yearDim}
                        group={spendPerYearGroup}
                        legend={legend().x(200).autoItemWidth(true).horizontal(false)}
                    />
                </div>
                <div
                    style={{
                        width: "250px",
                        height: "150px",
                        display: "inline-block",
                        marginLeft: "80px"
                    }}
                >
                    <PieChart
                        width={300}
                        height={250}
                        dimension={nameDim}
                        group={nameGroup}
                        legend={legend().y(190).autoItemWidth(true).horizontal(true)}
                    />
                </div>
            </div>
        )
    }
}
