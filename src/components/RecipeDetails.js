import React, { useState, useContext, useEffect } from "react";

//Relative Imports
import RecipesContext from "../context/recipes-context";
import { useStyles } from "../style/styles";

//Absolute Imports
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
                  className={classes.large}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="h5" gutterBottom>
                    {recipes.title}
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Grid>
        <Grid container justify="center" spacing={3}>
          <Grid item justify="center" xs={3}>
            <Typography variant="h6" gutterBottom>
              Ingredients:
            </Typography>
          </Grid>
          <Grid item justify="center" xs={1}>
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
        <Grid container justify="center" spacing={3}>
          <Button
            variant="contained"
            color="primary"
            style={{ marginBottom: " 20px" }}
            onClick={() => {
              dispatch({ type: "RESET_RECIPES" });
            }}
          >
            Back
          </Button>
        </Grid>
      </Paper>
    </div>
  );
};

export default RecipeDetails;
