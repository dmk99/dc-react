/// <reference types="d3-format" />
import * as React from "react";
import { AllDcCharts } from "../../../../src";
export default class Stock extends React.Component<any, any> {
    readonly chartById: {
        [key: string]: AllDcCharts;
    };
    dateFormatSpecifier: string;
    dateFormat: (date: Date) => string;
    dateFormatParser: (dateString: string) => Date;
    numberFormat: (n: number | {
        valueOf(): number;
    }) => string;
    decimalFormat: (n: number | {
        valueOf(): number;
    }) => string;
    constructor(props: any);
    componentDidMount(): void;
    private onChartMounted;
    private onChartReset;
    private getChartResetComponent;
    render(): JSX.Element;
}
