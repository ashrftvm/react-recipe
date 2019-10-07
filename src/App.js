import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const APP_ID = "47709f1d";
  const APP_KEY = "6886715f1c12b5028580b938b408626c	";

  const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar" />
        <button className="search-button">Search</button>
      </form>
    </div>
  );
}

export default App;
