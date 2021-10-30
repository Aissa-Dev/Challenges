import React, { useContext } from "react";
import Recipe from "./Recipe";
import { recipeContext } from "../App";
import styled from "styled-components";
function RecipeList({ recipes }) {
  const { handleDeleteRecipe, handleRecipeAdd } = useContext(recipeContext);
  return (
    <>
      <div className=" p-4 m-auto w-3/4">
        <button
          className="bg-blue-600 text-white w-full py-4 rounded-xl mb-4 hover:scale-y-105 transform"
          onClick={handleRecipeAdd}
        >
          Add recipe
        </button>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
    </>
  );
}

export default RecipeList;
