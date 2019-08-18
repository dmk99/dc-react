import BaseChart from "./BaseChart";
import * as React from "react";
import {BaseProps} from "./props/BaseProps";
import {ColorProps} from "./props/ColorProps";
import {CapProps} from "./props/CapProps";
// @ts-ignore
import {sunburstChart} from "dc";

interface SunburstChartProps extends BaseProps, ColorProps, CapProps {
    cx?: number;
    cy?: number;
    emptyTitle?: string;
    externalLabels?: number;
    innerRadius?: number;
    minAngleForLabel?: number;
    radius?: number;
}

export default class SunburstChart extends React.PureComponent<SunburstChartProps> {
    private setChart = (r, cg) => {
        return sunburstChart(r, cg);
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
