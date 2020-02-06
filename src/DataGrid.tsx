import BaseChart from "./BaseChart";
import {BaseProps} from "./props/BaseProps";
import dc, {dataGrid} from "dc";
import {DatumValueAccessor, SortingFunction} from "./DataTable";
import * as React from "react";
import {BaseChartComponent, ParentType} from "./props/BaseChartComponent";

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
    setChart(parent: ParentType, chartGroup?: string): dc.DataGridWidget {
        // @ts-ignore
        return dataGrid(parent, chartGroup);
    }

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
