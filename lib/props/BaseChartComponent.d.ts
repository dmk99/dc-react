import { Selection } from "d3-selection";
export declare type ParentType = string | Node | Selection<any, any, any, any>;
export interface BaseChartComponent<TChart> {
    setChart(parent: ParentType, chartGroup?: string): TChart;
}
