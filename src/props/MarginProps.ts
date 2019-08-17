export interface MarginProps {
    margins?: {
        top: number,
        right: number,
        bottom: number,
        left: number
    }
}

export function isMarginProps(props: any): props is MarginProps {
    return ("margins" in props);
}
