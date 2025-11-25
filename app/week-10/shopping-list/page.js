"use client";
import NewItem from "./new-item";
import { useUserAuth } from "@/app/contexts/AuthContext";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { useState, useEffect } from "react";
import {
  getItems,
  addItems as addItem,
} from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    loadItems();
  }, [user]);

  if (!user) {
    return null;
  }

  function handleAddItem(newItem) {
    addItem(user.uid, newItem).then((id) => {
      const itemWithId = { id, ...newItem };
      setItems([itemWithId, ...items]);
    });
  }

  function handleItemSelect(item) {
    const fixedName = item.name
      .split(",")[0]
      .replace(/([\uE000-\uF8FF]|[\uD800-\uDBFF][\uDC00-\uDFFF])/g, "")
      .trim();
    setSelectedItemName(fixedName);
  }

  async function loadItems() {
    const fetchedItems = await getItems(user.uid);
    setItems(fetchedItems);
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
