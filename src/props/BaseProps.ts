import {Crossfilter, Dimension, Group, GroupAll} from "crossfilter2";
import {
    BarChart,
    BoxPlot,
    BubbleChart,
    BubbleOverlayChart,
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
    SeriesChart
} from "dc";

export type AllDcCharts =
    DataCountWidget | DataGridWidget | DataTableWidget | NumberDisplayWidget | SelectMenu |
    PieChart | HeatMap | GeoChoroplethChart | RowChart | BubbleOverlayChart |
    BubbleChart | BoxPlot | CompositeChart | ScatterPlot |
    SeriesChart | BarChart | LineChart;

export type DatumToStringAccessor = (d: any) => string;

export interface ChartEventProps {
    onRenderlet?: (chart: AllDcCharts, filter: any) => void;
    onPretransition?: (chart: AllDcCharts, filter: any) => void;
    onPreRender?: (chart: AllDcCharts) => void;
    onPostRender?: (chart: AllDcCharts) => void;
    onPreRedraw?: (chart: AllDcCharts) => void;
    onFiltered?: (chart: AllDcCharts, filter: any) => void;
    onZoomed?: (chart: AllDcCharts, filter: any) => void;
}

export interface DcReactBaseProps {
    getChart?: (chart: AllDcCharts) => void;
}

export interface BaseProps extends ChartEventProps, DcReactBaseProps {
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
    renderlet?: (chart: AllDcCharts) => void;
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
