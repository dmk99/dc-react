import * as React from "react";
import * as crossfilter from "crossfilter2";
import {scaleBand} from "d3-scale";
import BarChart from "../../../../src/BarChart";
import dc = require("dc");
import * as reductio from "reductio";

export default class BridgeChartExample extends React.PureComponent<{}> {
	render() {
		const original_data = [];
		const dummy_data = [];

		//creating example data - could easily be any data reading process from sources like CSV or JSON
		original_data.push({item: "x0", value: 10});
		original_data.push({item: "x1", value: 2});
		original_data.push({item: "x2", value: -1});
		original_data.push({item: "x3", value: -3});
		original_data.push({item: "x4", value: 8});

		//creating the dummy data, the invisible columns supporting the waterfall chart.
		//This is going to be the first stack whereas the real data (original_data) is the
		//second stack
		dummy_data.push({item: "x0", value: 0});
		dummy_data.push({item: "x1", value: 10});
		dummy_data.push({item: "x2", value: 12});
		dummy_data.push({item: "x3", value: 11});
		dummy_data.push({item: "x4", value: 0});
		//creating crossfilter based off of the real data. Again, you can have your own crossfilter creation process here.
		const ndx = crossfilter(original_data);
		const itemDimension = ndx.dimension(function (d) {
			return d.item;
		});
		// @ts-ignore
		const reducerValue = reductio().count(true).sum(function (d: any) {
			return d.value;
		}).avg(true);
		const itemGroup = itemDimension.group();
		const grp = reducerValue(itemGroup);
		// we should also have a similar cross filter on the dummy data
		const ndx_dummy = crossfilter(dummy_data);
		const itemDimension_dummy = ndx_dummy.dimension(function (d) {
			return d.item;
		});
		// @ts-ignore
		const reducerValue_dummy = reductio().count(true).sum(function (d: any) {
			return d.value;
		}).avg(true);
		const itemGroup_dummy = itemDimension_dummy.group();
		const dummy_grp = reducerValue_dummy(itemGroup_dummy);

		return (
			<div>
				<div>
					Using the implementation from <a href={"https://github.com/shahriarasta/dcjs_waterfall/blob/master/dcjs_waterfall.html"}>here</a>
				</div>
				<BarChart
					dimension={itemDimension}
					group={dummy_grp}
					valueAccessor={(d) => d.value.sum}
					title={(d) => (d.key + "  (" + d.value.sum + ")")}
					centerBar={false}
					gap={7}
					x={scaleBand()}
					// @ts-ignore
					xUnits={dc.units.ordinal}
					controlsUseVisibility
					elasticY
					height={400}
					filterHandler={((dimension, filter) => [filter])}
					stacks={[
						{
							group: grp,
							name: "x"
						}
					]}
					onPretransition={((chart, filter) => {

						//coloring the bars
						chart.selectAll("rect.bar").style("fill", function (d) {
							return "white";
						});
						chart.selectAll("rect.bar").style("stroke", "#ccc");//change the color to white if you want a clean waterfall without dashed boundaries
						chart.selectAll("rect.bar").style("stroke-dasharray", "1,0,2,0,1");

						// stack._1 is your real data, whereas stack._0 is the dummy data. You want to treat the styling of these stacks differently
						chart.selectAll("svg g g.chart-body g.stack._1 rect.bar").style("fill", function (d) {
							console.log(d.data.value.sum);
							if (d.data.value.sum > 0) return '#ff7c19'; else return '#7c7c7c';
						});
						chart.selectAll("svg g g.chart-body g.stack._1 rect.bar").style("stroke", "white");
						chart.selectAll("svg g g.chart-body g.stack._1 rect.bar").style("stroke-dasharray", "1");
						// chose the color of deselected bars, but only for the real data.
						chart.selectAll("svg g g.chart-body g.stack._1 rect.deselected").style("fill", function (d) {
							return '#ccc';
						});
						chart.selectAll('g.x text').style('fill', '#8e8e8e');
						chart.selectAll('g.y text').style('fill', '#777777');
						chart.selectAll('g.x text').style('font-size', '10.5px');
						chart.selectAll('g.y.axis g.tick line').style("stroke", "#f46542");
						chart.selectAll('.domain').style("stroke", "#c6c6c6");
						chart.selectAll('rect.bar').on("contextmenu", function (d) {
							event.preventDefault();
						});
					})}
				/>
			</div>
		)
	}
}
