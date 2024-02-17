import { useState, useEffect } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import styles from "./TodoContainer.module.css";

const TodoContainer = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchData() {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
    };

    let url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      const todoListData = data.records.map((record) => ({
        title: record.fields.title,
        id: record.id,
        createdTime: record.fields.createdTime
      }));
      setTodoList(todoListData);
      setIsLoading(false);
    } catch (error) {
      console.error("Fetch Error:", error.message);
    }
  }

  async function addTodo(todoTitle) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
      body: JSON.stringify({ fields: { title: todoTitle } }),
    };

    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const newTodo = await response.json();
      setTodoList((prevTodo) => [
        ...prevTodo,
        { id: newTodo.id, title: newTodo.fields.title, createdTime: newTodo.createdTime },
      ]);
    } catch (error) {
      console.error("Add Todo Error:", error.message);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  const removeTodo = async (id) => {
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
    };

    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/${id}`;

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      fetchData();
    } catch (error) {
      console.error("Delete Todo Error:", error.message);
    }
  };
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.container}>
          <AddTodoForm onAppTodo={addTodo} />
          <TodoList
            todoList={todoList}
            onRemoveTodo={removeTodo}
            onSetTodoList={setTodoList}
          />
        </div>
      )}
    </>
  );
};

export default TodoContainer;
