import React from "react";
import { TextField } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";

const Input = (props) => {
  const {
    value,
    handleInputChange,
    buttonClass,
    inputClass,
    handleAddTask,
    edited,
  } = props;
  return (
    <Grid container justify="center" className={inputClass}>
      <form autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Wpisz zadanie"
          variant="outlined"
          onChange={handleInputChange}
          value={value}
        />
      </form>
      <Button
        variant="contained"
        color="primary"
        className={buttonClass}
        onClick={handleAddTask}
    
      >
        {edited ? "potwierdź " : "dodaj"}
      </Button>
    </Grid>
  );
};

export default Input;
