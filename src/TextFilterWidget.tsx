import BaseChart from "./BaseChart";
import {BaseProps} from "./props/BaseProps";
// @ts-ignore
import {textFilterWidget} from "dc";

interface TextFilterWidgetProps extends BaseProps {
    filterFunctionFactory?: (query: string) => (data: string) => void;
    normalize?: (s: string) => string;
    placeHolder?: string;
}

export default class TextFilterWidget extends BaseChart<TextFilterWidgetProps> {
    componentDidMount(): void {
        this.chart = textFilterWidget(this.chartRef);

        super.componentDidMount();

        this.chart.render();
    }
}
