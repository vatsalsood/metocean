/**
 * RecipePagination Component
 * This component breaks the table into pages
 * Props:filteredRows, setRowsPerPage, rowsPerPage, setPage
 */

import React, { useEffect } from "react";

import TablePagination from "@material-ui/core/TablePagination";

const RecipePagination = (props) => {
  const handleChangePage = (event, newPage) => {
    props.setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    props.setRowsPerPage(parseInt(event.target.value, 10));
    props.setPage(0);
  };

  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={props.filteredRows.length}
      rowsPerPage={props.rowsPerPage}
      page={props.page}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
      style={{ marginTop: "20px" }}
    />
  );
};
export default RecipePagination;
