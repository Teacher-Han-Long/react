import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newTodo =  {...this.state, id: uuidv4(), completed: false}
    this.props.addTodo(newTodo);
    this.setState({
      task: ""
    })
  }

  render() {
    return (
        <form className="NewTodoForm" onSubmit={this.handleSubmit}>
          <label htmlFor="task">New Todo:</label>
          <input
            type="text"
            placeholder="add new todos HERE"
            id="task"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
          />
           <button>Add</button>
        </form>
    );
  }
}

export default NewTodoForm;
