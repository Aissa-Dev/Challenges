import React from "react";
import Ingredient from "./Ingredient";

function IngredientsList({ ingredients }) {
  return (
    <>
      {ingredients.map((ingredient, id) => (
        <Ingredient key={id} id={id} {...ingredient} />
      ))}
    </>
  );
}

export default IngredientsList;
