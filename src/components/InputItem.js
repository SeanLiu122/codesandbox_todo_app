import React from "react";

export default function inputItem(props) {
  let { newItem, handleInputItem } = props;

  function handleChange(e) {
    newItem = e.target.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleInputItem(e.target.value, newItem);
  }

  return (
    <React.Fragment>
      Add an item to the list:
      <br />
      <input type="text" placeholder="Type item here" onChange={handleChange} />
      <button onClick={handleSubmit}>&#43; Add</button>
    </React.Fragment>
  );
}
