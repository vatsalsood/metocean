import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

// Relative Imports
import { getRows, getColumns } from "./processapi";
import { useStyles } from "./style/styles";
import TeamTablePagination from "./components/TeamTablePagination";
import RecipeBody from "./components/RecipeBody";

// Absolute Imports

import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const App = () => {
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const classes = useStyles();

  useEffect(() => {
    setRows(getRows());
    setFilteredRows(getRows());
  }, []);

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
        <RecipeBody rows={filteredRows} page={page} rowsPerPage={rowsPerPage} />

        <Grid item xs={12}>
          <TeamTablePagination
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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
