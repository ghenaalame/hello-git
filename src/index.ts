import logger from "./util/logger"; 
import { FinanceCalculator,OrderManagment,Validator } from "./app";

const orders= [
    { id: 1, item: "Sponge", price: 15 },
    { id: 2, item: "Chocolate", price: 20 },
    { id: 3, item: "Fruit", price: 18 },
    { id: 4, item: "Red Velvet", price: 25 },
    { id: 5, item: "Coffee", price: 8 },
  ];
  
  // Create order manager
  const orderManager = new OrderManagment(new Validator(), new FinanceCalculator());
  
  // Add initial orders
  for (const order of orders) {
    orderManager.addOrder(order.item, order.price);
  }
  
  // Add a new order directly
  const newItem = "Marble";
  const newPrice = 22;
  orderManager.addOrder(newItem, newPrice);
  
  logger.info("Orders after adding a new order: %o" , orderManager.getOrders());
  
  // Calculate total revenue
  logger.info("Total Revenue:" +  orderManager.getTotalRevenue());
  
  // Calculate average buy power
  logger.info("Average Buy Power:" + orderManager.getBuyPower());
  
  // Fetch a specific order by ID
  const fetchId = 2;
  const fetchedOrder = orderManager.getOrder(fetchId);
  logger.info(`Order with ID ${fetchId}: %o`, fetchedOrder);
