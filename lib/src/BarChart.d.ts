import { CoordinateGridProps } from "./props/CoordinateGridProps";
import { StackProps } from "./props/StackProps";
import dc from "dc";
import * as React from "react";
import { BaseChartComponent, ParentType } from "./props/BaseChartComponent";
interface BarChartProps extends CoordinateGridProps<dc.BarChart>, StackProps {
    alwaysUseRounding?: boolean;
    barPadding?: number;
    centerBar?: boolean;
    gap?: number;
    outerPadding?: number;
}
export default class BarChart extends React.PureComponent<BarChartProps> implements BaseChartComponent<dc.BarChart> {
    render(): JSX.Element;
    setChart(parent: ParentType, chartGroup?: string): dc.BarChart;
}
export {};
