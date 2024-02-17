import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import PropTypes from "prop-types";
import styles from './TodoContainer.module.css'
const TodoContainer = ({addTodo, todoList, removeTodo, setSortDirection, sortDirection}) => {
    return (
        <div className={styles.container}>
            <AddTodoForm onAppTodo={addTodo} />
            <TodoList todoList={todoList} onRemoveTodo={removeTodo} sortDirection={sortDirection} onSortDirection={setSortDirection} />
        </div>
    )
}
TodoContainer.propTypes = {
    onAddTodo: PropTypes.func,
    todoList: PropTypes.array,
    removeTodo: PropTypes.func,
    setSortDirection: PropTypes.func,
    sortDirection: PropTypes.string
  };
export default TodoContainer;