import { BaseProps } from "./props/BaseProps";
import { Primitive } from "d3-array";
import * as React from "react";
import dc from "dc";
import { BaseChartComponent, ParentType } from "./props/BaseChartComponent";
export declare type DatumValueAccessor = (datum: any) => Primitive;
export declare type SortingFunction = (a: Primitive | undefined, b: Primitive | undefined) => number;
interface DataTableProps extends BaseProps<dc.DataTableWidget> {
    beginSlice?: number;
    columns?: (DatumValueAccessor[] | (string | {
        label: string;
        format: DatumValueAccessor;
    })[]);
    endSlice?: number;
    order?: SortingFunction;
    section: DatumValueAccessor;
    showGroups?: boolean;
    showSections?: boolean;
    size?: number;
    sortBy?: DatumValueAccessor;
}
export default class DataTable extends React.PureComponent<DataTableProps> implements BaseChartComponent<dc.DataTableWidget> {
    render(): JSX.Element;
    setChart(parent: ParentType, chartGroup?: string): dc.DataTableWidget;
}
export {};
