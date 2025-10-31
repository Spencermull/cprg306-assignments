"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
        ingredient
      )}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (!ingredient) return;
      async function loadMealIdeas() {
        const mealData = await fetchMealIdeas(ingredient);
        setMeals(mealData);
      
    }
    loadMealIdeas();
  }, [ingredient]);

return (
    <div className="absolute top-4 right-6 w-72 bg-blue-50 border border-blue-200 text-blue-900 rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold text-blue-700 mb-2">Meals</h2>
        <ul className="space-y-1">
            {meals.map((meal) => (
                <li
                    key={meal.idMeal}
                    className="text-sm hover:bg-blue-100 rounded px-2 py-1"
                >
                    {meal.strMeal}
                </li>
            ))}
        </ul>
    </div>
);
}
