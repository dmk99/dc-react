"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var BaseChart = (function (_super) {
    __extends(BaseChart, _super);
    function BaseChart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ChartEventKeys = Object.keys({
            onFiltered: undefined,
            onPostRender: undefined,
            onPreRedraw: undefined,
            onPreRender: undefined,
            onPretransition: undefined,
            onRenderlet: undefined,
            onZoomed: undefined
        });
        _this.onComponentUpdate = function () {
            _this.refreshProps(_this.chart);
            _this.chart.redraw();
        };
        _this.refreshProps = function (chart) {
            Object.keys(_this.props).forEach(function (propKey) {
                if (_this.props[propKey] == null) {
                    return;
                }
                if (_this.ChartEventKeys.find(function (i) { return i === propKey; })) {
                    var transformedKey = propKey.replace('on', '');
                    _this.chart.on("" + transformedKey.charAt(0).toLowerCase() + transformedKey.substring(1), _this.props[propKey]);
                }
                else if (chart[propKey]) {
                    chart[propKey](_this.props[propKey]);
                }
            });
        };
        _this.setChartRef = function (ref) {
            _this.chartRef = ref;
        };
        return _this;
    }
    BaseChart.prototype.componentDidMount = function () {
        var _a;
        if (this.chart) {
            return;
        }
        this.chart = this.props.setChartRef((_a = this.props.parent, (_a !== null && _a !== void 0 ? _a : this.chartRef)), this.props.chartGroup);
        this.refreshProps(this.chart);
        this.props.onChartMounted && this.props.onChartMounted(this.chart);
        this.chart.render();
    };
    BaseChart.prototype.componentWillUnmount = function () {
        var _this = this;
        this.ChartEventKeys.forEach(function (key) {
            var transformedKey = key.replace('on', '');
            _this.chart.on("" + transformedKey.charAt(0).toLowerCase() + transformedKey.substring(1), null);
        });
        this.chart.resetSvg();
    };
    BaseChart.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            this.onComponentUpdate();
        }
    };
    BaseChart.prototype.render = function () {
        return (React.createElement("div", { ref: this.setChartRef }));
    };
    return BaseChart;
}(React.PureComponent));
exports.default = BaseChart;
//# sourceMappingURL=BaseChart.js.map