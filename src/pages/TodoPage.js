import React, { useState, useEffect } from "react";

// From: https://hackernoon.com/how-to-take-advantage-of-local-storage-in-your-react-projects-a895f2b2d3f2

import InputItem from "../components/InputItem";
import DisplayField from "../components/DisplayField";

export default function ToDoPage() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const handleInputItem = (key, value) => {
    // create new item
    const nItem = {
      id: key + Math.floor(Math.random() * 100),
      value: value
    };
    // copy current list of items
    const list = [...todo];
    // add the new item to the list
    list.push(nItem);
    // update state with new list, reset the input
    setTodo(list);
    localStorage.setItem("todos", JSON.stringify(todo));
  };

  function deleteItem(id) {
    const filter = todo.filter(item => item.id !== id);
    setTodo(filter);
  }

  return (
    <div>
      ToDo Page
      <br /> <br />
      <InputItem handleInputItem={handleInputItem} />
      <br /> <br />
      DisplayField:
      <DisplayField list={todo} deleteItem={deleteItem} />
    </div>
  );
}
