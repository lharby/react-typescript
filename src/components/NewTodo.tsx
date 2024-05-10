import { useRef } from "react";

import "./NewTodo.css";

type NewTodoProps = {
  onAddTodo: (text: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current?.value;
    if (enteredText) {
      props.onAddTodo(enteredText);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="todo-text">New todo item</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewTodo;
