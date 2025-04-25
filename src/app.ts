import logger from "./util/logger";

// ---------- Order.ts ----------
export interface Order {
    id: number;
    item: string;
    price: number;
}

// ---------- Interfaces.ts ----------
interface IValidator {
    validate(order: Order): void;
}

interface ICalculator {
    getRevenue(orders: Order[]): number;
    getAverageBuyPower(orders: Order[]): number;
}

// ---------- Validators.ts ----------
export class Validator implements IValidator {
    validate(order: Order): void {
        if (!order.item || order.item.trim() === "") {
            throw new Error("Item name is required.");
        }
        if (order.price <= 0) {
            logger.error("Price must be greater than 0.");
            throw new Error("Price must be greater than 0.");
        }
    }
}

class ItemValidator implements IValidator {
    validate(order: Order): void {
        if (order.item.length < 2) {
            throw new Error("Item name too short.");
        }
    }
}

class PriceValidator implements IValidator {
    validate(order: Order): void {
        if (order.price <= 0) {
            
            throw new Error("Invalid price.");
        }
    }
}

class MaxPriceValidator extends Validator {
    constructor(private maxPrice: number) {
        super();
    }

    validate(order: Order): void {
        super.validate(order);
        if (order.price > this.maxPrice) {
            throw new Error(`Price exceeds max allowed: ${this.maxPrice}`);
        }
    }
}

class CompositeValidator implements IValidator {
    constructor(private validators: IValidator[]) {}

    validate(order: Order): void {
        for (const validator of this.validators) {
            validator.validate(order);
        }
    }
}

// ---------- Calculators.ts ----------
export class FinanceCalculator implements ICalculator {
    getRevenue(orders: Order[]): number {
        return orders.reduce((total, order) => total + order.price, 0);
    }

    getAverageBuyPower(orders: Order[]): number {
        return orders.length === 0 ? 0 : this.getRevenue(orders) / orders.length;
    }
}

// ---------- OrderManagment.ts (Your Code, Preserved) ----------
export class OrderManagment {
    private orders: Order[] = [];

    constructor(private validator: IValidator, private calculator: ICalculator) {
        logger.debug("OrderManagment instance created.");
    }

    getOrders() {
        return this.orders;
    }
    addOrder(item: string, price: number) {
        try {
            const order: Order = { id: this.orders.length + 1, item, price };
            this.validator.validate(order);
            this.orders.push(order);
        } catch (error: any) {
            throw new Error("[OrderManagment] Error adding order: " + error.message);
        }
    }

    getOrder(id: number) {
        const order = this.orders.find(order => order.id === id);
        if (!order) {
         logger.warn(`Order with ID ${id} not found.`);   
        }
        return order;
    }

    getTotalRevenue() {
        return this.calculator.getRevenue(this.orders);
    }

    getBuyPower() {
        return this.calculator.getAverageBuyPower(this.orders);
    }
}

export class PremiumOrderManagement extends OrderManagment {
    // Optional: Add premium features here
}

// ---------- Example of Usage ----------
const validator = new CompositeValidator([
    new ItemValidator(),
    new PriceValidator(),
    new MaxPriceValidator(1000)
]);

const calculator = new FinanceCalculator();

const orderService = new OrderManagment(validator, calculator);
orderService.addOrder("Laptop", 800);
orderService.addOrder("Mouse", 50);

console.log("Total Revenue:", orderService.getTotalRevenue());
console.log("Average Buy Power:", orderService.getBuyPower());
