import { useState } from "react";

import { Todo } from "./todo-model";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    setTodos((prevTodos) => [...prevTodos, { id: Math.random().toString(), text: text }]);
    console.log(todos);
  };

  const handleDeleteTodo = (todoID: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== todoID);
    });
  };

  return (
    <div className="App">
      <TodoList items={todos} onDeleteTodo={handleDeleteTodo} />
      <NewTodo onAddTodo={handleAddTodo} />
    </div>
  );
};

export default App;
