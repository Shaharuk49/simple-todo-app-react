import "./App.css";
import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";

function App() {
  return (
    <div>
      <h1>simple Todo Application</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
