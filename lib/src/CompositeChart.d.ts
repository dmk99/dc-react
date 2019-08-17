import BaseChart from "./BaseChart";
import { Scale } from "dc";
import { CoordinateGridProps } from "./props/CoordinateGridProps";
import { Axis } from "d3-axis";
import { AllDcCharts } from "./props/BaseProps";
export interface CompositeChartProps extends Pick<CoordinateGridProps, Exclude<keyof CoordinateGridProps, "group" | "dimension">> {
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
export default class CompositeChart extends BaseChart<CompositeChartProps> {
    componentDidMount(): void;
}
