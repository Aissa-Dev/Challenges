import React, { useContext } from "react";
import IngredientsList from "./IngredientsList";
import { recipeContext } from "../App";
import styled from "styled-components";
function Recipe(props) {
  const { id, name, servings, cookTime, instructions, ingredients } = props;
  const { handleDeleteRecipe, handleRecipeSelect } = useContext(recipeContext);
  return (
    <StyledRecipe>
      <div className=" rounded-lg overflow-hidden mb-4  shadow-inner">
        <div className="bg-blue-300">
          <h3 className="text-center py-3 text-xl font-medium text-blue-900">
            {name}
          </h3>
        </div>
        <div className="p-4">
          <span className="font-bold text-l">Cook Time : </span>
          <span className="font-semibold text-l text-blue-800">
            {" "}
            {cookTime}
          </span>
          <br />
          <span className="font-bold text-l">Servings :</span>{" "}
          <span className="font-semibold text-l text-blue-800">
            {" "}
            {servings}
          </span>
          <h4 className="font-bold text-l">Instruction :</h4>
          <p className="ml-6 whitespace-pre-wrap font-semibold text-l text-blue-800">
            {instructions}
          </p>
          <h4 className="font-bold text-l">Ingredients</h4>
          <div className="ml-6 font-semibold text-l text-blue-800">
            <IngredientsList ingredients={ingredients} />
          </div>
        </div>
        <div className="flex text-white">
          <button
            onClick={() => handleRecipeSelect(id)}
            className="flex-grow p-3 bg-green-400 hover:scale-y-110 transform text-l font-medium"
          >
            Edit
          </button>
          <button
            className="flex-grow p-3 bg-red-500 hover:scale-y-110 transform  text-l font-medium"
            onClick={() => handleDeleteRecipe(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </StyledRecipe>
  );
}

export default Recipe;

const StyledRecipe = styled.div`
  span {
    display: inline-block;
    padding: 0.5rem 0;
    margin-right: 0.5rem;
  }
  h4 {
    margin-top: 1rem;
  }
`;
