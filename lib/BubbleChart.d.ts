import dc from "dc";
import { CoordinateGridProps } from "./props/CoordinateGridProps";
import * as React from "react";
import { BubbleProps } from "./props/BubbleProps";
import { BaseChartComponent, ParentType } from "./props/BaseChartComponent";
import { BaseProps } from "./props/BaseProps";
interface BubbleChartProps extends CoordinateGridProps<dc.BubbleChart>, BubbleProps, BaseProps<dc.BubbleChart> {
    elasticRadius?: boolean;
    sortBubbleSize?: boolean;
}
export default class BubbleChart extends React.PureComponent<BubbleChartProps> implements BaseChartComponent<dc.BubbleChart> {
    render(): JSX.Element;
    setChart(parent: ParentType, chartGroup?: string): dc.BubbleChart;
}
export {};
