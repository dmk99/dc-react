import { BaseProps, DatumToStringAccessor } from "./props/BaseProps";
import dc from "dc";
import * as React from "react";
import { BaseChartComponent, ParentType } from "./props/BaseChartComponent";
interface NumberDisplayProps extends BaseProps<dc.NumberDisplayWidget | dc.NumberDisplayWidgetHTML> {
    formatNumber?: DatumToStringAccessor;
    html?: {
        one: string;
        zero: string;
        some: string;
    };
}
export default class NumberDisplay extends React.PureComponent<NumberDisplayProps> implements BaseChartComponent<dc.NumberDisplayWidget | dc.NumberDisplayWidgetHTML> {
    setChart(parent: ParentType, chartGroup?: string): dc.NumberDisplayWidget | dc.NumberDisplayWidgetHTML;
    render(): JSX.Element;
}
export {};
