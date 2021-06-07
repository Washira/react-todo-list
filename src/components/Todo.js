import React, { Component } from "react";
import axios from "axios";

class Todo extends Component {
  constructor(props){
    super(props);
    this.deleteTodo = this.deleteTodo.bind(this);
  };

  deleteTodo = async() => {
    await axios
      .delete("http://localhost:5000/todo/delete-todo/" + this.props.obj._id)
      .then((res) => {
        console.log("Stormtrooper successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h1>{this.props.obj.title}</h1>
        <p>Start at : {this.props.obj.start.replace(/T/, ' ').replace(/\..+/, '')}</p>
        <p>Finish at : {this.props.obj.end.replace(/T/, ' ').replace(/\..+/, '')}</p>
        <button className="delete-btn" onClick={this.deleteTodo}>
          Delete
        </button>
        <button className="complete-btn" onClick={this.completeTodo}>
          Edit
        </button>
      </div>
    );
  }
}

export default Todo;
