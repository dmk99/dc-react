import BaseChart from "./BaseChart";
import dc, {Scale, scatterPlot} from "dc";
import {CoordinateGridProps} from "./props/CoordinateGridProps";
import * as React from "react";
import {SymbolType} from "d3-shape";
import {DatumValueAccessor} from "./DataTable";
import {BaseChartComponent, ParentType} from "./props/BaseChartComponent";

interface ScatterPlotProps extends CoordinateGridProps<dc.ScatterPlot> {
    emptyColor?: Scale<any>;
    emptyOpacity?: number;
    nonemptyOpacity?: number;

    customSymbol?: string | d3.svg.Symbol<any>;
    emptySize?: number;
    excludedColor?: number;
    excludedOpacity?: number;
    excludedSize?: number;
    existenceAccessor?: DatumValueAccessor;
    highlightedSize?: number;
    symbol?: SymbolType;
    symbolSize?: number;
}

export default class ScatterPlot extends React.PureComponent<ScatterPlotProps> implements BaseChartComponent<dc.ScatterPlot> {
    setChart(parent: ParentType, chartGroup?: string): dc.ScatterPlot {
        // @ts-ignore
        return scatterPlot(parent, chartGroup);
    }
    render() {
        return (
            <BaseChart
                {...this.props}
                setChartRef={this.setChart}
            />
        )
    }
}
