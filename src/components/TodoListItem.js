import style from "./TodoListItem.module.css";
import PropTypes from "prop-types";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <div className={style.ListItem}>
      <li>{todo.title}</li>
      <button onClick={() => onRemoveTodo(todo.id)}>Delete</button>
    </div>
  );
};
TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};
export default TodoListItem;
