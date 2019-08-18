import { BaseProps } from "./props/BaseProps";
import { SortingFunction } from "./DataTable";
import * as React from "react";
interface CboxMenuProps extends BaseProps {
    filterDisplayed?: () => boolean;
    multiple?: boolean;
    order?: SortingFunction;
    promptText?: string;
    promptValue?: any;
}
export default class CboxMenu extends React.PureComponent<CboxMenuProps> {
    private setChart;
    render(): JSX.Element;
}
export {};
