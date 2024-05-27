import React from "react";

function Columns() {
  const items = [
    {
      id: "100",
      title: "asd",
    },
    {
      id: "101",
      title: "asd",
    },
  ];
  return (
    <React.Fragment>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <h1>Title</h1>
          <p>{item.title}</p>
        </React.Fragment>
      ))}
      <td>Name</td>
      <td>Nikita</td>
    </React.Fragment>
  );
}

export default Columns;
//here if we use div tag then it gives warning that td cannot be the child of div element so use React.fragments
// It can accept key attributes while rendering the list
// key attributes are the only attribute to be passed to the fragment
