import {Group} from "crossfilter2";
import {DatumValueAccessor} from "../DataTable";
import {Stack} from "d3-shape";

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
    // TODO: add stackLayout

    // TODO: Handle 2 args
    title?: string;

    /**
     * Provides a hook into the `stack` function call.
     * Each item matches the definition of the parameters passed into `stack`.
     */
    stacks?: StackGroup[];
    stackLayout?: Stack<any, any, any>;
}
