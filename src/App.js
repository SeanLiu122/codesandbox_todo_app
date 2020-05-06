import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

// From: https://hackernoon.com/how-to-take-advantage-of-local-storage-in-your-react-projects-a895f2b2d3f2

import InputItem from "./components/InputItem";
import DisplayField from "./components/DisplayField";

export default function App() {
  const [data, setData] = useState({ hits: [] });
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://hn.algolia.com/api/v1/search?query=redux"
      );
      setData(result.data);
    };
    fetchData();
  }, []);

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
        <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href="item.url">{item.title}</a>
            </li>
          ))}
        </ul>
        <InputItem handleInputItem={handleInputItem} />
        <br /> <br />
        DisplayField:
        <DisplayField list={todo} deleteItem={deleteItem} />
      </div>
    </div>
  );
}
