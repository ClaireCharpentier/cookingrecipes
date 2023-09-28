import React from "react";

const Card = ({ recipe }) => {
  return (
    <div className="card-container">
      <h3>{recipe.strMeal}</h3>
      <p>Origin: {recipe.strArea}</p>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        width="200px"
        height="200px"
      />
      <div className="card-description">{recipe.strInstructions}</div>
    </div>
  );
};

export default Card;
