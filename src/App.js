import "./App.css";
import { useState } from "react";
import styled from "styled-components";
import RecipeList from "./components/RecipeList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [AllRecipes, setAllRecipes] = useState(recipes);
  const handleRecipeAdd = () => {
    const newRecipe = {
      id: uuidv4(),
      name: "new",
      servings: 1,
      cookTime: "1:00",
      instructions: ["instructions ..."],
      ingredients: [{ id: uuidv4(), name: "Name", amount: "1 Tbs" }]
    };
    setAllRecipes([...AllRecipes, newRecipe]);
    console.log(AllRecipes);
  };

  const handleDeleteRecipe = (id) => {
    setAllRecipes(AllRecipes.filter((recipe) => recipe.id !== id));
  };
  return (
    <div className="App">
      <RecipeList
        recipes={AllRecipes}
        handleRecipeAdd={handleRecipeAdd}
        handleDeleteRecipe={handleDeleteRecipe}
      />
    </div>
  );
}

const recipes = [
  {
    id: 1,
    name: "Biryani",
    servings: 3,
    cookTime: "13:30",
    instructions: ["put salt ", " put rice in hot water", "put chicken"],
    ingredients: [
      {
        id: 1,
        name: "Rice",
        amount: "1 Lb"
      },
      {
        id: 2,
        name: "Chicken",
        amount: "1,5 Lb"
      }
    ]
  },
  {
    id: 2,
    name: "Tacos",
    servings: 1,
    cookTime: "5:30",
    instructions: ["put salt ", " put Meat", "Eat tocos"],
    ingredients: [
      {
        id: 1,
        name: "Beef",
        amount: "1 Lb"
      },
      {
        id: 2,
        name: "Potatos",
        amount: "0.5 Lb"
      }
    ]
  }
];
export default App;
