import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      paddingBottom: theme.spacing(2),
      color: theme.palette.grey[400],
      paddingTop: theme.spacing(2),
      fontWeight: 400,
    },
    keyboardKey: {
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
      border: `1px solid ${theme.palette.grey[200]}`,
      borderRadius: 8,
    },
  })
);

export default function Advice() {
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      justifyContent="center"
      alignItems="center"
      display="flex"
    >
      <Box mx={1} fontSize={16}>
        Mon ingrédient
      </Box>
      <Box mx={1} fontWeight="600">
        +
      </Box>
      <Box mx={1}>
        appuyer sur
      </Box>
      <Box mx={1} className={classes.keyboardKey}>
        ENTRÉE
      </Box>
    </Box>
  );
}
