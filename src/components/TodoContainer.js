import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import PropTypes from "prop-types";

const TodoContainer = ({addTodo, todoList, removeTodo, setSortDirection, sortDirection}) => {
    return (
        <>
            <AddTodoForm onAppTodo={addTodo} />
            <TodoList todoList={todoList} onRemoveTodo={removeTodo} sortDirection={sortDirection} onSortDirection={setSortDirection} />
        </>
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