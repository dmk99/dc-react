import BaseChart from "./BaseChart";
import {CoordinateGridProps} from "./props/CoordinateGridProps";
import {StackProps} from "./props/StackProps";
import {barChart} from "dc";

// TODO: title in StackProps and BaseProps do not match
// @ts-ignore
interface BarChartProps extends CoordinateGridProps, StackProps {
    alwaysUseRounding?: boolean;
    barPadding?: number;
    centerBar?: boolean;
    gap?: number;
    outerPadding?: number;
}

export default class BarChart extends BaseChart<BarChartProps> {
    componentDidMount(): void {
        this.chart = barChart(this.chartRef);

        super.componentDidMount();

        this.chart.render();
    }
}
