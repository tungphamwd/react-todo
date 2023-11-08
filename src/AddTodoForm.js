import { useState } from "react";

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
      <label htmlFor="todoTitle">Title</label>
      <input
        name="title"
        id="todoTitle"
        value={todoTitle}
        onChange={handleTitleChange}
      />
      <button>Add</button>
    </form>
  );
};

export default AddTodoForm;
