import React, { useState } from "react";
import { Grid } from "@material-ui/core";
//import Paper from "@material-ui/core";
import Input from "./Input";
import List from "./List";
import ListItem from "./ListItem";
import NavBar from "./NavBar";
import { makeStyles } from "@material-ui/core/styles";
import nextId from "react-id-generator";

const useStyles = makeStyles({
  input: {
    marginTop: "20px",
  },

  inputButton: {
    marginLeft: "20px",
  },
  container: {
    border: "2px solid black",
    height: "50vh",
  },
  listItem: {
    textDecoration: "line-through",
  },
});

const App = () => {
  // style
  const classes = useStyles();

  //state
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");

  //funkcje obsługujące state///

  //obsługa inputa
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
    if (e.target.checked) {
    }
  };
  ///dodawanie zadania
  const handleTask = () => {
    if (inputValue !== "" && !edit) {
      const newTask = {
        id: nextId(),
        text: inputValue,
        checked: false,
      };
      setTask([...task, newTask]);
      setInputValue("");
    } else if (inputValue !== "" && edit) {
      const edited = task.map((item) => {
        if (item.id === id) {
          return { ...item, text: inputValue };
        } else {
          return item;
        }
      });

      setTask(edited);
    }

    setInputValue("");
    setEdit(false);
  };

  //usuwanie zadania

  const handleDeleteTask = (id) => {
    if (!edit) {
      const array = task;
      const newArray = array.filter((item) => {
        return item.id !== id;
      });

      setTask(newArray);
    } else {
      return;
    }
  };

  //checkbox

  const handleCheck = (id) => {
    if (!edit) {
      let newArr = [];
      for (let item of task) {
        if (item.id === id) {
          item.checked = !item.checked;
          newArr.push(item);
        } else {
          newArr.push(item);
        }

        setTask(newArr);
      }
    } else {
      return;
    }
  };

  //edit task

  const handleEditTask = (id) => {
    const edit = task.find((item) => {
      return item.id === id;
    });

    if (edit.checked) {
      return;
    }
    setEdit(true);
    setId(id);
    setInputValue(edit.text);
  };

  const content = task.map((item) => (
    <ListItem
      checked={item.checked}
      line={classes.listItem}
      key={item.id}
      id={item.id}
      text={item.text}
      deleteTask={handleDeleteTask}
      handleCheck={handleCheck}
      editTask={handleEditTask}
    ></ListItem>
  ));

  return (
    <div>
      <Grid container justify="center" direction="column">
        <NavBar></NavBar>
        <Input
          handleInputChange={handleInputValue}
          handleAddTask={handleTask}
          value={inputValue}
          inputClass={classes.input}
          buttonClass={classes.inputButton}
          edited={edit}
        ></Input>

        <List style={classes.container}>{content}</List>
      </Grid>
    </div>
  );
};

export default App;
