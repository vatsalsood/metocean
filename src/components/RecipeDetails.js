import React, { useState, useContext, useEffect } from "react";
import RecipesContext from "../context/recipes-context";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const RecipeDetails = () => {
  const { recipes, dispatch } = useContext(RecipesContext);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setIngredients(recipes.ingredients);
  });

  return (
    <div>
      <Grid container justify="center" spacing={3}>
        <List>
          <ListItem alignItems="center">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={recipes.thumbnail} />
            </ListItemAvatar>
            <ListItemText primary={recipes.title} />
          </ListItem>
          
        </List>

        <button
          onClick={() => {
            dispatch({ type: "RESET_RECIPES" });
          }}
        >
          Back
        </button>
      </Grid>
    </div>
  );
};

export default RecipeDetails;
