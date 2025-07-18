import { useState } from "react";
import "./App.css";
import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";
import InitialTodos from "./data/InitialTodos";
import getNextTodoid from "./utils/getNextTodoid";
function App() {
  const [todos, setTodos] = useState(InitialTodos);
  const handleChangeTodo = (todo) => {
    const changedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return {
          ...t,
          title: todo.title,
          done: todo.done,
        };
      }
      return t;
    });
    setTodos(changedTodos);
  };
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleAddTodo = (title) => {
    setTodos([
      ...todos,
      {
        id: getNextTodoid(todos),
        title,
        done: false,
      },
    ]);
  };

  return (
    <div>
      <h1>simple Todo Application</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default App;
