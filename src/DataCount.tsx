import BaseChart from "./BaseChart";
import {BaseProps, DatumToStringAccessor} from "./props/BaseProps";
import {dataCount} from "dc";
import * as React from "react";

// @ts-ignore
interface DataCountProps extends Pick<BaseProps, Exclude<keyof BaseProps, "group" | "dimension">> {
    formatNumber?: DatumToStringAccessor;
    html?: {
        all: string,
        some: string
    }
}

export default class DataCount extends React.PureComponent<DataCountProps> {
    private setChart = (r, cg) => {
        return dataCount(r, cg);
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
