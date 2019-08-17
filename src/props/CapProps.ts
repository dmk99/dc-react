export interface CapProps {
    cap?: number;
    othersGrouper?: (topItems: any[], restItems: any[]) => any[];
    othersLabel?: string;
    takeFront?: boolean;
}
