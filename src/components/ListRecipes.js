import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const ListRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [food, setFood] = useState("");

  const getData = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + food)
      .then((res) => {
        if (res.data.meals !== null) {
          setRecipes(res.data.meals);
        } else {
          setRecipes([]);
        }
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (e) => {
    setFood(e.target.value);
    getData();
  };
  console.log(recipes);
  return (
    <>
      <div className="input-container">
        <input
          type="search"
          onChange={(e) => handleSearch(e)}
          placeholder="Rechercher par ingrédient"
          className="mb-3"
        />
      </div>
      <div className="list-recipes">
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <Card recipe={recipe} key={index}></Card>
          ))
        ) : (
          <div>No result</div>
        )}
      </div>
    </>
  );
};

export default ListRecipes;
