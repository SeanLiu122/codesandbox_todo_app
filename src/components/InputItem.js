import React from "react";

export default function inputItem(props) {
  let { handleInputItem } = props;
  let entry = "";

  function handleChange(e) {
    entry = e.target.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleInputItem(e.target.value, entry);
    entry = "";
  }

  return (
    <React.Fragment>
      Add an item to the list:
      <br />
      <input
        type="text"
        placeholder="Type item here"
        onChange={handleChange}
        required
      />
      <button onClick={handleSubmit}>&#43; Add</button>
    </React.Fragment>
  );
}
