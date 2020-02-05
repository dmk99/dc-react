import * as React from "react";
import {AllDcCharts, BaseProps, ChartEventProps} from "./props/BaseProps";
import dc from "dc";

/**
 * Exposes the baseMixin properties. All charts should inherit from this.
 */
export default class BaseChart<TChart extends dc.BaseMixin<any>, P extends BaseProps<TChart>> extends React.PureComponent<P> {
    readonly ChartEventKeys = Object.keys({
        onFiltered: undefined,
        onPostRender: undefined,
        onPreRedraw: undefined,
        onPreRender: undefined,
        onPretransition: undefined,
        onRenderlet: undefined,
        onZoomed: undefined
    } as ChartEventProps<TChart>);

    protected chart: TChart;
    protected chartRef;

    componentDidMount(): void {
        if(this.chart) {
            return;
        }

        this.chart = this.props.setChartRef(this.chartRef);

        this.refreshProps(this.chart);
        this.props.onChartMounted && this.props.onChartMounted(this.chart);

        this.chart.render();
    }

    componentWillUnmount(): void {
        this.ChartEventKeys.forEach((key) => {
            const transformedKey = key.replace('on', '');

            // @ts-ignore
            this.chart.on(`${transformedKey.charAt(0).toLowerCase()}${transformedKey.substring(1)}`, null);
        });

        this.chart.resetSvg();
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

    /**
     * Called to refresh the properties on the underlying chart.
     * @param chart
     */
    private refreshProps = (chart: TChart) => {
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

    /**
     * Set the component reference.
     * @param ref
     */
    private setChartRef = (ref) => {
        this.chartRef = ref;
    };

    render() {
        return (
            <div ref={this.setChartRef}/>
        );
    }
}
