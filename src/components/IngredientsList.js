import React from "react";
import Ingredient from "./Ingredient";

function IngredientsList({ ingredients }) {
  return (
    <>
      {ingredients.map((ingredient) => (
        <Ingredient key={ingredient.id} {...ingredient} />
      ))}
    </>
  );
}

export default IngredientsList;
