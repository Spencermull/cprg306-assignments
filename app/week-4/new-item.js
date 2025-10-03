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
    <section className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="mb-4 text-xl">Current Quantity: {quantity}</h1>
      <div className="flex gap-4 bg-gradient-to-br from-sky-400 to-blue-700 p-4 rounded">
        <button
          type="button"
          onClick={Increment}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
        <button
          type="button"
          onClick={Decrement}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Subtract
        </button>
        <h2>Range is from 1-20</h2>
      </div>
    </section>
  );
}
