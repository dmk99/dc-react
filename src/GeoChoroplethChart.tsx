import BaseChart from "./BaseChart";
import {heatMap, geoChoroplethChart} from "dc";
import * as React from "react";
import {BaseProps} from "./props/BaseProps";
import {ColorProps} from "./props/ColorProps";
import {MarginProps} from "./props/MarginProps";
import {SortingFunction} from "./DataTable";

interface GeoChoroplethChartProps extends BaseProps, ColorProps {
    // TODO
}

export default class GeoChoroplethChart extends BaseChart<GeoChoroplethChartProps> {
    componentDidMount(): void {
        this.chart = geoChoroplethChart(this.chartRef);

        super.componentDidMount();

        this.chart.render();
    }
}
