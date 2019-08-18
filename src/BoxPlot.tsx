import BaseChart from "./BaseChart";
import {boxPlot} from "dc";
import {CoordinateGridProps} from "./props/CoordinateGridProps";
import * as React from "react";

interface BoxPlotProps extends Pick<CoordinateGridProps, Exclude<keyof CoordinateGridProps, "x">> {
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

export default class BoxPlot extends React.PureComponent<BoxPlotProps> {
    private setChart = (r, cg) => {
        return boxPlot(r, cg);
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
