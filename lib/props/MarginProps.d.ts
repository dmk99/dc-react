export interface MarginProps {
    margins?: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
}
export declare function isMarginProps(props: any): props is MarginProps;
