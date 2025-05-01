import { item } from "./item.model";

export interface order {
    getId(): string;
    getItem():item;
    getPrice(): number;
    getQuantity(): number;
}