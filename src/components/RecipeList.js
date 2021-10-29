import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes, handleRecipeAdd, handleDeleteRecipe }) {
  return (
    <>
      <div className="w-2/6 p-4">
        {recipes.map((recipe) => {
          return (
            <Recipe
              key={recipe.id}
              {...recipe}
              handleDeleteRecipe={handleDeleteRecipe}
            />
          );
        })}
      </div>
      <button onClick={handleRecipeAdd}>Add recipe</button>
    </>
  );
}

export default RecipeList;
