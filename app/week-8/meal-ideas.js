"use client";
import { useState, useEffect } from "react";


async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
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
    <div className="w-72 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold text-blue-800 mb-1">Meal Ideas</h2>
        {ingredient && (
            <p className="text-xs text-blue-600 mb-3">Results for <span className="font-semibold italic">&quot;{ingredient}&quot;</span></p>
        )}
        {!ingredient && (
            <p className="text-xs text-blue-500 italic mb-3">Select an item to see meal ideas</p>
        )}
        <ul className="space-y-2 max-h-96 overflow-y-auto">
            {meals.map((meal) => (
                <li
                    key={meal.idMeal}
                    className="flex flex-col items-center bg-transparent rounded-md p-2 hover:bg-blue-100 transition-colors cursor-pointer"
                >
                    <img
                        src={meal.strMealThumb} 
                        alt={meal.strMeal}
                        width={288}
                        height={80}
                        className="w-full h-20 rounded-md object-cover mb-1"
                    />
                    <span className="text-xs font-medium text-blue-900 text-center">{meal.strMeal}</span>
                </li>
            ))}
        </ul>
        {ingredient && meals.length === 0 && (
            <p className="text-xs text-blue-600 italic mt-2">No meal ideas found</p>
        )}
    </div>
);
}
