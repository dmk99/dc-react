import BaseChart from "./BaseChart";
import {BaseProps, DatumToStringAccessor} from "./props/BaseProps";
import dc, {dataCount} from "dc";
import * as React from "react";
import {BaseChartComponent, ParentType} from "./props/BaseChartComponent";

// @ts-ignore
interface DataCountProps extends Partial<BaseProps<dc.DataCountWidget>> {
    formatNumber?: DatumToStringAccessor;
    html?: {
        all: string,
        some: string
    }
}

export default class DataCount extends React.PureComponent<DataCountProps> implements BaseChartComponent<dc.DataCountWidget> {
    render() {
        return (
            // @ts-ignore
            <BaseChart
                {...this.props}
                // @ts-ignore
                setChartRef={this.setChart}
            />
        )
    }

    setChart(parent: ParentType, chartGroup?: string): dc.DataCountWidget {
        // @ts-ignore
        return dataCount(parent, chartGroup);
    }
}
