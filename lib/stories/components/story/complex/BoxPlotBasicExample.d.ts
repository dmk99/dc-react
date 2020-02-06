import * as React from "react";
import { Crossfilter, Dimension, Group } from "crossfilter2";
interface BoxPlotBasicExampleState {
    ndx?: Crossfilter<any>;
    runDimension?: Dimension<any, any>;
    runGroup?: Group<any, any, any>;
    experimentDimension?: Dimension<any, any>;
    speedArrayGroup?: Group<any, any, any>;
}
export default class BoxPlotBasicExample extends React.Component<void, BoxPlotBasicExampleState> {
    constructor(props: any);
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
