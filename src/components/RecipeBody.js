import React, { useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const RecipeBody = (props) => {
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
              onClick={props.showRecipeDetails}
            />
          </ListItem>
        ))}
    </List>
  );
};

export default RecipeBody;
