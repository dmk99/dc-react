import BaseChart from "./BaseChart";
import { BaseProps, DatumToStringAccessor } from "./props/BaseProps";
interface DataCountProps extends Pick<BaseProps, Exclude<keyof BaseProps, "group" | "dimension">> {
    formatNumber?: DatumToStringAccessor;
    html?: {
        all: string;
        some: string;
    };
}
export default class DataCount extends BaseChart<DataCountProps> {
    componentDidMount(): void;
}
export {};
