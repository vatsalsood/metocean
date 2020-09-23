import React, { useState, useContext, useEffect } from "react";
import RecipesContext from "../context/recipes-context";
// import { useStyles1 } from "../style/styles";

import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";

const RecipeDetails = () => {
  const { recipes, dispatch } = useContext(RecipesContext);
  const [ingredients, setIngredients] = useState([]);

  const removeSpaces = (str) => {
    if (str) {
      let newStr = str.replace(/\s/g, "");
      setIngredients(newStr.split(","));
    }
  };

  // const classes = useStyles1();

  useEffect(() => {
    removeSpaces(recipes.ingredients);
  }, [recipes]);

  return (
    <div>
      <Paper elevation={3}>
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
        <Grid container justify="center" spacing={3}>
          <List>
            {ingredients.map((ingredient) => {
              return (
                <ListItem key={ingredient} alignItems="center">
                  <ListItemText primary={ingredient} />
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Paper>
    </div>
  );
};

export default RecipeDetails;
