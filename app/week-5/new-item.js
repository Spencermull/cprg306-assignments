"use client";
import { useState } from "react";
import Item from "../week-3/item";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

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


  const handleSubmit = (event) => {
    event.preventDefault();
    const item = {name, quantity, category};
    console.log("Created item: ", item);
    alert(`Name: ${item.name}, Quantity: ${item.quantity}, Category: ${item.category}`);
    setName("");
    setCategory("produce");
   
  };

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
          Remove
        </button>
        <h2>Range is from 1-20</h2>

        <form onSubmit={handleSubmit}>
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
