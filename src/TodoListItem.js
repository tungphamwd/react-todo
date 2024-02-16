import style from './TodoListItem.module.css'

const TodoListItem = ({todo, onRemoveTodo}) => {
    return (
        <li className={style.ListItem}>{todo.title}&nbsp;<button onClick={() => onRemoveTodo(todo.id)}>Delete</button></li>
    )
}

export default TodoListItem;