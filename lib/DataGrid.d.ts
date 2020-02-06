import { BaseProps } from "./props/BaseProps";
import dc from "dc";
import { DatumValueAccessor, SortingFunction } from "./DataTable";
import * as React from "react";
import { BaseChartComponent, ParentType } from "./props/BaseChartComponent";
interface DataGridProps extends BaseProps<dc.DataGridWidget> {
    beginSlice?: number;
    endSlice?: number;
    html?: (datum: any) => string;
    htmlSection?: (datum: any) => string;
    order?: SortingFunction;
    section: (datum: any) => string;
    size?: number;
    sortBy?: DatumValueAccessor;
}
export default class DataGrid extends React.PureComponent<DataGridProps> implements BaseChartComponent<dc.DataGridWidget> {
    setChart(parent: ParentType, chartGroup?: string): dc.DataGridWidget;
    render(): JSX.Element;
}
export {};
