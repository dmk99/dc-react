import BaseChart from "./BaseChart";
import {CoordinateGridProps} from "./props/CoordinateGridProps";
import {StackProps} from "./props/StackProps";
import dc, {lineChart} from "dc";
import {CurveFactory} from "d3-shape";
import * as React from "react";

// TODO: title in StackProps and BaseProps do not match
// @ts-ignore
interface LineChartProps extends CoordinateGridProps<dc.LineChart>, StackProps {
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

    render() {
        return (
            // @ts-ignore
            <BaseChart
                {...this.props}
                setChartRef={this.setChart}
            />
        )
    }
}
