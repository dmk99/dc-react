import BaseChart from "./BaseChart";
import { BaseProps, DatumToStringAccessor } from "./props/BaseProps";
interface NumberDisplayProps extends BaseProps {
    formatNumber?: DatumToStringAccessor;
    html?: {
        one: string;
        zero: string;
        some: string;
    };
}
export default class NumberDisplay extends BaseChart<NumberDisplayProps> {
    componentDidMount(): void;
}
export {};
