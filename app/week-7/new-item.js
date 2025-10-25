"use client";
import { useState } from "react";


export default function NewItem({onAddItem}) {
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
    const item = { name, quantity, category, id:Math.random.toString().substring(1,10000000) };
    console.log("Created item: ", item);
    onAddItem(item);
    setName("");
    setCategory("produce");
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="mb-4 text-xl">Current Quantity: {quantity}</h1>
      <div className="flex gap-4 bg-gradient-to-br from-sky-400 to-blue-700 p-4 rounded">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Item Name"
            className="px-2 py-1 rounded"
          />

          <select
            name="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="px-2 py-1 rounded ml-2 text-black"
          >
            <option value="produce">Produce</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-green-600 ml-2"
          >
            Submit
          </button>
        </form>
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
      </div>
    </section>
  );
}
