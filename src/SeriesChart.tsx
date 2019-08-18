import BaseChart from "./BaseChart";
import {seriesChart} from "dc";
import {CompositeChartProps} from "./CompositeChart";
import * as React from "react";

interface SeriesProps extends CompositeChartProps {
}

// @ts-ignore
export default class SeriesChart extends React.PureComponent<SeriesProps> {
    private setChart = (r, cg) => {
        return seriesChart(r, cg);
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
