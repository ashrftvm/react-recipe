import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const APP_ID = "47709f1d";
  const APP_KEY = "6886715f1c12b5028580b938b408626c	";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("effect has been run");
  }, [counter]);

  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar" />
        <button className="search-button">Search</button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
}

export default App;
