import BaseChart from "./BaseChart";
import {CoordinateGridProps} from "./props/CoordinateGridProps";
import {StackProps} from "./props/StackProps";
import {lineChart} from "dc";
import {CurveFactory} from "d3-shape";

// TODO: title in StackProps and BaseProps do not match
// @ts-ignore
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
    componentDidMount(): void {
        this.chart = lineChart(this.chartRef);

        super.componentDidMount();

        if(this.props.stacks) {
            this.props.stacks.forEach((stack) => {
                // @ts-ignore
                this.chart.stack(stack.group, stack.name, stack.accessor);
            });
        }

        this.chart.render();
    }
}
