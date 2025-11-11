"use client";

import Item from "./item";
import { useState } from "react";


export default function ItemList({ items , onItemSelect}) {
  const [sortBy, setSortBy] = useState("name");

  const sortingItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return (a.name > b.name) - (a.name < b.name);
    } else if (sortBy === "category") {
      return (a.category > b.category) - (a.category < b.category);
    }
    return 0;
  });

  return (
    <main className="mr-1 text-left">
      <div className="flex items-center gap-2 mt-2">
        <span>Select: Sort type</span>
        <button type="button" onClick={() => setSortBy("name")} className="px-4 py-2 mr-1 bg-blue-500 text-white rounded hover:bg-blue-600">
          name
        </button>
        <button type="button" onClick={() => setSortBy("category")} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          category
        </button>
      </div>

      {sortingItems.map((item) => (
        <Item
          key={item.id || item.name}
          {...item}
          onSelect={() => onItemSelect?.(item)}
        />
      ))}
    </main>
  );
}
