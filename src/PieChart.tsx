import * as React from "react";
import dc, {pieChart} from "dc";
import {BaseProps} from "./props/BaseProps";
import BaseChart from "./BaseChart";
import {CapProps} from "./props/CapProps";
import {ColorProps} from "./props/ColorProps";
import {BaseChartComponent, ParentType} from "./props/BaseChartComponent";

interface PieChartProps extends CapProps, ColorProps, BaseProps<dc.PieChart> {
    cx?: number;
    cy?: number;
    drawPaths?: boolean;
    emptyTitle?: string;
    externalLabels?: number;
    externalLabelsPadding?: number;
    innerRadius?: number;
    minAngleForLabel?: number;
    radius?: number;
    slicesCap?: number;
}

export default class PieChart extends React.PureComponent<PieChartProps> implements BaseChartComponent<dc.PieChart> {
    render() {
        return (
            <BaseChart
                {...this.props}
                setChartRef={this.setChart}
            />
        );
    }

    setChart(parent: ParentType, chartGroup?: string): dc.PieChart {
        // @ts-ignore
        return pieChart(parent, chartGroup);
    }
}
