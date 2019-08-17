import * as React from "react";
import { Crossfilter, Dimension, Group } from "crossfilter2";
interface AreaExampleState {
    ndx?: Crossfilter<any>;
    runDimension?: Dimension<any, any>;
    speedSumGroup?: Group<any, any, any>;
}
export default class AreaExample extends React.Component<void, AreaExampleState> {
    constructor(props: any);
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
