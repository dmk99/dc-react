import React from 'react';

import "!style-loader!css-loader!dc/dist/style/dc.min.css";
import { storiesOf } from "@storybook/react";
import "./components/charts/index.stories";

import Introduction from "./components/Introduction";
import PieChartExample from "./components/story/basic/PieChartExample";
import LineChartExample from "./components/story/basic/LineChartExample";
import FilteringExample from "./components/story/complex/FilteringExample";
import CompositeExample from "./components/story/complex/CompositeExample";
import MultiscatterExample from "./components/story/complex/MultiscatterExample";
import BoxPlotBasicExample from "./components/story/complex/BoxPlotBasicExample";
import AreaExample from "./components/story/complex/AreaExample";
import HtmlLegend from "./components/story/complex/HtmlLegend";
import Stock from "./components/story/complex/Stock";

storiesOf("Welcome", module).add("to dc-react", () => <Introduction/>);

const basicCharts = storiesOf("Basic Charts", module);
basicCharts.add("Line Chart", () => (<LineChartExample/>));
basicCharts.add("Pie Chart", () => (<PieChartExample/>));

const complexCharts = storiesOf("Complex Charts", module);
complexCharts.add("Stock", () => (<Stock/>));
complexCharts.add("Filtering", () => (<FilteringExample/>));
complexCharts.add("Composite", () => (<CompositeExample/>));
complexCharts.add("Multi-scatter", () => (<MultiscatterExample/>));
complexCharts.add("Box Plot Basic", () => (<BoxPlotBasicExample/>));
complexCharts.add("Area", () => (<AreaExample/>));
complexCharts.add("HTML Legend", () => (<HtmlLegend/>));


