import React from "react";

export default function displayField(props) {
  const { list, deleteItem } = props;
  return (
    <ul>
      {list.map(item => {
        return (
          <React.Fragment key={item.id}>
            {item.value}
            <button onClick={() => deleteItem(item.id)}>Remove</button>
          </React.Fragment>
        );
      })}
    </ul>
  );
}
