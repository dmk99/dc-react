import BaseChart from "./BaseChart";
import {bubbleChart} from "dc";
import {CoordinateGridProps} from "./props/CoordinateGridProps";
import * as React from "react";
import {BubbleProps} from "./props/BubbleProps";

interface BubbleChartProps extends CoordinateGridProps, BubbleProps {
    elasticRadius?: boolean;
    sortBubbleSize?: boolean;
}

export default class BubbleChart extends BaseChart<BubbleChartProps> {
    componentDidMount(): void {
        this.chart = bubbleChart(this.chartRef);

        super.componentDidMount();

        this.chart.render();
    }
}
