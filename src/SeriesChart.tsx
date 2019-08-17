import BaseChart from "./BaseChart";
import {seriesChart} from "dc";
import {CompositeChartProps} from "./CompositeChart";

interface SeriesProps extends CompositeChartProps {
}

export default class SeriesChart extends BaseChart<SeriesProps> {
    componentDidMount(): void {
        this.chart = seriesChart(this.chartRef);

        super.componentDidMount();

        this.chart.render();
    }
}
