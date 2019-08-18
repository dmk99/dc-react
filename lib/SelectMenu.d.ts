import { BaseProps } from "./props/BaseProps";
import { SortingFunction } from "./DataTable";
import * as React from "react";
interface SelectMenuProps extends BaseProps {
    filterDisplayed?: () => boolean;
    multiple?: boolean;
    numberItems?: number;
    order?: SortingFunction;
    promptText?: string;
    promptValue?: any;
}
export default class SelectMenu extends React.PureComponent<SelectMenuProps> {
    private setChart;
    render(): JSX.Element;
}
export {};
