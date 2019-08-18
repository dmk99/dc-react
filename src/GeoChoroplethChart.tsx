import BaseChart from "./BaseChart";
import {geoChoroplethChart} from "dc";
import * as React from "react";
import {BaseProps} from "./props/BaseProps";
import {ColorProps} from "./props/ColorProps";

interface GeoChoroplethChartProps extends BaseProps, ColorProps {
    // TODO
}

export default class GeoChoroplethChart extends React.PureComponent<GeoChoroplethChartProps> {
    private setChart = (r, cg) => {
        return geoChoroplethChart(r, cg);
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
