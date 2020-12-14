import React from "react";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

const ListItem = (props) => {
  const { id, text, deleteTask, handleCheck, checked, line, editTask } = props;
  return (
    <Grid item container direction="row">
      <Container maxWidth="sm">
        <Paper>
          <Grid item container direction="row" alignItems="center">
            <Grid item xs={6}>
              <Typography
                variant="h5"
                component="h2"
                className={checked ? line : null}
              >
                {text}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteTask(id)}
              >
                Delete
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => editTask(id)}
              >
                Edit
              </Button>
            </Grid>

            <Grid item xs={2}>
              <Checkbox
                checked={checked}
                onChange={() => handleCheck(id)}
              ></Checkbox>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Grid>
  );
};

export default ListItem;
