import { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import PropTypes from "prop-types";
const AddTodoForm = ({ onAppTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const handleTitleChange = (e) => {
    const newTodoTitle = e.target.value;
    setTodoTitle(newTodoTitle);
  };
  const handleAddTodo = (e) => {
    e.preventDefault();
    onAppTodo(todoTitle);
    setTodoTitle("");
  };
  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
      >
        Title
      </InputWithLabel>
      <button>Add</button>
    </form>
  );
};
AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};
export default AddTodoForm;