import {BaseProps} from "./props/BaseProps";
import {Primitive} from "d3-array";
import * as React from "react";
import {dataTable} from "dc";
import BaseChart from "./BaseChart";

export type DatumValueAccessor = (datum: any) => Primitive;
export type SortingFunction = (a: Primitive | undefined, b: Primitive | undefined) => number;

interface DataTableProps extends BaseProps {
    beginSlice?: number;
    columns?: (
        DatumValueAccessor[] |
        (string | {label: string, format: DatumValueAccessor})[]
    );
    endSlice?: number;
    order?: SortingFunction;
    section: DatumValueAccessor;
    showGroups?: boolean;
    showSections?: boolean;
    size?: number;
    sortBy?: DatumValueAccessor;
}

export default class DataTable extends React.PureComponent<DataTableProps> {
    private setChart = (r, cg) => {
        return dataTable(r, cg);
    };

    render() {
        return (
            // @ts-ignore
            <BaseChart
                {...this.props}
                setChartRef={this.setChart}
            />
        )
    }
}
