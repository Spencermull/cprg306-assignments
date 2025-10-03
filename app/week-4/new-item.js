"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  function Increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }
  function Decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <main>
      <h1>Current Quantity: {quantity}</h1>
      <ul>
        <li>
          <button onClick={Increment}> Add </button>
        </li>
        <li>
          <button onClick={Decrement}> Subtract </button>
        </li>
      </ul>
    </main>
  );
}
