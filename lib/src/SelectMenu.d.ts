import BaseChart from "./BaseChart";
import { BaseProps } from "./props/BaseProps";
import { SortingFunction } from "./DataTable";
interface SelectMenuProps extends BaseProps {
    filterDisplayed?: () => boolean;
    multiple?: boolean;
    numberItems?: number;
    order?: SortingFunction;
    promptText?: string;
    promptValue?: any;
}
export default class SelectMenu extends BaseChart<SelectMenuProps> {
    componentDidMount(): void;
}
export {};
