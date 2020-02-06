import BaseChart from "./BaseChart";
import {BaseProps} from "./props/BaseProps";
// @ts-ignore
import dc, {textFilterWidget} from "dc";
import * as React from "react";
import {BaseChartComponent, ParentType} from "./props/BaseChartComponent";

interface TextFilterWidgetProps extends BaseProps<dc.TextFilterWidget> {
    filterFunctionFactory?: (query: string) => (data: string) => void;
    normalize?: (s: string) => string;
    placeHolder?: string;
}

export default class TextFilterWidget extends React.PureComponent<TextFilterWidgetProps> implements BaseChartComponent<dc.TextFilterWidget> {
    setChart(parent: ParentType, chartGroup?: string): dc.TextFilterWidget {
        // @ts-ignore
        return textFilterWidget(parent, chartGroup);
    }

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
