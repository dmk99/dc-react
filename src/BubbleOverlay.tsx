import BaseChart from "./BaseChart";
import dc, {bubbleOverlayChart} from "dc";
import * as React from "react";
import {BubbleProps} from "./props/BubbleProps";
import {BaseProps} from "./props/BaseProps";
import {BaseChartComponent, ParentType} from "./props/BaseChartComponent";

interface BubbleOverlayProps extends BaseProps<dc.BubbleOverlayChart>, BubbleProps {
    // TODO
}

export default class BubbleChart extends React.PureComponent<BubbleOverlayProps> implements BaseChartComponent<dc.BubbleOverlayChart> {
    render() {
        return (
            <BaseChart
                {...this.props}
                setChartRef={this.setChart}
            />
        )
    }

    setChart(parent: ParentType, chartGroup?: string): dc.BubbleOverlayChart {
        // @ts-ignore
        return bubbleOverlayChart(parent, chartGroup);
    }
}
