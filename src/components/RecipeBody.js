import React, { useEffect, useContext } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import RecipesContext from "../context/recipes-context";

const RecipeBody = (props) => {
  const { dispatch } = useContext(RecipesContext);

  const showDetails = (title) => {
    dispatch({ type: "GET_RECIPE", title });
  };

  return (
    <List component="nav">
      {props.rows
        .slice(
          props.page * props.rowsPerPage,
          props.page * props.rowsPerPage + props.rowsPerPage
        )
        .map((row) => (
          <ListItem button key={row.title}>
            <ListItemText
              primary={row.title}
              // onClick={props.showRecipeDetails}
              onClick={() => {
                dispatch({ type: "GET_RECIPE", title: row.title });
              }}
            />
          </ListItem>
        ))}
    </List>
  );
};

export default RecipeBody;
