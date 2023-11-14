import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  return (
    <>
      <AddTodoForm onAppTodo={addTodo} />
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
