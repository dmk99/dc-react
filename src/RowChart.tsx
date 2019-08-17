import BaseChart from "./BaseChart";
import {rowChart, Scale} from "dc";
import {MarginProps} from "./props/MarginProps";
import {CapProps} from "./props/CapProps";
import {ColorProps} from "./props/ColorProps";
import {BaseProps} from "./props/BaseProps";
import {Axis} from "d3-axis";

interface RowChartProps extends CapProps, MarginProps, ColorProps, BaseProps {
    elasticX?: boolean;
    fixedBarHeight?: boolean | number;
    gap?: number;
    labelOffsetX?: number;
    labelOffsetY?: number;
    renderTitleLabel?: string;
    titleLabelOffsetX?: number;
    titleLabelOffsetY?: number;
    x?: Scale<any>;
    xAxis?: Axis<any>;
}

export default class RowChart extends BaseChart<RowChartProps> {
    componentDidMount(): void {
        this.chart = rowChart(this.chartRef);

        super.componentDidMount();

        this.chart.render();
    }
}
