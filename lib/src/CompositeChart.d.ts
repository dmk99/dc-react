import { Scale } from "dc";
import { CoordinateGridProps } from "./props/CoordinateGridProps";
import { Axis } from "d3-axis";
import * as React from "react";
import { AllDcCharts } from "./props/BaseProps";
import dc = require("dc");
import { BaseChartComponent } from "./props/BaseChartComponent";
export interface CompositeChartProps extends Pick<CoordinateGridProps<dc.CompositeChart>, Exclude<keyof CoordinateGridProps<dc.CompositeChart>, "group" | "dimension">> {
    alignYAxes?: boolean;
    childOptions?: any;
    rightY?: Scale<any>;
    rightYAxis?: Axis<any>;
    rightYAxisLabel?: string;
    shareColors?: boolean;
    shareTitle?: boolean;
    useRightAxisGridLines?: boolean;
    charts: (parentChart: any) => AllDcCharts[];
}
export default class CompositeChart extends React.PureComponent<CompositeChartProps> implements BaseChartComponent<dc.CompositeChart> {
    setChart(parent: any, chartGroup?: string): dc.CompositeChart;
    private onChartMounted;
    render(): JSX.Element;
}
