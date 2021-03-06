import React, { useState, useEffect, useContext } from "react";

// Relative Imports
import { useStyles } from "../style/styles";
import RecipePagination from "./RecipePagination";
import RecipeBody from "./RecipeBody";
import RecipesContext from "../context/recipes-context";

// Absolute Imports
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";

const RecipeLanding = () => {
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { recipes } = useContext(RecipesContext);

  const classes = useStyles();

  useEffect(() => {
    if (recipes) {
      setRows(recipes);
      setFilteredRows(recipes);
    }
  }, [recipes]);


  /**
   * This function searches the entries with the text typed into the input field
   * @param {event} event
   */
  const filterRows = (event) => {
    let searchText = event.target.value.toLowerCase();
    setFilteredRows(
      rows.filter((row) => row.title.toLowerCase().includes(searchText))
    );
  };
  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={3} xs={12}>
        <Grid container justify="center" spacing={3} xs={6}>
          {/**
           * This is the search field
           * Could add validation- no invalid characters allowed etc.
           */}

          <Grid item justify="center" xs={6}>
            <Typography variant="h6" align="center" gutterBottom>
              Recipes
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-basic"
              label="Search by name"
              fullWidth
              onChange={(e) => {
                filterRows(e);
              }}
            />
          </Grid>
        </Grid>

        <Grid container justify="center">
          <RecipeBody
            rows={filteredRows}
            page={page}
            rowsPerPage={rowsPerPage}
          />

          <Grid container justify="center" spacing={3}>
            <RecipePagination
              filteredRows={filteredRows}
              page={page}
              rowsPerPage={rowsPerPage}
              setPage={setPage}
              setRowsPerPage={setRowsPerPage}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default RecipeLanding;
