import React, { Component } from "react";
import "./styles.css";

// From: https://hackernoon.com/how-to-take-advantage-of-local-storage-in-your-react-projects-a895f2b2d3f2

import InputItem from "./components/InputItem";
import DisplayField from "./components/DisplayField";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      todos: []
    };
  }

  // componentWillUnMount() {
  //   this.addItem();
  // }

  handleInputItem = (key, value) => {
    // create new item
    const nItem = {
      id: key + Math.floor(Math.random() * 100),
      value: value
    };

    // copy current list of items
    const list = [...this.state.todos];

    // add the new item to the list
    list.push(nItem);

    // update state with new list, reset the input
    this.setState({
      todos: list,
      newItem: ""
    });

    localStorage.setItem("todos", this.state.todos);
  };

  deleteItem = id => {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id)
    });
  };

  render() {
    return (
      <div className="App">
        <div
          style={{
            padding: 50,
            textAlign: "left",
            maxWidth: 500,
            margin: "auto"
          }}
        >
          <h1>To-Do App</h1>
          <InputItem
            newItem={this.state.newItem}
            handleInputItem={this.handleInputItem}
          />
          <br /> <br />
          DisplayField:
          <DisplayField list={this.state.todos} deleteItem={this.deleteItem} />
        </div>
      </div>
    );
  }
}
