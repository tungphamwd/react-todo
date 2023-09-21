import React from "react";

const todoList = [
  { id: 1, title: "Buy grocery" },
  { id: 2, title: "Cook dinner" },
  { id: 3, title: "Wash dishes" },
];

function App() {
  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
