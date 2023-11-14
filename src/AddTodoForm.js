const AddTodoForm = ({onAppTodo}) => {
  const handleAddTodo = (e) => {
    e.preventDefault();
    const todoTitle = e.target.title.value;
    onAppTodo(todoTitle)
    console.log(todoTitle)
    e.target.title.value = '';
  }
  return (
    <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title</label>
        <input name="title" id="todoTitle" />
        <button>Add</button>
    </form>
  )
};

export default AddTodoForm;