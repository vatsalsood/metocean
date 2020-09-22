import React, { useState, useEffect, useReducer } from "react";
import RecipeDetails from "./components/RecipeDetails";
import RecipeLanding from "./components/RecipeLanding";
import { getRows } from "./processapi";
import recipeReducer from "./reducers/recipes";
import RecipesContext from "./context/recipes-context";

const App = () => {
  const [recipes, dispatch] = useReducer(recipeReducer, []);
  const [showDetails, setShowDetails] = useState(0);
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);

  useEffect(() => {
    const recipes = getRows();
    dispatch({ type: "POPULATE_RECIPES", recipes });
  }, []);

  return (
    <RecipesContext.Provider value={{ recipes, dispatch }}>
      {recipes.length > 1 ? <RecipeLanding /> : <RecipeDetails />}
    </RecipesContext.Provider>
  );
};

export default App;
