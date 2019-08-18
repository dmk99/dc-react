import { CoordinateGridProps } from "./props/CoordinateGridProps";
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
    tickFormat?: (n: number | {
        valueOf(): number;
    }) => string;
    yRangePadding?: number | (() => number);
}
export default class BoxPlot extends React.PureComponent<BoxPlotProps> {
    private setChart;
    render(): JSX.Element;
}
export {};
