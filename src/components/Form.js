import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { appStyleMax, appStyleMin } from "./styles";

function Form() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [clicked, setClicked] = useState("");

  const persist = (newTodos) => {
    fetch("http://localhost:5000/todo/create-todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodos),
    });
  };

  const createTodo = (e) => {
    e.preventDefault();
    if (!title) {
      return;
    }
    const newTodo = { title: title, start: start, end: end };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTitle("");
    setStart("");
    setEnd("");
    persist(newTodos);
  };

  useEffect(() => {
    fetch("http://localhost:5000/todo/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((todos) => setTodos(todos));
  });

  const deleteTodo = (id) => {
    const todoId = id.toString();
    fetch("http://localhost:5000/todo/delete-todo/" + todoId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(console.log("This item successfully deleted!"))
      .catch((error) => {
        console.log(error);
      });
  };

  const getTodos = () => {
    return todos;
  };

  const renderAppStyles = () => {
    if (window.innerWidth <= 375) {
      return appStyleMin;
    }
    return appStyleMax;
  };

  return (
    <div>
      <div style={renderAppStyles()}>
        <h1>Todo-List</h1>
        <form onSubmit={createTodo}>
          <div>
            <label>Title : </label>
          </div>
          <div>
            <input
              type="text"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label>
              Start Date :{" "}
              <input
                type="text"
                value={start}
                required
                onChange={(e) => setStart(e.target.value)}
              />{" "}
              <span>(YYYY-MM-DD)</span>
            </label>
          </div>
          <br />
          <div>
            <label>
              Finish Date :{" "}
              <input
                type="text"
                value={end}
                required
                onChange={(e) => setEnd(e.target.value)}
              />{" "}
              <span>(YYYY-MM-DD)</span>
            </label>
          </div>
          <br />
          <Button
            className="add-btn"
            type="submit"
            style={{ marginTop: "1em" }}
          >
            Add
          </Button>
        </form>
      </div>
      <div style={renderAppStyles()}>
        {getTodos().map((todo) => (
          <div key={todo._id}>
            <h1>{todo.title}</h1>
            <p>Start at : {todo.start}</p>
            <p>Finish at : {todo.end}</p>
            <button className="delete-btn" onClick={() => deleteTodo(todo._id)}>Delete</button>
            <button className="complete-btn">Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Form;

