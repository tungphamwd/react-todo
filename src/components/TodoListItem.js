import style from "./TodoListItem.module.css";
import PropTypes from "prop-types";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <div className={style.ListItem}>
      <li>{todo.title}</li>
      <button className={style.deleteIcon} onClick={() => onRemoveTodo(todo.id)}></button>
    </div>
  );
};
TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};
export default TodoListItem;
