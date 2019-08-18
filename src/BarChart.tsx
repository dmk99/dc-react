import BaseChart from "./BaseChart";
import {CoordinateGridProps} from "./props/CoordinateGridProps";
import {StackProps} from "./props/StackProps";
import {barChart} from "dc";
import * as React from "react";

// TODO: title in StackProps and BaseProps do not match
// @ts-ignore
interface BarChartProps extends CoordinateGridProps, StackProps {
    alwaysUseRounding?: boolean;
    barPadding?: number;
    centerBar?: boolean;
    gap?: number;
    outerPadding?: number;
}

export default class BarChart extends React.PureComponent<BarChartProps> {
    private setChart = (r, cg) => {
        return barChart(r, cg);
    };

    render() {
        return (
            <BaseChart
                {...this.props}
                setChartRef={this.setChart}
            />
        )
    }
}
