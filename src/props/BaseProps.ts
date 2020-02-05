import {Crossfilter, Dimension, Group, GroupAll} from "crossfilter2";
import {
    BarChart,
    BoxPlot,
    BubbleChart,
    BubbleOverlayChart, CBoxMenu,
    CompositeChart,
    DataCountWidget,
    DataGridWidget,
    DataTableWidget,
    Filter,
    GeoChoroplethChart,
    HeatMap,
    Legend,
    LineChart,
    NumberDisplayWidget,
    PieChart,
    RowChart,
    ScatterPlot,
    SelectMenu,
    SeriesChart, SunburstChart, TextFilterWidget
} from "dc";
import {ParentType} from "./BaseChartComponent";

export type AllDcCharts =
    DataCountWidget | DataGridWidget | DataTableWidget | NumberDisplayWidget | SelectMenu |
    PieChart | HeatMap | GeoChoroplethChart | RowChart | BubbleOverlayChart |
    BubbleChart | BoxPlot | CompositeChart | ScatterPlot |
    SeriesChart | BarChart | LineChart | TextFilterWidget | CBoxMenu | SunburstChart;

export type DatumToStringAccessor = (d: any) => string;

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
    /**
     * Called when a chart has been mounted.
     * @param chart the base DC chart.
     */
    onChartMounted?: (chart: TChart) => void;

    /**
     * Set the chart reference and chart group if specified.
     * And return the created chart.
     *
     * @param ref the react reference.
     * @param chartGroup the name of the group.
     */
    setChartRef?: (ref: ParentType, chartGroup?: string) => TChart;
}

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

    // TODO: Type the filters
    filterHandler?: (dimension: Dimension<any, any>, filter: any) => any;

    filterPrinterFunction?: (filters: any[]) => string;

    group: Group<any, any, any>;
    hasFilterHandler?: (filters: any[], filter: any) => boolean;

    height?: number;
    keyAccessor?: (d: Group<any, any, any>) => string | number;

    // TODO: This has two arguments
    label?: DatumToStringAccessor;

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
    //turnOnControls?: boolean;
    //turnOffControls?: boolean;
    useViewBoxResizing?: boolean;
    valueAccessor?: (d: any) => string | number;

    width?: number;
}
