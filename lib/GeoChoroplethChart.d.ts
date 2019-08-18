import * as React from "react";
import { BaseProps } from "./props/BaseProps";
import { ColorProps } from "./props/ColorProps";
interface GeoChoroplethChartProps extends BaseProps, ColorProps {
}
export default class GeoChoroplethChart extends React.PureComponent<GeoChoroplethChartProps> {
    private setChart;
    render(): JSX.Element;
}
export {};
