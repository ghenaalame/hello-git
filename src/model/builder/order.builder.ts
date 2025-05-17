import { Order } from "../order.model";
import { Iitem } from "../IItem";
import logger from '../../util/logger';

export class OrderBuilder {
    private id!: string;
    private item!: Iitem;
    private price!: string;
    private quantity!: number;

    public static newBuilder(): OrderBuilder {
        return new OrderBuilder();
    }

    public setId(id: string): OrderBuilder {
        this.id = id;
        return this;
    }

    public setItem(item: Iitem): OrderBuilder {
        this.item = item;
        return this;
    }

    public setPrice(price: string): OrderBuilder {
        this.price = price;
        return this;
    }

    public setQuantity(quantity: number): OrderBuilder {
        this.quantity = quantity;
        return this;
    }

    public build(): Order {
        const requiredProperties = [
            this.id,
            this.item,
            this.price,
            this.quantity
        ];
        for (const property of requiredProperties) {
            if (!property) {
                logger.error("Missing required property for Order.");
                throw new Error("Missing required property for Order.");
            }
        }
        return new Order(this.id, this.item, this.price, this.quantity);
    }
}