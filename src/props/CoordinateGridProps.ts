import {ColorProps} from "./ColorProps";
import {MarginProps} from "./MarginProps";
import {AllDcCharts, BaseProps, TwoArgs} from "./BaseProps";
import {Scale} from "dc";
import {BrushBehavior} from "d3-brush";
import {Axis} from "d3-axis";
import {CountableTimeInterval} from "d3-time";

export interface CoordinateGridProps<TChart> extends ColorProps, MarginProps, BaseProps<TChart> {
    brush?: BrushBehavior<any>;
    brushOn?: boolean;
    clipPadding?: number;
    elasticX?: boolean;
    elasticY?: boolean;
    mouseZoomable?: boolean;
    rangeChart?: AllDcCharts;
    renderHorizontalGridLines?: boolean;
    renderVerticalGridLines?: boolean;
    round?: CountableTimeInterval;

    useRightYAxis?: boolean;
    x: Scale<any>;
    xAxis?: Axis<any>;
    xAxisLabel?: string | TwoArgs<string, number>;
    xAxisPadding?: number | string;
    xAxisPaddingUnit?: string;
    xUnits?: (start: number, end: number) => number;
    y?: Scale<any>;
    yAxis?: Axis<any>;
    yAxisLabel?: string | TwoArgs<string, number>;
    yAxisPadding?: number | string;

    zoomOutRestrict?: boolean;
    zoomScale?: (number | Date)[];
}
