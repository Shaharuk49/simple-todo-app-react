import { useState } from "react";
import InitialTodos from "../data/InitialTodos";
import getNextTodoid from "../data/utils/getNextTodoid";
import Todo from "./Todo";

export default function TodoList() {
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
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo
            todo={todo}
            onChangeTodo={handleChangeTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        </li>
      ))}
    </ul>
  );
}
