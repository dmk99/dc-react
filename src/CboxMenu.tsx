import BaseChart from "./BaseChart";
import {BaseProps} from "./props/BaseProps";
// @ts-ignore
import {cboxMenu} from "dc";
import {SortingFunction} from "./DataTable";
import * as React from "react";

interface CboxMenuProps extends BaseProps {
    filterDisplayed?: () => boolean;
    multiple?: boolean;
    order?: SortingFunction;
    promptText?: string;
    promptValue?: any;
}

export default class CboxMenu extends React.PureComponent<CboxMenuProps> {
    private setChart = (r, cg) => {
        return cboxMenu(r, cg);
    };

    render() {
        return (
            <BaseChart
                {...this.props}
                setChartRef={this.setChart}
            />
        )
    }
}
