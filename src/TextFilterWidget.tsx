import BaseChart from "./BaseChart";
import {BaseProps} from "./props/BaseProps";
// @ts-ignore
import {textFilterWidget} from "dc";
import * as React from "react";

interface TextFilterWidgetProps extends BaseProps {
    filterFunctionFactory?: (query: string) => (data: string) => void;
    normalize?: (s: string) => string;
    placeHolder?: string;
}

export default class TextFilterWidget extends React.PureComponent<TextFilterWidgetProps> {
    private setChart = (r, cg) => {
        return textFilterWidget(r, cg);
    };

    render() {
        return (
            // @ts-ignore
            <BaseChart
                {...this.props}
                setChartRef={this.setChart}
            />
        )
    }
}
