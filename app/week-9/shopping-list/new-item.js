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
    const item = { name, quantity, category, id: Math.random().toString(36).substring(1,10) };
    console.log("Created item: ", item);
    onAddItem(item);
    setName("");
    setCategory("produce");
  };


  return (
    <section className="flex items-start justify-center"> 
      <div className="w-72 bg-gradient-to-br from-sky-400 to-blue-700 p-4 rounded-md shadow-md flex flex-col gap-3">
        <h1 className="text-left text-lg font-medium">Current Quantity: {quantity}</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Item Name"
            className="px-2 py-1 rounded text-black w-full bg-transparent"
          />

          <select
            name="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="px-2 py-1 rounded text-black w-full bg-transparent"
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
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-green-600 w-full"
          >
            Submit
          </button>
        </form>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={Increment}
            className="flex-1 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add
          </button>
          <button
            type="button"
            onClick={Decrement}
            className="flex-1 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Remove
          </button>
        </div>

        <h2 className="text-sm text-left">Range is from 1-20</h2>
      </div>
    </section>
   
  );
}
