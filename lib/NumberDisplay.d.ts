import { BaseProps, DatumToStringAccessor } from "./props/BaseProps";
import * as React from "react";
interface NumberDisplayProps extends BaseProps {
    formatNumber?: DatumToStringAccessor;
    html?: {
        one: string;
        zero: string;
        some: string;
    };
}
export default class NumberDisplay extends React.PureComponent<NumberDisplayProps> {
    private setChart;
    render(): JSX.Element;
}
export {};
