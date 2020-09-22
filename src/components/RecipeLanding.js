import React, { useState, useEffect } from "react";

// Relative Imports
import { getRows, getColumns } from "../processapi";
import { useStyles } from "../style/styles";
import RecipePagination from "./RecipePagination";
import RecipeBody from "./RecipeBody";

// Absolute Imports
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const RecipeLanding = () => {
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [showDetails, setShowDetails] = useState(0);

  const classes = useStyles();

  useEffect(() => {
    setRows(getRows());
    setFilteredRows(getRows());
  }, []);

  const showRecipeDetails = () => {
    setShowDetails(1);
  };

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
      <Grid container justify="center" spacing={3}>
        {/**
         * This is the search field
         * Could add validation- no invalid characters allowed etc.
         */}
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

      <Grid container justify="center" spacing={3}>
        {/* <List component="nav">
          {filteredRows.map((row) => (
            <ListItem button key={row.title}>
              <ListItemText primary={row.title} />
            </ListItem>
          ))}
        </List> */}
        <RecipeBody
          rows={filteredRows}
          page={page}
          rowsPerPage={rowsPerPage}
          showRecipeDetails={showRecipeDetails}
        />

        <Grid item xs={12}>
          <RecipePagination
            filteredRows={filteredRows}
            page={page}
            rowsPerPage={rowsPerPage}
            setPage={setPage}
            setRowsPerPage={setRowsPerPage}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default RecipeLanding;
