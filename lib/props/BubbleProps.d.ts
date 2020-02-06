import { Scale } from "dc";
import { DatumValueAccessor } from "../DataTable";
export interface BubbleProps {
    maxBubbleRelativeSize?: number;
    minRadius?: number;
    minRadiusWithLabel?: number;
    r?: Scale<any>;
    radiusValueAccessor?: DatumValueAccessor;
}
export declare function isBubbleProps(props: any): props is BubbleProps;
