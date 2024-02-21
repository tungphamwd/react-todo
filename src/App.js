import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TodoContainer from "./components/TodoContainer";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
    };

    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      const todoListData = data.records.map((record) => ({
        title: record.fields.title,
        id: record.id,
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
        { id: newTodo.id, title: newTodo.fields.title },
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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <TodoContainer {...{ addTodo, removeTodo, todoList }} />
              )}
            </>
          }
        />
        <Route path="/new" element={<h1>New Todo List</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
