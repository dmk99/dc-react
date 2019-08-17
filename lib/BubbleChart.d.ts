import BaseChart from "./BaseChart";
import { CoordinateGridProps } from "./props/CoordinateGridProps";
import { BubbleProps } from "./props/BubbleProps";
interface BubbleChartProps extends CoordinateGridProps, BubbleProps {
    elasticRadius?: boolean;
    sortBubbleSize?: boolean;
}
export default class BubbleChart extends BaseChart<BubbleChartProps> {
    componentDidMount(): void;
}
export {};
