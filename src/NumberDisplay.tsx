import BaseChart from "./BaseChart";
import {BaseProps, DatumToStringAccessor} from "./props/BaseProps";
import {numberDisplay} from "dc";
import * as React from "react";

interface NumberDisplayProps extends BaseProps {
    formatNumber?: DatumToStringAccessor;
    html?: {
        one: string,
        zero: string,
        some: string
    }
}

export default class NumberDisplay extends React.PureComponent<NumberDisplayProps> {
    private setChart = (r, cg) => {
        return numberDisplay(r, cg);
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
