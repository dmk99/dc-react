import BaseChart from "./BaseChart";
import {CoordinateGridProps} from "./props/CoordinateGridProps";
import {StackProps} from "./props/StackProps";
import dc, {barChart} from "dc";
import * as React from "react";
import {BaseChartComponent, ParentType} from "./props/BaseChartComponent";

// TODO: title in StackProps and BaseProps do not match
// @ts-ignore
interface BarChartProps extends CoordinateGridProps<dc.BarChart>, StackProps {
    alwaysUseRounding?: boolean;
    barPadding?: number;
    centerBar?: boolean;
    gap?: number;
    outerPadding?: number;
}

export default class BarChart extends React.PureComponent<BarChartProps> implements BaseChartComponent<dc.BarChart> {
    render() {
        return (
            <BaseChart<dc.BarChart, BarChartProps>
                {...this.props}
                setChartRef={this.setChart}
            />
        )
    }

    setChart(parent: ParentType, chartGroup?: string): dc.BarChart {
        // @ts-ignore
        return barChart(parent, chartGroup);
    }
}
