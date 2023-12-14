import { useState } from "react";
import InputWithLabel from "./InputWithLabel";

const AddTodoForm = ({ onAppTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const handleTitleChange = (e) => {
    const newTodoTitle = e.target.value;
    setTodoTitle(newTodoTitle);
  };
  const handleAddTodo = (e) => {
    e.preventDefault();
    onAppTodo({ id: Date.now(), title: todoTitle });
    setTodoTitle("");
  };
  return (
    <form onSubmit={handleAddTodo}>
     <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}>Title</InputWithLabel>
      <button>Add</button>
    </form>
  );
};

export default AddTodoForm;
