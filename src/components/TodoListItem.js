import style from './TodoListItem.module.css'
import PropTypes from "prop-types";

const TodoListItem = ({todo, onRemoveTodo}) => {
    return (
        <li className={style.ListItem}>{todo.title}&nbsp;<button onClick={() => onRemoveTodo(todo.id)}>Delete</button></li>
    )
}
TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onRemoveTodo: PropTypes.func.isRequired
  };
export default TodoListItem;