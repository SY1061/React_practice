import React, {useState} from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {}
});

/*
  리액트 18버전부터는 children 도 명시적으로 타입설정을 해줘야 함.
 */
const TodosContextProvider: React.FC<{children: React.ReactNode}> = props => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos(prevTodos => {
      return prevTodos.concat(newTodo);
    });
  }

  const deleteTodoHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(prevTodo => prevTodo.id !== todoId);
    })
  }

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: deleteTodoHandler
  }

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
}

export default TodosContextProvider;