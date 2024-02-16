import TodoListItem from "../TodoListItem";
import PropTypes from "prop-types";
const TodoList = ({todoList, onRemoveTodo}) => {
  return (
    <>
      <h1>Todo List</h1>
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
  onRemoveTodo: PropTypes.func.isRequired
};
export default TodoList;
