import BaseChart from "./BaseChart";
import {bubbleOverlayChart} from "dc";
import * as React from "react";
import {BubbleProps} from "./props/BubbleProps";
import {BaseProps} from "./props/BaseProps";

interface BubbleOverlayProps extends BaseProps, BubbleProps {
    // TODO
}

export default class BubbleChart extends BaseChart<BubbleOverlayProps> {
    componentDidMount(): void {
        this.chart = bubbleOverlayChart(this.chartRef);

        super.componentDidMount();

        this.chart.render();
    }
}
