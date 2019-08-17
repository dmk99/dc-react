import BaseChart from "./BaseChart";
import { BaseProps } from "./props/BaseProps";
import { ColorProps } from "./props/ColorProps";
interface GeoChoroplethChartProps extends BaseProps, ColorProps {
}
export default class GeoChoroplethChart extends BaseChart<GeoChoroplethChartProps> {
    componentDidMount(): void;
}
export {};
