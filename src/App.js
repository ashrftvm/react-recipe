import React, { useEffect, useState } from "react";
import "./App.css";

import Recipe from "./Recipe";

function App() {
  const APP_ID = "47709f1d";
  const APP_KEY = "6886715f1c12b5028580b938b408626c	";

  const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(url, {
      method: "GET"
    });
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar" />
        <button className="search-button">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe data={recipe} />
      ))}
    </div>
  );
}

export default App;
