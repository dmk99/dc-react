import { Scale } from "dc";
export interface BubbleProps {
    maxBubbleRelativeSize?: number;
    minRadius?: number;
    minRadiusWithLabel?: number;
    r?: Scale<any>;
}
export declare function isBubbleProps(props: any): props is BubbleProps;
