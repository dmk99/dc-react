import { BaseProps } from "./props/BaseProps";
import * as React from "react";
interface TextFilterWidgetProps extends BaseProps {
    filterFunctionFactory?: (query: string) => (data: string) => void;
    normalize?: (s: string) => string;
    placeHolder?: string;
}
export default class TextFilterWidget extends React.PureComponent<TextFilterWidgetProps> {
    private setChart;
    render(): JSX.Element;
}
export {};
