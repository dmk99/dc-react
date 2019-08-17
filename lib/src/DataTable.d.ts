import { BaseProps } from "./props/BaseProps";
import { Primitive } from "d3-array";
import BaseChart from "./BaseChart";
export declare type DatumValueAccessor = (datum: any) => Primitive;
export declare type SortingFunction = (a: Primitive | undefined, b: Primitive | undefined) => number;
interface DataTableProps extends BaseProps {
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
export default class DataTable extends BaseChart<DataTableProps> {
    componentDidMount(): void;
}
export {};
