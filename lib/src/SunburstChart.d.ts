import BaseChart from "./BaseChart";
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
export default class SunburstChart extends BaseChart<SunburstChartProps> {
    componentDidMount(): void;
}
export {};
