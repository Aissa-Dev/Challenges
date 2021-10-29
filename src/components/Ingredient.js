import React from "react";

function Ingredient({ id, name, amount }) {
  return (
    <div>
      <span>{id} :</span>
      <span> {name}</span>
      <span>{amount}</span>
    </div>
  );
}

export default Ingredient;
