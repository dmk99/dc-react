import BaseChart from "./BaseChart";
import {BaseProps} from "./props/BaseProps";
import {selectMenu} from "dc";
import {SortingFunction} from "./DataTable";
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
    private setChart = (r, cg) => {
        return selectMenu(r, cg);
    };

    render() {
        return (
            // @ts-ignore
            <BaseChart
                {...this.props}
                setChartRef={this.setChart}
            />
        )
    }
}
