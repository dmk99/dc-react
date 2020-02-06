import { BaseProps } from "./props/BaseProps";
import dc from "dc";
import * as React from "react";
import { BaseChartComponent, ParentType } from "./props/BaseChartComponent";
interface TextFilterWidgetProps extends BaseProps<dc.TextFilterWidget> {
    filterFunctionFactory?: (query: string) => (data: string) => void;
    normalize?: (s: string) => string;
    placeHolder?: string;
}
export default class TextFilterWidget extends React.PureComponent<TextFilterWidgetProps> implements BaseChartComponent<dc.TextFilterWidget> {
    setChart(parent: ParentType, chartGroup?: string): dc.TextFilterWidget;
    render(): JSX.Element;
}
export {};
