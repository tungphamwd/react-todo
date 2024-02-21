import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";
import styles from "./TodoList.module.css";
import { useState } from "react";
const TodoList = ({ todoList, onRemoveTodo, onSetTodoList }) => {
  const [direction, setDirection] = useState("asc");
  const [sortBy, setSortBy] = useState("createdTime");
  const handleSelectSort = (e) => {
    setSortBy(e.target.value);
    handleSort();
  };
  const handleClickDirection = () => {
    setDirection(direction === "asc" ? "desc" : "asc");
    handleSort();
  };
  const handleSort = () => {
    const sorted = [...todoList].sort((a, b) => {
      if (sortBy === "createdTime") {
        const timeA = new Date(a[sortBy]);
        const timeB = new Date(b[sortBy]);
        if (direction === "asc") {
          return timeA - timeB;
        } else {
          return timeB - timeA;
        }
      } else {
        const valueA =
          typeof a[sortBy] === "string" ? a[sortBy].toUpperCase() : a[sortBy];
        const valueB =
          typeof b[sortBy] === "string" ? b[sortBy].toUpperCase() : b[sortBy];
        if (direction === "asc") {
          return valueA > valueB ? 1 : -1;
        } else {
          return valueA < valueB ? 1 : -1;
        }
      }
    });
    onSetTodoList(sorted);
  };
  return (
    <>
      <div className={styles.todoListTitle}>
        <h1>Todo List</h1>
        <div>
          <label>
            Sort by:
            <select
              name="sorting"
              id="sorting"
              onChange={handleSelectSort}
              value={sortBy}
            >
              <option value="createdTime">Created Time</option>
              <option value="title">Title</option>
            </select>
          </label>
          <button onClick={handleClickDirection}>
            {direction === "asc" ? <span>&#8595;</span> : <span>&#8593;</span>}
          </button>
        </div>
      </div>
      <ul className={styles.todoContainer}>
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
  onSortBy: PropTypes.func,
};
export default TodoList;
