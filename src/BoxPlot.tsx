import BaseChart from "./BaseChart";
import dc, {boxPlot} from "dc";
import {CoordinateGridProps} from "./props/CoordinateGridProps";
import * as React from "react";
import {BaseChartComponent, ParentType} from "./props/BaseChartComponent";
import {BaseProps} from "./props/BaseProps";

interface BoxPlotProps extends Pick<CoordinateGridProps<dc.BoxPlot>, Exclude<keyof CoordinateGridProps<dc.BoxPlot>, "x">>, BaseProps<dc.BoxPlot> {
    boldOutlier?: boolean;
    boxPadding?: number;
    boxWidth?: number;
    dataOpacity?: number;
    dataWidthPortion?: number;
    outerPadding?: number;
    renderDataPoints?: boolean;
    showOutliers?: boolean;
    tickFormat?: (n: number | { valueOf(): number }) => string;
    yRangePadding?: number | (() => number);
}

export default class BoxPlot extends React.PureComponent<BoxPlotProps> implements BaseChartComponent<dc.BoxPlot> {
    setChart(parent: ParentType, chartGroup?: string): dc.BoxPlot {
        // @ts-ignore
        return boxPlot(parent, chartGroup);
    }

    render() {
        return (
            <BaseChart<dc.BoxPlot, BoxPlotProps>
                {...this.props}
                setChartRef={this.setChart}
            />
        )
    }
}
