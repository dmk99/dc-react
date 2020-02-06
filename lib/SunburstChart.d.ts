import * as React from "react";
import { BaseProps } from "./props/BaseProps";
import { ColorProps } from "./props/ColorProps";
import { CapProps } from "./props/CapProps";
import dc from "dc";
import { BaseChartComponent, ParentType } from "./props/BaseChartComponent";
interface SunburstChartProps extends BaseProps<dc.SunburstChart>, ColorProps, CapProps {
    cx?: number;
    cy?: number;
    emptyTitle?: string;
    externalLabels?: number;
    innerRadius?: number;
    minAngleForLabel?: number;
    radius?: number;
}
export default class SunburstChart extends React.PureComponent<SunburstChartProps> implements BaseChartComponent<dc.SunburstChart> {
    setChart(parent: ParentType, chartGroup?: string): dc.SunburstChart;
    render(): JSX.Element;
}
export {};
