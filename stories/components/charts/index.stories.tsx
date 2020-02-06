import {storiesOf} from "@storybook/react";
import crossfilter from "crossfilter2";
import {SimplePlayers} from "../../data/Players";
import PieChart from "../../../src/PieChart";
import * as React from "react";
import BarChart from "../../../src/BarChart";
import {scaleLinear} from "d3-scale";

const ndx = crossfilter(SimplePlayers);
const playerDim = ndx.dimension(function (d) {
    return d.player;
});

const salaryPerPlayer = playerDim.group().reduceSum(function (d) {
    return d.salary;
});

// Morley Experiments
const experiments = require("../../data/morley.csv");

experiments.forEach((x) => {
    x.Speed = +x.Speed;
});

const morleyNdx = crossfilter(experiments);
// @ts-ignore
const runDimension = morleyNdx.dimension(d => +d.Run);
// @ts-ignore
const speedSumGroup = runDimension.group().reduceSum(d => d.Speed * d.Run / 1000);


storiesOf("Charts", module)
    .add("Pie Chart", () => (
        <PieChart
            dimension={playerDim}
            group={salaryPerPlayer}
        />
    ))
    .add("Bar Chart", () => (
        <BarChart
            width={768}
            height={480}
            x={scaleLinear().domain([6, 20])}
            dimension={runDimension}
            group={speedSumGroup}
        />
    ))
;
