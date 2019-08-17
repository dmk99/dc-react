import BaseChart from "./BaseChart";
import {BaseProps} from "./props/BaseProps";
// @ts-ignore
import {cboxMenu} from "dc";
import {SortingFunction} from "./DataTable";

interface CboxMenuProps extends BaseProps {
    filterDisplayed?: () => boolean;
    multiple?: boolean;
    order?: SortingFunction;
    promptText?: string;
    promptValue?: any;
}

export default class CboxMenu extends BaseChart<CboxMenuProps> {
    componentDidMount(): void {
        this.chart = cboxMenu(this.chartRef);

        super.componentDidMount();

        this.chart.render();
    }
}
