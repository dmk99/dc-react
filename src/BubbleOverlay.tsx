import BaseChart from "./BaseChart";
import {bubbleOverlayChart} from "dc";
import * as React from "react";
import {BubbleProps} from "./props/BubbleProps";
import {BaseProps} from "./props/BaseProps";

interface BubbleOverlayProps extends BaseProps, BubbleProps {
    // TODO
}

export default class BubbleChart extends React.PureComponent<BubbleOverlayProps> {
    private setChart = (r, cg) => {
        return bubbleOverlayChart(r, cg);
    };

    render() {
        return (
            <BaseChart
                {...this.props}
                setChartRef={this.setChart}
            />
        )
    }
}
