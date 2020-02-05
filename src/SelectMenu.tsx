import BaseChart from "./BaseChart";
import {BaseProps} from "./props/BaseProps";
import dc, {selectMenu} from "dc";
import {SortingFunction} from "./DataTable";
import * as React from "react";
import {BaseChartComponent, ParentType} from "./props/BaseChartComponent";

interface SelectMenuProps extends BaseProps<dc.SelectMenu> {
    filterDisplayed?: () => boolean;
    multiple?: boolean;
    numberItems?: number;
    order?: SortingFunction;
    promptText?: string;
    promptValue?: any;
}

export default class SelectMenu extends React.PureComponent<SelectMenuProps> implements BaseChartComponent<dc.SelectMenu> {
    render() {
        return (
            // @ts-ignore
            <BaseChart
                {...this.props}
                setChartRef={this.setChart}
            />
        )
    }

    setChart(parent: ParentType, chartGroup?: string): dc.SelectMenu {
        // @ts-ignore
        return selectMenu(parent, chartGroup);
    }
}
