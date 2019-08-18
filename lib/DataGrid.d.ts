import { BaseProps } from "./props/BaseProps";
import { DatumValueAccessor, SortingFunction } from "./DataTable";
import * as React from "react";
interface DataGridProps extends BaseProps {
    beginSlice?: number;
    endSlice?: number;
    html?: (datum: any) => string;
    htmlSection?: (datum: any) => string;
    order?: SortingFunction;
    section: (datum: any) => string;
    size?: number;
    sortBy?: DatumValueAccessor;
}
export default class DataGrid extends React.PureComponent<DataGridProps> {
    private setChart;
    render(): JSX.Element;
}
export {};
