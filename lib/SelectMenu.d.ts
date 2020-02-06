import { BaseProps } from "./props/BaseProps";
import dc from "dc";
import { SortingFunction } from "./DataTable";
import * as React from "react";
import { BaseChartComponent, ParentType } from "./props/BaseChartComponent";
interface SelectMenuProps extends BaseProps<dc.SelectMenu> {
    filterDisplayed?: () => boolean;
    multiple?: boolean;
    numberItems?: number;
    order?: SortingFunction;
    promptText?: string;
    promptValue?: any;
}
export default class SelectMenu extends React.PureComponent<SelectMenuProps> implements BaseChartComponent<dc.SelectMenu> {
    render(): JSX.Element;
    setChart(parent: ParentType, chartGroup?: string): dc.SelectMenu;
}
export {};
