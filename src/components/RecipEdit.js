import React, { useContext } from "react";
import styled from "styled-components";
import Ingredient from "./Ingredient";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import { recipeContext } from "../App";
import { v4 as uuidv4 } from "uuid";

function RecipEdit({ recipe }) {
  const { handleRecipeChange, handleRecipeSelect } = useContext(recipeContext);
  const handleChange = (changes) => {
    console.log("changes : ", changes);
    handleRecipeChange(recipe.id, { ...recipe, ...changes });
  };
  const handleIngredientEdit = (id, ingredient) => {
    const newIngredients = [...recipe.ingredients];
    const index = newIngredients.findIndex((i) => i.id === id);
    newIngredients[index] = ingredient;
    handleChange({ ingredients: newIngredients });
  };

  const handleAddIngredient = () => {
    const newIngredient = {
      id: uuidv4(),
      name: "",
      amount: ""
    };
    handleChange({ ingredients: [...recipe.ingredients, newIngredient] });
  };

  const handleIngredientDelete = (id) => {
    handleChange({
      ingredients: recipe.ingredients.filter(
        (ingredient) => ingredient.id != id
      )
    });
  };
  return (
    <StyledRecipeEdit>
      <div className="flex justify-end mb-4">
        <button
          className=" text-4xl  font-bold "
          onClick={() => handleRecipeSelect(undefined)}
        >
          &times;
        </button>
      </div>
      <StyledDetails>
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={recipe.name}
          onInput={(e) => handleChange({ name: e.target.value })}
        />
        <label htmlFor="">Cook Time</label>
        <input
          type="text"
          name="cookTime"
          id="cookeTime"
          value={recipe.cookTime}
          onInput={(e) => handleChange({ cookTime: e.target.value })}
        />
        <label htmlFor="">Servings</label>
        <input
          type="number"
          min="1"
          name="servings"
          id="servings"
          value={recipe.servings}
          onInput={(e) => handleChange({ servings: e.target.value })}
        />
        <label htmlFor="instructions">Instructions</label>
        <textarea
          name="instructions"
          id="instructions"
          value={recipe.instructions}
          onInput={(e) => handleChange({ instructions: e.target.value })}
        />
      </StyledDetails>
      <br />
      <label>Ingredients</label>
      <StyledIngredients>
        <div className="name">Name</div>
        <div className="amount">Amount</div>
        <div></div>
        {recipe.ingredients.map((ingredient, id) => (
          <RecipeIngredientEdit
            key={id}
            ingredient={ingredient}
            handleIngredientEdit={handleIngredientEdit}
            handleIngredientDelete={handleIngredientDelete}
          />
        ))}
      </StyledIngredients>
      <div className="text-center">
        <button
          className="mt-6 text-center bg-blue-500 py-2 px-7 text-white rounded-md"
          onClick={handleAddIngredient}
        >
          Add ingredients
        </button>
      </div>
    </StyledRecipeEdit>
  );
}

export default RecipEdit;

const StyledRecipeEdit = styled.div`
  padding: 2rem;
  padding-top: 1rem;
  /* position: fixed;
  right: 0;
  top: 0; */
  min-width: 50%;
  max-height: 100%;
  overflow: auto;
  label {
    font-weight: bold;
    font-size: 1.2rem;
  }
  input,
  textarea {
    border: 1px solid gray;
    border-radius: 0.2rem;
    font-size: inherit;
    padding: 5px 10px;
    width: 100%;
    resize: none;
  }
  textarea {
    height: 10rem;
  }
`;

const StyledDetails = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  row-gap: 1rem;
  column-gap: 3rem;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const StyledIngredients = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 1rem;
  margin-top: 2rem;
  margin-left: 3rem;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    .name,
    .amount {
      display: none;
    }
  }
`;
