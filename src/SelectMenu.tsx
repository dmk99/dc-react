import BaseChart from "./BaseChart";
import {BaseProps} from "./props/BaseProps";
import {selectMenu} from "dc";
import {SortingFunction} from "./DataTable";

interface SelectMenuProps extends BaseProps {
    filterDisplayed?: () => boolean;
    multiple?: boolean;
    numberItems?: number;
    order?: SortingFunction;
    promptText?: string;
    promptValue?: any;
}

export default class SelectMenu extends BaseChart<SelectMenuProps> {
    componentDidMount(): void {
        this.chart = selectMenu(this.chartRef);

        super.componentDidMount();

        this.chart.render();
    }
}
