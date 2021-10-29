import React from "react";
import IngredientsList from "./IngredientsList";

function Recipe(props) {
  const {
    id,
    name,
    servings,
    cookTime,
    instructions,
    ingredients,
    handleDeleteRecipe
  } = props;
  return (
    <>
      <div className=" rounded-lg overflow-hidden mb-4  shadow-inner">
        <div className="bg-blue-300">
          <h3 className="text-center py-3">{name}</h3>
        </div>
        <div className="p-4">
          <p>
            Cook Time : <span> {cookTime}</span>
          </p>
          <p>
            Servings : <span> {servings}</span>
          </p>
          <h4>Instruction :</h4>
          <ul className="ml-6">
            {instructions.map((instruction, id) => (
              <li key={id}>{instruction}</li>
            ))}
          </ul>
          <h4>Ingredients</h4>
          <div className="ml-6">
            <IngredientsList ingredients={ingredients} />
          </div>
        </div>
        <div className="flex text-white">
          <button className="flex-grow p-3 bg-green-400">Edit</button>
          <button
            className="flex-grow p-3 bg-red-500 hover:scale-105 transform "
            onClick={() => handleDeleteRecipe(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Recipe;
