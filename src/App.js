import "./App.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RecipeList from "./components/RecipeList";
import { v4 as uuidv4 } from "uuid";
import RecipEdit from "./components/RecipEdit";

const LOCAL_STORAGE_KEY = "localStorageRecipe.React";
export const recipeContext = React.createContext();
function App() {
  const [AllRecipes, setAllRecipes] = useState(initialRecipes);
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const selectedRecipe = AllRecipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  const handleRecipeSelect = (id) => {
    setSelectedRecipeId(id);
  };
  useEffect(() => {
    const recipesFromStorage = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (recipesFromStorage != null) {
      setAllRecipes(recipesFromStorage);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(AllRecipes));
  }, [AllRecipes]);

  const handleRecipeAdd = () => {
    const newRecipe = {
      id: uuidv4(),
      name: "",
      servings: 1,
      cookTime: "",
      instructions: [""],
      ingredients: [{ id: uuidv4(), name: "", amount: "" }]
    };
    setSelectedRecipeId(newRecipe.id);
    setAllRecipes([newRecipe, ...AllRecipes]);
  };

  const handleDeleteRecipe = (id) => {
    if (selectedRecipeId != null && selectedRecipeId == id) {
      setSelectedRecipeId(undefined);
    }
    setAllRecipes(AllRecipes.filter((recipe) => recipe.id !== id));
  };
  const handleRecipeChange = (id, recipe) => {
    const newRecipes = [...AllRecipes];
    const index = newRecipes.findIndex((r) => r.id === id);
    newRecipes[index] = recipe;
    setAllRecipes(newRecipes);
  };
  const valueRecipeContext = {
    handleDeleteRecipe,
    handleRecipeAdd,
    handleRecipeSelect,
    handleRecipeChange
  };

  return (
    <div className="App">
      <recipeContext.Provider value={valueRecipeContext}>
        <StyledContainer>
          <div className="w-1/2 child">
            {AllRecipes && (
              <RecipeList
                recipes={AllRecipes}
                handleRecipeAdd={handleRecipeAdd}
                handleDeleteRecipe={handleDeleteRecipe}
              />
            )}
          </div>
          <div className="w-1/2 child">
            {selectedRecipe && <RecipEdit recipe={selectedRecipe} />}
          </div>
        </StyledContainer>
      </recipeContext.Provider>
    </div>
  );
}

const initialRecipes = [
  {
    id: 1,
    name: "Biryani",
    servings: 3,
    cookTime: "13:30",
    instructions: `1 - put salt \n2 - put rice in hot water\n3 - put chicken`,
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
    instructions: "1 - put salt\n2 - put Meat\n3 - Eat tocos",
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

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 500px) {
    .child {
      min-width: 100vw;
    }
    flex-direction: column-reverse;
  }
`;
