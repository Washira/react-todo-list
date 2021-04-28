import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      start: "",
      end: "",
    };
  }

  titleOnChange = async (e) => {
    await this.setState({ title: e.target.value });
    return true;
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
          <div>
            <input type="text" required onChange={this.titleOnChange} />
          </div>

          <br />
          <div>
            <label>
              Start Date : <input type="text" required onChange={this.startOnChange} />{" "}
              <span>(YYYY-MM-Dd)</span>
            </label>
          </div>

          <br />
          <div>
            <label>
              Finish Date : <input type="text" required onChange={this.endOnChange} />{" "}
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
    );
  }
}

export default Form;
