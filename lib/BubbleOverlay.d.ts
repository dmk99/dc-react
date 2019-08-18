import * as React from "react";
import { BubbleProps } from "./props/BubbleProps";
import { BaseProps } from "./props/BaseProps";
interface BubbleOverlayProps extends BaseProps, BubbleProps {
}
export default class BubbleChart extends React.PureComponent<BubbleOverlayProps> {
    private setChart;
    render(): JSX.Element;
}
export {};
