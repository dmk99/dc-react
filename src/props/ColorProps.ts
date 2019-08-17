import {Scale} from "dc";
import {Color} from "d3-color";

export interface ColorProps {
    colorAccessor?: (datum: any, index: number) => number;
    // TODO: Color calculator
    // colorCalculator?: (datum: any) => ColorMixin;
    colorDomain?: string[];
    colors?: string[] | Scale<string | Color> | string;
    getColor?: (datum: any, index: number) => string;
    ordinalColors?: string[];
}
