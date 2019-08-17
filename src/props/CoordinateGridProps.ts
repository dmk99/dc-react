import {ColorProps} from "./ColorProps";
import {MarginProps} from "./MarginProps";
import {AllDcCharts, BaseProps} from "./BaseProps";
import {Scale} from "dc";
import {BrushBehavior} from "d3-brush";
import {Axis} from "d3-axis";

export interface CoordinateGridProps extends ColorProps, MarginProps, BaseProps {
    brush?: BrushBehavior<any>;
    brushOn?: boolean;
    clipPadding?: number;
    elasticX?: boolean;
    elasticY?: boolean;
    mouseZoomable?: boolean;
    rangeChart?: AllDcCharts;
    renderHorizontalGridLines?: boolean;
    renderVerticalGridLines?: boolean;
    // TODO: round
    // round?:

    useRightYAxis?: boolean;
    x: Scale<any>;
    xAxis?: Axis<any>;
    xAxisLabel?: string;
    xAxisPadding?: number | string;
    xAxisPaddingUnit?: string;
    xUnits?: (start: number, end: number) => number;
    y?: Scale<any>;
    yAxis?: Axis<any>;
    yAxisLabel?: string;
    yAxisPadding?: number | string;

    zoomOutRestrict?: boolean;
    zoomScale?: (number | Date)[];
}
