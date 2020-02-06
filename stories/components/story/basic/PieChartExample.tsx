import * as React from "react";
import PieChart from "../../../../src/PieChart";
import {SimplePlayers} from "../../../data/Players";
import crossfilter from "crossfilter2";

export default class PieChartExample extends React.PureComponent {
    render() {
        const ndx = crossfilter(SimplePlayers);
        const playerDim = ndx.dimension(function (d) {
            return d.player;
        });

        const salaryPerPlayer = playerDim.group().reduceSum(function (d) {
            return d.salary;
        });

        return (
            <PieChart
                dimension={playerDim}
                group={salaryPerPlayer}
            />
        )
    }
}
