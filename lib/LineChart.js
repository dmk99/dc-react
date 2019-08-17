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
var BaseChart_1 = require("./BaseChart");
var dc_1 = require("dc");
var LineChart = (function (_super) {
    __extends(LineChart, _super);
    function LineChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineChart.prototype.componentDidMount = function () {
        var _this = this;
        this.chart = dc_1.lineChart(this.chartRef);
        _super.prototype.componentDidMount.call(this);
        if (this.props.stacks) {
            this.props.stacks.forEach(function (stack) {
                _this.chart.stack(stack.group, stack.name, stack.accessor);
            });
        }
        this.chart.render();
    };
    return LineChart;
}(BaseChart_1.default));
exports.default = LineChart;
//# sourceMappingURL=LineChart.js.map