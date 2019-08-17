import BaseChart from "./BaseChart";
import { BaseProps } from "./props/BaseProps";
import { ColorProps } from "./props/ColorProps";
import { MarginProps } from "./props/MarginProps";
import { SortingFunction } from "./DataTable";
interface HeatMapChartProps extends BaseProps, ColorProps, MarginProps {
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
export default class HeatMap extends BaseChart<HeatMapChartProps> {
    componentDidMount(): void;
}
export {};
