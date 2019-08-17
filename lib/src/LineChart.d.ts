import BaseChart from "./BaseChart";
import { CoordinateGridProps } from "./props/CoordinateGridProps";
import { StackProps } from "./props/StackProps";
import { CurveFactory } from "d3-shape";
interface LineChartProps extends CoordinateGridProps, StackProps {
    curve?: CurveFactory;
    dashStyle?: number[];
    defined?: () => boolean;
    dotRadius?: number;
    interpolate?: CurveFactory;
    renderArea?: boolean;
    renderDataPoints?: boolean;
    tension?: number;
    xyTipsOn?: boolean;
}
export default class LineChart extends BaseChart<LineChartProps> {
    componentDidMount(): void;
}
export {};
