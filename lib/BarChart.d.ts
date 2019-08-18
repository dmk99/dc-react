import { CoordinateGridProps } from "./props/CoordinateGridProps";
import { StackProps } from "./props/StackProps";
import * as React from "react";
interface BarChartProps extends CoordinateGridProps, StackProps {
    alwaysUseRounding?: boolean;
    barPadding?: number;
    centerBar?: boolean;
    gap?: number;
    outerPadding?: number;
}
export default class BarChart extends React.PureComponent<BarChartProps> {
    private setChart;
    render(): JSX.Element;
}
export {};
