import { BaseProps } from "./props/BaseProps";
import dc from "dc";
import { SortingFunction } from "./DataTable";
import * as React from "react";
import { BaseChartComponent, ParentType } from "./props/BaseChartComponent";
interface CboxMenuProps extends BaseProps<dc.CBoxMenu> {
    filterDisplayed?: () => boolean;
    multiple?: boolean;
    order?: SortingFunction;
    promptText?: string;
    promptValue?: any;
}
export default class CboxMenu extends React.PureComponent<CboxMenuProps> implements BaseChartComponent<dc.CBoxMenu> {
    render(): JSX.Element;
    setChart(parent: ParentType, chartGroup?: string): dc.CBoxMenu;
}
export {};
