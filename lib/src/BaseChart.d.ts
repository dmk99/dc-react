import * as React from "react";
import { AllDcCharts } from "./props/BaseProps";
export default class BaseChart<P> extends React.PureComponent<P> {
    readonly ChartEventKeys: string[];
    readonly DcReactBaseKeys: string[];
    protected chart: AllDcCharts;
    protected chartRef: any;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<{}>, snapshot?: any): void;
    onComponentUpdate: () => void;
    private refreshProps;
    private setChartRef;
    render(): JSX.Element;
}
