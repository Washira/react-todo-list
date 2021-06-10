import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { renderAppStyles } from "./styles";
import Edit from "./Edit";

function Form() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [clicked, setClicked] = useState(false);

  const persist = (newTodos) => {
    fetch("http://localhost:5000/todo/create-todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodos),
    });
  };

  const createTodo = async (e) => {
    await e.preventDefault();
    if (!title) {
      return;
    }
    const newTodo = await {
      title: title,
      start: start,
      end: end,
      clicked: clicked,
    };
    const newTodos = await [...todos, newTodo];
    await setTodos(newTodos);
    await setTitle("");
    await setStart("");
    await setEnd("");
    await persist(newTodos);
    await loadData();
  };

  const loadData = async () => {
    const data = await fetch("http://localhost:5000/todo", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await data.json();
    setTodos(response);
  };

  useEffect(() => {
    loadData();
  }, []);

  const editClicked = (id, title, start, end, clicked) => {
    fetch(`http://localhost:5000/todo/update-todo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        start: start,
        end: end,
        clicked: !clicked,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const deleteTodo = async (id) => {
    fetch(`http://localhost:5000/todo/delete-todo/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(console.log("This item successfully deleted!"))
      .catch((error) => {
        console.log(error);
      });
    await loadData();
  };

  const getTodos = () => {
    return todos;
  };

  const editButton = async (id, title, start, end, clicked) => {
    await editClicked(id, title, start, end, clicked);
    await console.log(clicked);
    await setClicked(false);
    await loadData();
  };

  return (
    <div>
      <div style={renderAppStyles()}>
        <h1>Todo-List</h1>
        <form onSubmit={createTodo}>
          <div></div>
          <div>
            <label>
              Title :{" "}
              <input
                type="text"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
          </div>
          <br />
          <div>
            <label>
              Starting Date :{" "}
              <input
                type="text"
                value={start}
                onChange={(e) => setStart(e.target.value)}
              />
            </label>
          </div>
          <br />
          <div>
            <label>
              Finished Date :{" "}
              <input
                type="text"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
              />
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

      <div>
        {getTodos().map((todo, index) => (
          <div key={index} style={renderAppStyles()}>
            <h1>{todo.title}</h1>
            <p>Starting at : {todo.start}</p>
            <p>Finished at : {todo.end}</p>
            <button className="delete-btn" onClick={() => deleteTodo(todo._id)}>
              Delete
            </button>
            <button
              className="complete-btn"
              onClick={() =>
                editButton(
                  todo._id,
                  todo.title,
                  todo.start,
                  todo.end,
                  todo.clicked
                )
              }
            >
              Edit
            </button>
            {todo.clicked ? (
              <Edit
                data={{
                  id: todo._id,
                  title: todo.title,
                  start: todo.start,
                  end: todo.end,
                  clicked: todo.clicked,
                }}
                editButton={editButton}
              />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Form;
