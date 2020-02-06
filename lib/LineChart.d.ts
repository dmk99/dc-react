import { CoordinateGridProps } from "./props/CoordinateGridProps";
import { StackProps } from "./props/StackProps";
import dc from "dc";
import { CurveFactory } from "d3-shape";
import * as React from "react";
interface LineChartProps extends CoordinateGridProps<dc.LineChart>, StackProps {
    curve?: CurveFactory;
    dashStyle?: number[];
    defined?: () => boolean;
    dotRadius?: number;
    interpolate?: CurveFactory;
    renderArea?: boolean;
    renderDataPoints?: boolean;
    tension?: number;
    xyTipsOn?: boolean;
}
export default class LineChart extends React.PureComponent<LineChartProps> {
    private setChart;
    private onChartMounted;
    render(): JSX.Element;
}
export {};
