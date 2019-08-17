import { Group } from "crossfilter2";
import { DatumValueAccessor } from "../DataTable";
import { Stack } from "d3-shape";
export interface StackGroup {
    group: Group<any, any, any>;
    name?: string;
    accessor?: DatumValueAccessor;
}
export interface StackProps {
    evadeDomainFilter?: boolean;
    hidableStacks?: boolean;
    hideStack?: string;
    showStack?: string;
    title?: string;
    stacks?: StackGroup[];
    stackLayout?: Stack<any, any, any>;
}
