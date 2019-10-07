import React from "react";

const Recipe = ({ data }) => {
  return (
    <div>
      <h1>{data.recipe.label}</h1>
      <p>{data.recipe.calories}</p>
      <img src={data.recipe.image} alt={data.recipe.label} />
    </div>
  );
};

export default Recipe;
