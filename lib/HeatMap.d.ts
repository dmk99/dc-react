import dc from "dc";
import * as React from "react";
import { BaseProps } from "./props/BaseProps";
import { ColorProps } from "./props/ColorProps";
import { MarginProps } from "./props/MarginProps";
import { SortingFunction } from "./DataTable";
import { BaseChartComponent, ParentType } from "./props/BaseChartComponent";
interface HeatMapChartProps extends BaseProps<dc.HeatMap>, ColorProps, MarginProps {
    handler?: (d: any) => void;
    colOrdering?: SortingFunction;
    cols?: (string | number)[];
    colsLabel?: (d: any) => any;
    rowOrdering?: SortingFunction;
    rows?: (string | number)[];
    rowsLabel?: (d: any) => any;
    xAxisOnClick?: (d: any) => void;
    xBorderRadius?: number;
    yAxisOnClick?: (d: any) => void;
    yBorderRadius?: number;
}
export default class HeatMap extends React.PureComponent<HeatMapChartProps> implements BaseChartComponent<dc.HeatMap> {
    setChart(parent: ParentType, chartGroup?: string): dc.HeatMap;
    render(): JSX.Element;
}
export {};
