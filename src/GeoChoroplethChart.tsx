import BaseChart from "./BaseChart";
import dc, {geoChoroplethChart} from "dc";
import * as React from "react";
import {BaseProps} from "./props/BaseProps";
import {ColorProps} from "./props/ColorProps";
import {BaseChartComponent, ParentType} from "./props/BaseChartComponent";

interface GeoChoroplethChartProps extends BaseProps<dc.GeoChoroplethChart>, ColorProps {
    // TODO
}

export default class GeoChoroplethChart extends React.PureComponent<GeoChoroplethChartProps> implements BaseChartComponent<dc.GeoChoroplethChart> {
    setChart(parent: ParentType, chartGroup?: string): dc.GeoChoroplethChart {
        // @ts-ignore
        return geoChoroplethChart(parent, chartGroup);
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
