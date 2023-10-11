import TodoListItem from "./TodoListItem";

const todoList = [
  { id: 1, title: "Buy grocery" },
  { id: 2, title: "Cook dinner" },
  { id: 3, title: "Wash dishes" },
];

const TodoList = () => {
  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
