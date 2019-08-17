import {Scale} from "dc";

export interface BubbleProps {
    maxBubbleRelativeSize?: number;
    minRadius?: number;
    minRadiusWithLabel?: number;
    r?: Scale<any>;

    // TODO: Implement radiusValueAccessor
    // radiusValueAccessor?:
}

export function isBubbleProps(props: any): props is BubbleProps {
    return ("relativeSize" in props) || ("minRadius" in props) || ("minRadiusWithLabel" in props);
}
