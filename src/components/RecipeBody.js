import React, { useContext, useEffect, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import RecipesContext from "../context/recipes-context";

const RecipeBody = (props) => {
  const { dispatch } = useContext(RecipesContext);
  const { recipes } = useContext(RecipesContext);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (recipes) {
      setRows(recipes);
    }
  }, [recipes]);

  return (
    <List component="nav" style={{ marginTop: "20px" }}>
      {rows
        .slice(
          props.page * props.rowsPerPage,
          props.page * props.rowsPerPage + props.rowsPerPage
        )
        .map((row) => (
          <ListItem button key={row.title}>
            <ListItemText
              primary={row.title}
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
