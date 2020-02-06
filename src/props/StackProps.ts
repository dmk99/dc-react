import {Group} from "crossfilter2";
import {DatumValueAccessor} from "../DataTable";
import {Stack} from "d3-shape";
import {TwoArgs} from "./BaseProps";

export interface StackGroup {
    group: Group<any, any, any>;
    name?: string;
    // TODO: Verify
    accessor?: DatumValueAccessor;
}

export interface StackProps {
    evadeDomainFilter?: boolean;
    hidableStacks?: boolean;
    hideStack?: string;
    showStack?: string;
    title?: string | TwoArgs<string, DatumValueAccessor>;

    /**
     * Provides a hook into the `stack` function call.
     * Each item matches the definition of the parameters passed into `stack`.
     */
    stacks?: StackGroup[];
    stackLayout?: Stack<any, any, any>;
}
