import React from "react";

function RecipeIngredientEdit({
  ingredient,
  handleIngredientEdit,
  handleIngredientDelete
}) {
  const handleChange = (changes) => {
    handleIngredientEdit(ingredient.id, { ...ingredient, ...changes });
  };
  return (
    <>
      <div className="inputName">
        <input
          type="text"
          value={ingredient.name}
          onInput={(e) => {
            handleChange({ name: e.target.value });
          }}
        />
      </div>{" "}
      <div className="inputAmount">
        <input
          type="text"
          value={ingredient.amount}
          onInput={(e) => {
            handleChange({ amount: e.target.value });
          }}
        />
      </div>
      <button
        className=" text-5xl  font-bold  text-red-500 transform -translate-y-2 "
        onClick={() => handleIngredientDelete(ingredient.id)}
      >
        &times;
      </button>
    </>
  );
}

export default RecipeIngredientEdit;
