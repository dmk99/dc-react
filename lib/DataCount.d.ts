import { BaseProps, DatumToStringAccessor } from "./props/BaseProps";
import * as React from "react";
interface DataCountProps extends Pick<BaseProps, Exclude<keyof BaseProps, "group" | "dimension">> {
    formatNumber?: DatumToStringAccessor;
    html?: {
        all: string;
        some: string;
    };
}
export default class DataCount extends React.PureComponent<DataCountProps> {
    private setChart;
    render(): JSX.Element;
}
export {};
