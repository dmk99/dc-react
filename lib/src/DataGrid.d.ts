import BaseChart from "./BaseChart";
import { BaseProps } from "./props/BaseProps";
import { DatumValueAccessor, SortingFunction } from "./DataTable";
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
export default class DataGrid extends BaseChart<DataGridProps> {
    componentDidMount(): void;
}
export {};
