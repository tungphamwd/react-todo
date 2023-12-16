import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { useState, useEffect } from "react";

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(() => {
    const savedTodoList = localStorage.getItem("savedTodoList");
    return savedTodoList ? JSON.parse(savedTodoList) : [];
  });

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
};

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    const newTodoList = todoList.filter(todo => {
      return todo.id !== id;
    });
    setTodoList(newTodoList)
  }
  return (
    <>
      <AddTodoForm onAppTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </>
  );
}

export default App;
