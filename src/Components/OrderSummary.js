import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const Navigate = useNavigate();
  return (
    <div>
      <p>Order confirmed!</p>
      <button onClick={() => Navigate(-1)}>Go back</button>
    </div>
  );
};

export default OrderSummary;
