import * as React from "react";
import {AllDcCharts, BaseProps, ChartEventProps, DcReactBaseProps} from "./props/BaseProps";

/**
 * Exposes the baseMixin properties. All charts should inherit from this.
 */
export default class BaseChart<P extends BaseProps> extends React.PureComponent<P> {
    readonly ChartEventKeys = Object.keys({
        onFiltered: undefined,
        onPostRender: undefined,
        onPreRedraw: undefined,
        onPreRender: undefined,
        onPretransition: undefined,
        onRenderlet: undefined,
        onZoomed: undefined
    } as ChartEventProps);

    readonly DcReactBaseKeys = Object.keys({
        getChart: undefined
    } as DcReactBaseProps);

    protected chart: AllDcCharts;
    protected chartRef;

    componentDidMount(): void {
        if (this.chart == null) {
            throw new Error("Chart implementation must be defined.")
        }

        const chart = this.chart;

        // @ts-ignore
        this.props.getChart && this.props.getChart(this.chart);

        this.refreshProps(chart);
    }

    componentWillUnmount(): void {
        this.ChartEventKeys.forEach((key) => {
            const transformedKey = key.replace('on', '');

            // @ts-ignore
            this.chart.on(`${transformedKey.charAt(0).toLowerCase()}${transformedKey.substring(1)}`, null);
        });
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<{}>, snapshot?: any): void {
        if (prevProps !== this.props) {
            this.onComponentUpdate();
        }
    }

    /**
     * Called (and can be overridden) by implementing charts.
     */
    onComponentUpdate = () => {
        this.refreshProps(this.chart);
        this.chart.redraw();
    };

    private refreshProps = (chart: AllDcCharts) => {
        Object.keys(this.props).forEach((propKey) => {
            if (this.props[propKey] == null) {
                return;
            }

            if (this.ChartEventKeys.find(i => i === propKey)) {
                const transformedKey = propKey.replace('on', '');

                // @ts-ignore
                this.chart.on(`${transformedKey.charAt(0).toLowerCase()}${transformedKey.substring(1)}`, this.props[propKey]);
            } else if (chart[propKey]) {
                chart[propKey](this.props[propKey]);
            }
        });
    };

    private setChartRef = (ref) => {
        this.chartRef = ref;
    };

    render() {
        return (
            <div ref={this.setChartRef}/>
        );
    }
}
