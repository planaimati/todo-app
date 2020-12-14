import React from "react";
import { Grid } from "@material-ui/core";

const List = (props) => {
  return (
    <Grid container item direction="column" spacing={3}>
      {props.children}
    </Grid>
  );
};

export default List;
