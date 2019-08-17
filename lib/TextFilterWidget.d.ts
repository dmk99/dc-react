import BaseChart from "./BaseChart";
import { BaseProps } from "./props/BaseProps";
interface TextFilterWidgetProps extends BaseProps {
    filterFunctionFactory?: (query: string) => (data: string) => void;
    normalize?: (s: string) => string;
    placeHolder?: string;
}
export default class TextFilterWidget extends BaseChart<TextFilterWidgetProps> {
    componentDidMount(): void;
}
export {};
