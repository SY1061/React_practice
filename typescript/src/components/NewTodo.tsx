import React, {useContext, useRef} from "react";
import styles from './NewTodo.module.css'
import {TodosContext} from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    /*
      넘어올 타입을 확실히 안다면 !, 아니라면 ? 쓰기.
     */
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
}

export default NewTodo;