import * as React from "react";
import { Crossfilter, Dimension, Group } from "crossfilter2";
interface MultiscatterExampleState {
    ndx?: Crossfilter<any>;
    scatterDimension?: Dimension<any, any>;
    scatterGroup?: Group<any, any, any>;
    lineDimension?: Dimension<any, any>;
    lineGroup?: Group<any, any, any>;
}
export default class MultiscatterExample extends React.Component<void, MultiscatterExampleState> {
    constructor(props: any);
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
