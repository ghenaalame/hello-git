import { ItemCatagory, item } from "./item.model";

export class Toy implements item {
    private name: string;
    private material: string;
    private ageGroup: string;
    private color: string;

    constructor(name: string, material: string, ageGroup: string, color: string) {
        this.name = name;
        this.material = material;
        this.ageGroup = ageGroup;
        this.color = color;
    }

    getCategory(): ItemCatagory {
        return ItemCatagory.Toy;
    }

    getName(): string {
        return this.name;
    }

    getMaterial(): string {
        return this.material;
    }

    getAgeGroup(): string {
        return this.ageGroup;
    }

    getColor(): string {
        return this.color;
    }
}