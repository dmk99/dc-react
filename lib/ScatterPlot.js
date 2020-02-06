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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseChart_1 = require("./BaseChart");
var dc_1 = require("dc");
var React = require("react");
var ScatterPlot = (function (_super) {
    __extends(ScatterPlot, _super);
    function ScatterPlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScatterPlot.prototype.setChart = function (parent, chartGroup) {
        return dc_1.scatterPlot(parent, chartGroup);
    };
    ScatterPlot.prototype.render = function () {
        return (React.createElement(BaseChart_1.default, __assign({}, this.props, { setChartRef: this.setChart })));
    };
    return ScatterPlot;
}(React.PureComponent));
exports.default = ScatterPlot;
//# sourceMappingURL=ScatterPlot.js.map