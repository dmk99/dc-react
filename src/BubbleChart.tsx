import BaseChart from "./BaseChart";
import dc, {bubbleChart} from "dc";
import {CoordinateGridProps} from "./props/CoordinateGridProps";
import * as React from "react";
import {BubbleProps} from "./props/BubbleProps";
import {BaseChartComponent, ParentType} from "./props/BaseChartComponent";
import {BaseProps} from "./props/BaseProps";

interface BubbleChartProps extends CoordinateGridProps<dc.BubbleChart>, BubbleProps, BaseProps<dc.BubbleChart> {
    elasticRadius?: boolean;
    sortBubbleSize?: boolean;
}

export default class BubbleChart extends React.PureComponent<BubbleChartProps> implements BaseChartComponent<dc.BubbleChart> {
    render() {
        return (
            <BaseChart<dc.BubbleChart, BubbleChartProps>
                {...this.props}
                setChartRef={this.setChart}
            />
        )
    }

    setChart(parent: ParentType, chartGroup?: string): dc.BubbleChart {
        // @ts-ignore
        return bubbleChart(parent, chartGroup);
    }
}
