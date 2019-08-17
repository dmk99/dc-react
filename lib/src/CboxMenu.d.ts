import BaseChart from "./BaseChart";
import { BaseProps } from "./props/BaseProps";
import { SortingFunction } from "./DataTable";
interface CboxMenuProps extends BaseProps {
    filterDisplayed?: () => boolean;
    multiple?: boolean;
    order?: SortingFunction;
    promptText?: string;
    promptValue?: any;
}
export default class CboxMenu extends BaseChart<CboxMenuProps> {
    componentDidMount(): void;
}
export {};
