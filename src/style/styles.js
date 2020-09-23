/**
 * This file contains the styles for the app
 */

import { makeStyles } from "@material-ui/core/styles";

// const flex = {
//   display: 'flex',
//   alignItems: 'baseline',
//   justifyContent: 'space-evenly'
// }

export const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  root: {
    flexGrow: 1,
    padding: "50px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  ingredients: {
    maxHeight: 500,
    textAlign: "center",
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

// export const useStyles1 = ({ spacing: { unit } }) => ({
//   root: {
//     margin: `${unit * 3}px auto`,
//     padding: unit * 2,
//     maxWidth: 400,
//   },
//   header: {
//     ...flex,
//     marginTop: unit * 2,
//   },
//   form: {
//     ...flex,
//     marginBottom: unit,
//   },
// });
