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
var BoxPlot = (function (_super) {
    __extends(BoxPlot, _super);
    function BoxPlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoxPlot.prototype.componentDidMount = function () {
        this.chart = dc_1.boxPlot(this.chartRef);
        _super.prototype.componentDidMount.call(this);
        this.chart.render();
    };
    return BoxPlot;
}(BaseChart_1.default));
exports.default = BoxPlot;
//# sourceMappingURL=BoxPlot.js.map