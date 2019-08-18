import BaseChart from "./BaseChart";
import {BaseProps, DatumToStringAccessor} from "./props/BaseProps";
import {dataCount} from "dc";

// @ts-ignore
interface DataCountProps extends Pick<BaseProps, Exclude<keyof BaseProps, "group" | "dimension">> {
    formatNumber?: DatumToStringAccessor;
    html?: {
        all: string,
        some: string
    }
}

// @ts-ignore
export default class DataCount extends BaseChart<DataCountProps> {
    componentDidMount(): void {
        this.chart = dataCount(this.chartRef);

        super.componentDidMount();

        this.chart.render();
    }
}
