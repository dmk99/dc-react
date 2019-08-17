import BaseChart from "./BaseChart";
import {Scale, scatterPlot} from "dc";
import {CoordinateGridProps} from "./props/CoordinateGridProps";
import * as React from "react";
import {SymbolType} from "d3-shape";
import {DatumValueAccessor} from "./DataTable";

interface ScatterPlotProps extends CoordinateGridProps {
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

export default class ScatterPlot extends BaseChart<ScatterPlotProps> {
    componentDidMount(): void {
        this.chart = scatterPlot(this.chartRef);

        super.componentDidMount();

        this.chart.render();
    }
}
