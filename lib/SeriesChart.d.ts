import { CompositeChartProps } from "./CompositeChart";
import * as React from "react";
interface SeriesProps extends CompositeChartProps {
}
export default class SeriesChart extends React.PureComponent<SeriesProps> {
    private setChart;
    render(): JSX.Element;
}
export {};
