import * as React from "react";
import { BaseProps } from "./props/BaseProps";
import { ColorProps } from "./props/ColorProps";
import { CapProps } from "./props/CapProps";
interface SunburstChartProps extends BaseProps, ColorProps, CapProps {
    cx?: number;
    cy?: number;
    emptyTitle?: string;
    externalLabels?: number;
    innerRadius?: number;
    minAngleForLabel?: number;
    radius?: number;
}
export default class SunburstChart extends React.PureComponent<SunburstChartProps> {
    private setChart;
    render(): JSX.Element;
}
export {};
