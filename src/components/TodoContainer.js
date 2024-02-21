import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import PropTypes from "prop-types";

const TodoContainer = ({addTodo, todoList, removeTodo}) => {
    return (
        <>
            <AddTodoForm onAppTodo={addTodo} />
            <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
        </>
    )
}
TodoContainer.propTypes = {
    onAddTodo: PropTypes.func,
    todoList: PropTypes.array,
    removeTodo: PropTypes.func
  };
export default TodoContainer;