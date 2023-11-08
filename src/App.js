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
      <TodoList todoList={todoList} />
      <AddTodoForm onAppTodo={addTodo} />
    </>
  );
}

export default App;
