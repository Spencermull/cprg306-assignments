"use client"
import { useState, useEffect } from "react"




export default function MealIdeas({ingredient}){

    const [meals,setMeals] = useState([]);

    useEffect(() => {
        if([ingredient]){
            loadMealIdeas();
        }
    });
    function loadMealIdeas(){
        fetchMealIdeas(ingredient);
    }

    return(
        <div>
            <h1>
                meals
            </h1>
            <ul>
                
            {meals.map((meal) => (
              <li>
                <meal key = {meal.idMeal}/>
                <meal key = {meal.strMeal}/>
                <meal key = {meal.strMealThumb}/>
              </li>
            ))} 
                
            </ul>
        </div>
    );
}

    async function fetchMealIdeas(ingredient){
    try{
        
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || [];
      
    }catch(error){
        console.error("Error:" , error);
    }
}