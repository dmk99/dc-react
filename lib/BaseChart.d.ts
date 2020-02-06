import * as React from "react";
import { BaseProps } from "./props/BaseProps";
import dc from "dc";
export default class BaseChart<TChart extends dc.BaseMixin<any>, P extends BaseProps<TChart>> extends React.PureComponent<P> {
    readonly ChartEventKeys: string[];
    protected chart: TChart;
    protected chartRef: any;
    componentDidMount(): void;
    private onChartMounted;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<{}>, snapshot?: any): void;
    onComponentUpdate: () => void;
    private refreshProps;
    private setChartRef;
    render(): JSX.Element;
}
