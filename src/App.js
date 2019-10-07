import React, { useEffect, useState } from "react";
import "./App.css";

import Recipe from "./Recipe";

function App() {
  const APP_ID = "47709f1d";
  const APP_KEY = "6886715f1c12b5028580b938b408626c	";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(url, {
      method: "GET"
    });
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe key={recipe.recipe.label} data={recipe} />
      ))}
    </div>
  );
}

export default App;
