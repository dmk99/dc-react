import BaseChart from "./BaseChart";
import { CoordinateGridProps } from "./props/CoordinateGridProps";
import { StackProps } from "./props/StackProps";
interface BarChartProps extends CoordinateGridProps, StackProps {
    alwaysUseRounding?: boolean;
    barPadding?: number;
    centerBar?: boolean;
    gap?: number;
    outerPadding?: number;
}
export default class BarChart extends BaseChart<BarChartProps> {
    componentDidMount(): void;
}
export {};
