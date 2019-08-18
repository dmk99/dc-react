import {storiesOf} from "@storybook/react";
import * as crossfilter from "crossfilter2";
import {SimplePlayers} from "../../data/Players";
import PieChart from "../../../src/PieChart";
import * as React from "react";

const ndx = crossfilter(SimplePlayers);
const playerDim = ndx.dimension(function (d) {
    return d.player;
});

const salaryPerPlayer = playerDim.group().reduceSum(function (d) {
    return d.salary;
});

storiesOf("Pie Chart", module)
    .add("Simple", () => (
        <PieChart
            dimension={playerDim}
            group={salaryPerPlayer}
        />
    ));
