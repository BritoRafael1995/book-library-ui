import { EnumSearchParameter } from "../enums/enumSearchParameter";
export interface SearchFilter {
    parameter: EnumSearchParameter;
    value: string
}