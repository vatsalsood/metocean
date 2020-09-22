import React, { useContext } from "react";
import RecipesContext from "../context/recipes-context";
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const RecipeDetails = () => {
  const { recipes, dispatch } = useContext(RecipesContext);

  return (
    <div>
      <Grid container justify="center" spacing={3}>
        <h1> Details page</h1>
        <List >
          <ListItem alignItems="center">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
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
