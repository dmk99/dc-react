import * as React from "react";
import {SimplePlayers} from "../../../data/Players";
import * as crossfilter from "crossfilter2";
import LineChart from "../../../../src/LineChart";
import {scaleLinear, scaleTime} from "d3-scale";
import DataCount from "../../../../src/DataCount";
import DataGrid from "../../../../src/DataGrid";
import PieChart from "../../../../src/PieChart";

export default class LineChartExample extends React.PureComponent {
    render() {
        const ndx = crossfilter(SimplePlayers);
        const playerDim = ndx.dimension(function (d) {
            return d.date;
        });

        const salaryPerPlayer = playerDim.group().reduceSum(function (d) {
            return d.salary;
        });

        return (
            <div>
                <LineChart
                    dimension={playerDim}
                    group={salaryPerPlayer}
                    x={scaleTime().domain([
                        new Date(2018, 0, 1),
                        new Date(2018, 0, 15)
                    ])}
                    y={scaleLinear().domain([0, 7000])}
                    chartGroup={"hello"}
                    onFiltered={(chart, filter) => {
                        console.log(chart);
                        console.log(filter);
                    }}
                />
                <DataCount
                    crossfilter={ndx}
                    groupAll={playerDim.groupAll()}
                    chartGroup={"hello"}
                    html={{
                        some: '%filter-count out of %total-count records selected',
                        all: 'All (%total-count) records selected. Click on charts to apply filters'
                    }}
                />
                <DataGrid
                    dimension={playerDim}
                    group={salaryPerPlayer}
                    chartGroup={"hello"}
                    section={(d) => d.player}
                />
                <PieChart dimension={playerDim} group={salaryPerPlayer}/>
            </div>
        )
    }
}
