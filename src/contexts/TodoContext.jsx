import { createContext, useContext } from "react";

const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

export default TodoContext;
