import BaseChart from "./BaseChart";
import {CoordinateGridProps} from "./props/CoordinateGridProps";
import {StackProps} from "./props/StackProps";
import {dataCount, lineChart} from "dc";
import {CurveFactory} from "d3-shape";
import * as React from "react";

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

export default class LineChart extends React.PureComponent<LineChartProps> {
    private setChart = (r, cg) => {
        return lineChart(r, cg);
    };

    private onChartMounted = (chart: any) => {
        if(this.props.stacks) {
            this.props.stacks.forEach((stack) => {
                // @ts-ignore
                chart.stack(stack.group, stack.name, stack.accessor);
            });
        }
    };

    render() {
        return (
            // @ts-ignore
            <BaseChart
                {...this.props}
                onChartMounted={this.onChartMounted}
                setChartRef={this.setChart}
            />
        )
    }
}
