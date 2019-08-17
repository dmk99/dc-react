import * as React from "react";
import {pieChart} from "dc";
import {BaseProps} from "./props/BaseProps";
import BaseChart from "./BaseChart";
import {CapProps} from "./props/CapProps";
import {ColorProps} from "./props/ColorProps";

interface PieChartProps extends CapProps, ColorProps, BaseProps {
    cx?: number;
    cy?: number;
    drawPaths?: boolean;
    emptyTitle?: string;
    externalLabels?: number;
    externalLabelsPadding?: number;
    innerRadius?: number;
    minAngleForLabel?: number;
    radius?: number;
    slicesCap?: number;
}

export default class PieChart extends BaseChart<PieChartProps> {
    componentDidMount(): void {
        this.chart = pieChart(this.chartRef);

        super.componentDidMount();

        this.chart.render();
    }
}
