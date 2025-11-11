"use client";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";
import { useUserAuth } from "@/app/contexts/AuthContext";

export default function Page() {
  const { user } = useUserAuth();
  if (!user) {
    return null;
  }
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  function handleAddItem(newItem) {
    setItems([newItem, ...items]);
  }

  function handleItemSelect(item) {
    const fixedName = item.name
      .split(",")[0]
      .replace(/([\uE000-\uF8FF]|[\uD800-\uDBFF][\uDC00-\uDFFF])/g, "")
      .trim();
    setSelectedItemName(fixedName);
  }

  return (
    <main className="text-left">
      <h1 className="font-bold">Shopping List:</h1>
      <div className="flex gap-4 items-start">
        <ItemList items={items} onItemSelect={handleItemSelect} />
        <NewItem onAddItem={handleAddItem} />
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
