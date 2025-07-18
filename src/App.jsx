import { useReducer} from "react";
import "./App.css";
import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";
import InitialTodos from "./data/InitialTodos";
//import getNextTodoid from "./utils/getNextTodoid";
import todosReducer from "./reducers/todosReducer";
function App() {
  const [todos, dispatch] = useReducer(todosReducer,InitialTodos);
  const handleChangeTodo = (todo) => {
    dispatch({
      type:"change",
      todo,
    })
  };
  const handleDeleteTodo = (id) => {
    dispatch({
      type :"delete",
      id,
    })
  };
  const handleAddTodo = (title) => {
    dispatch({
      type:"add",
      title,
    })
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
