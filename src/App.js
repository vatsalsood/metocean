import React, { useState, useReducer } from "react";
import RecipeDetails from "./components/RecipeDetails";
import RecipeLanding from "./components/RecipeLanding";

const recipeReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_RECIPES":
      return action.recipes;
    default:
      return state;
  }
};

const App = () => {
  const [recipes, dispatch] = useReducer(recipeReducer, []);
  const [showDetails, setShowDetails] = useState(0);

  return <div>{!showDetails ? <RecipeLanding /> : <RecipeDetails />}</div>;
};

export default App;
