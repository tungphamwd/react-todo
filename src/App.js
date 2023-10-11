import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { useState } from "react";

function App() {
  const [newTodo, setNewTodo] = useState('');
  return (
    <>
      <TodoList />
      <AddTodoForm onAppTodo={setNewTodo} />
      <p>{newTodo}</p>
    </>
  );
}

export default App;
