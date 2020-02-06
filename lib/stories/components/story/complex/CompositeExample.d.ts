import * as React from "react";
import { Crossfilter, Dimension, Group } from "crossfilter2";
interface CompositeExampleState {
    exp1?: any[];
    exp2?: any[];
    ndx?: Crossfilter<any>;
    dim?: Dimension<any, any>;
    grp1?: Group<any, any, any>;
    grp2?: Group<any, any, any>;
}
export default class CompositeExample extends React.Component<void, CompositeExampleState> {
    constructor(props: any);
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
