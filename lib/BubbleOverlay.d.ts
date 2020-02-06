import dc from "dc";
import * as React from "react";
import { BubbleProps } from "./props/BubbleProps";
import { BaseProps } from "./props/BaseProps";
import { BaseChartComponent, ParentType } from "./props/BaseChartComponent";
interface BubbleOverlayProps extends BaseProps<dc.BubbleOverlayChart>, BubbleProps {
}
export default class BubbleChart extends React.PureComponent<BubbleOverlayProps> implements BaseChartComponent<dc.BubbleOverlayChart> {
    render(): JSX.Element;
    setChart(parent: ParentType, chartGroup?: string): dc.BubbleOverlayChart;
}
export {};
