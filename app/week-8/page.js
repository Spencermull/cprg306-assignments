"use client";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  function handleAddItem(newItem) {
  setItems([newItem, ...items]);
}
  return (
    <main className="text-center">
      <h1 className="font-bold">Shopping List:</h1>
      <ItemList items={items} />
      <NewItem onAddItem={handleAddItem} />
    </main>
  );
}
