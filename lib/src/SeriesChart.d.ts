import BaseChart from "./BaseChart";
import { CompositeChartProps } from "./CompositeChart";
interface SeriesProps extends CompositeChartProps {
}
export default class SeriesChart extends BaseChart<SeriesProps> {
    componentDidMount(): void;
}
export {};
