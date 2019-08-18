import { CoordinateGridProps } from "./props/CoordinateGridProps";
import * as React from "react";
import { BubbleProps } from "./props/BubbleProps";
interface BubbleChartProps extends CoordinateGridProps, BubbleProps {
    elasticRadius?: boolean;
    sortBubbleSize?: boolean;
}
export default class BubbleChart extends React.PureComponent<BubbleChartProps> {
    private setChart;
    render(): JSX.Element;
}
export {};
