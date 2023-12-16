const TodoListItem = ({todo, onRemoveTodo}) => {
    return (
        <li>{todo.title}&nbsp;<button onClick={() => onRemoveTodo(todo.id)}>Delete</button></li>
    )
}

export default TodoListItem;