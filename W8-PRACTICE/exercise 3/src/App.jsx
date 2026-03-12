import React from "react";
import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

function computeTotal(orders) {
  return orders.reduce((sum, order) => sum + order.price * order.quantity, 0);
}

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);

  function handleQuantityChange(productName, delta) {
    setOrders(orders.map((order) => {
    if (order.product === productName) {
        return { ...order, quantity: order.quantity + delta };
      } else {
        return order;
      }
    }));
  }

  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map((order) => (
          <OrderCard
            key={order.product}
            product={order.product}
            price={order.price}
            quantity={order.quantity}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>

      <CheckoutButton total={computeTotal(orders).toFixed(2)} />
    </>
  );
}
