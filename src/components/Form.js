import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      start: "",
      end: "",
    };
  }

  titleOnChange = (e) => {
    this.setState({ title: e.target.value });
  };

  startOnChange = (e) => {
    this.setState({ start: e.target.value });
  };

  endOnChange = (e) => {
    this.setState({ end: e.target.value });
  };

  createTodo = (e) => {
    // e.preventDefault();

    const todoObject = {
      title: this.state.title,
      start: this.state.start,
      end: this.state.end,
    };

    axios
      .post("http://localhost:5000/todo/create-todo", todoObject)
      .then((res) => {
        console.log(res.data);
      });

    this.setState({
      title: "",
      start: "",
      end: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.createTodo}>
          <div>
            <label>Title : </label>
          </div>

          <input type="text" onChange={this.titleOnChange} />
          <br />
          <div>
            <label>Start Date : </label>
          </div>
          <input type="text" onChange={this.startOnChange} />
          <br />
          <div>
            <label>Finish Date : </label>
          </div>
          <input type="text" onChange={this.endOnChange} />
          <br />
          <button
            className="add-btn"
            type="submit"
            style={{ marginTop: "1em" }}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
