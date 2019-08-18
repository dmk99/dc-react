import { Scale } from "dc";
import { MarginProps } from "./props/MarginProps";
import { CapProps } from "./props/CapProps";
import { ColorProps } from "./props/ColorProps";
import { BaseProps } from "./props/BaseProps";
import { Axis } from "d3-axis";
import * as React from "react";
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
export default class RowChart extends React.PureComponent<RowChartProps> {
    private setChart;
    render(): JSX.Element;
}
export {};
