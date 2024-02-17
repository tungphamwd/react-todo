import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";
const TodoList = ({todoList, onRemoveTodo, onSortDirection, sortDirection}) => {
  const handleSort = () => {
    onSortDirection(sortDirection === "asc" ? "desc" : "asc")
  }
  return (
    <>
      <h1>Todo List</h1>
      <button onClick={handleSort}>Sort</button>
      <ul>
        {todoList.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
        ))}
      </ul>
    </>
  );
};


TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onSortDirection: PropTypes.func,
  sortDirection: PropTypes.string
};
export default TodoList;
