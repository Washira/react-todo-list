import React, { Component } from "react";
import Todo from "./Todo";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todolist: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/todo")
      .then((res) => {
        this.setState({
          todolist: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  data = () => {
    return this.state.todolist.map((res, index) => (
      <div>
        <Todo obj={res} key={index} />
      </div>
    ));
  };

  render() {
    return (
      <div>
        <ListGroup>
          <ListGroup.Item>{this.data()}</ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default List;
