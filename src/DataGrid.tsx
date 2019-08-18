import BaseChart from "./BaseChart";
import {BaseProps} from "./props/BaseProps";
import {dataGrid} from "dc";
import {DatumValueAccessor, SortingFunction} from "./DataTable";
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
    private setChart = (r, cg) => {
        return dataGrid(r, cg);
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
