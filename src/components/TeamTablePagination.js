/**
 * TeamTablePagination Component
 * This component breaks the table into pages
 * Props:filteredRows, setRowsPerPage, rowsPerPage, setPage
 */

import React from "react";

import TablePagination from "@material-ui/core/TablePagination";
import Pagination from "@material-ui/lab/Pagination";

const TeamTablePagination = (props) => {
  const handleChangePage = (event, newPage) => {
    props.setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    props.setRowsPerPage(parseInt(event.target.value, 10));
    props.setPage(0);
  };

  return (
    <Pagination //   rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={props.filteredRows.length}
      page={props.page}
      onChange={handleChangePage}
    />

    // <TablePagination
    //   rowsPerPageOptions={[5, 10, 25]}
    //   component="div"
    //   count={props.filteredRows.length}
    //   rowsPerPage={props.rowsPerPage}
    //   page={props.page}
    //   onChangePage={handleChangePage}
    //   onChangeRowsPerPage={handleChangeRowsPerPage}
    // />
  );
};
export default TeamTablePagination;
