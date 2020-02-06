import { BaseProps, DatumToStringAccessor } from "./props/BaseProps";
import dc from "dc";
import * as React from "react";
import { BaseChartComponent, ParentType } from "./props/BaseChartComponent";
interface DataCountProps extends Partial<BaseProps<dc.DataCountWidget>> {
    formatNumber?: DatumToStringAccessor;
    html?: {
        all: string;
        some: string;
    };
}
export default class DataCount extends React.PureComponent<DataCountProps> implements BaseChartComponent<dc.DataCountWidget> {
    render(): JSX.Element;
    setChart(parent: ParentType, chartGroup?: string): dc.DataCountWidget;
}
export {};
