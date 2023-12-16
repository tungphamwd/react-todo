import TodoListItem from "./TodoListItem";

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

export default TodoList;
