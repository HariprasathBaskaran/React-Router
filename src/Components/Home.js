import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const Navigate = useNavigate();
  return (
    <div>
      <p>HomePage</p>
      <button onClick={() => Navigate("order-summary")}>Place Order</button>
      <button onClick={() => Navigate("*")}>New Order</button>
    </div>
  );
};

export default Home;
