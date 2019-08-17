import BaseChart from "./BaseChart";
import { BubbleProps } from "./props/BubbleProps";
import { BaseProps } from "./props/BaseProps";
interface BubbleOverlayProps extends BaseProps, BubbleProps {
}
export default class BubbleChart extends BaseChart<BubbleOverlayProps> {
    componentDidMount(): void;
}
export {};
