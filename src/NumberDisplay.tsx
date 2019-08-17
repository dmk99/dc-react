import BaseChart from "./BaseChart";
import {BaseProps, DatumToStringAccessor} from "./props/BaseProps";
import {numberDisplay} from "dc";

interface NumberDisplayProps extends BaseProps {
    formatNumber?: DatumToStringAccessor;
    html?: {
        one: string,
        zero: string,
        some: string
    }
}

export default class NumberDisplay extends BaseChart<NumberDisplayProps> {
    componentDidMount(): void {
        this.chart = numberDisplay(this.chartRef);

        super.componentDidMount();

        this.chart.render();
    }
}
