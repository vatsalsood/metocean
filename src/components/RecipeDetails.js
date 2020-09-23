import React, { useState, useContext, useEffect } from "react";
import RecipesContext from "../context/recipes-context";
import { useStyles } from "../style/styles";

import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const RecipeDetails = () => {
  const { recipes, dispatch } = useContext(RecipesContext);
  const [ingredients, setIngredients] = useState([]);

  const removeSpaces = (str) => {
    if (str) {
      let newStr = str.replace(/\s/g, "");
      setIngredients(newStr.split(","));
    }
  };

  const classes = useStyles();

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
                <Avatar
                  alt="Thumbnail"
                  src={recipes.thumbnail}
                  className={classes.small}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="h4" gutterBottom>
                    {recipes.title}
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Grid>
        <Grid container justify="center" spacing={3} xs={12}>
          <Grid item justify="center" xs={6}>
            <Typography variant="h6" gutterBottom>
              h6. Heading
            </Typography>
          </Grid>
          <Grid item justify="center" xs={6}>
            <List dense>
              {ingredients.map((ingredient) => {
                return (
                  <ListItem key={ingredient} alignItems="center">
                    <ListItemText primary={ingredient} />
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        </Grid>
        <button
          onClick={() => {
            dispatch({ type: "RESET_RECIPES" });
          }}
        >
          Back
        </button>
      </Paper>
    </div>
  );
};

export default RecipeDetails;
