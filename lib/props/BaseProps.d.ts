import { Crossfilter, Dimension, Group, GroupAll } from "crossfilter2";
import { BarChart, BoxPlot, BubbleChart, BubbleOverlayChart, CBoxMenu, CompositeChart, DataCountWidget, DataGridWidget, DataTableWidget, Filter, GeoChoroplethChart, HeatMap, Legend, LineChart, NumberDisplayWidget, PieChart, RowChart, ScatterPlot, SelectMenu, SeriesChart, SunburstChart, TextFilterWidget } from "dc";
import { ParentType } from "./BaseChartComponent";
export declare type AllDcCharts = DataCountWidget | DataGridWidget | DataTableWidget | NumberDisplayWidget | SelectMenu | PieChart | HeatMap | GeoChoroplethChart | RowChart | BubbleOverlayChart | BubbleChart | BoxPlot | CompositeChart | ScatterPlot | SeriesChart | BarChart | LineChart | TextFilterWidget | CBoxMenu | SunburstChart;
export declare type DatumToStringAccessor = (d: any) => string;
export interface ChartEventProps<TChart> {
    onRenderlet?: (chart: TChart, filter: any) => void;
    onPretransition?: (chart: TChart, filter: any) => void;
    onPreRender?: (chart: TChart) => void;
    onPostRender?: (chart: TChart) => void;
    onPreRedraw?: (chart: TChart) => void;
    onFiltered?: (chart: TChart, filter: any) => void;
    onZoomed?: (chart: TChart, filter: any) => void;
}
export interface DcReactBaseProps<TChart> {
    onChartMounted?: (chart: TChart) => void;
    setChartRef?: (ref: ParentType, chartGroup?: string) => TChart;
}
export interface TwoArgs<TArg1, TArg2> {
    first?: TArg1;
    second?: TArg2;
}
export declare function isTwoArgs(v: any): v is TwoArgs<any, any>;
export interface BaseProps<TChart> extends ChartEventProps<TChart>, DcReactBaseProps<TChart> {
    crossfilter?: Crossfilter<any>;
    groupAll?: GroupAll<any, any>;
    addFilterHandler?: (filters: Filter[], filter: Filter) => Filter;
    chartGroup?: string;
    controlsUseVisibility?: boolean;
    commitHandler?: (isRender: boolean, callback: (err: Error, result: any) => void) => void;
    data?: (group: Group<any, any, any>) => Group<any, any, any>;
    dimension: Dimension<any, any>;
    filter?: any;
    filterHandler?: (dimension: Dimension<any, any>, filter: any) => any;
    filterPrinterFunction?: (filters: any[]) => string;
    group?: Group<any, any, any> | TwoArgs<Group<any, any, any>, string>;
    hasFilterHandler?: (filters: any[], filter: any) => boolean;
    height?: number;
    keyAccessor?: (d: Group<any, any, any>) => string | number;
    label?: DatumToStringAccessor | TwoArgs<DatumToStringAccessor, boolean>;
    legend?: Legend;
    minHeight?: number;
    minWidth?: number;
    onClick?: (datum: any) => void;
    ordering?: (datum: any) => string | number;
    removeFilterHandler?: (filters: any[], filter: any) => any[];
    renderLabel?: boolean;
    renderlet?: (chart: TChart) => void;
    renderTitle?: boolean;
    replaceFilter?: any;
    resetFilterHandler?: (filters: any[]) => any[];
    select?: string;
    selectAll?: string;
    title?: DatumToStringAccessor;
    transitionDelay?: number;
    transitionDuration?: number;
    useViewBoxResizing?: boolean;
    valueAccessor?: (d: any) => string | number;
    width?: number;
    parent?: ParentType;
}
