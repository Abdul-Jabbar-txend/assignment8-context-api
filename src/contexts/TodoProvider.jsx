import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import TodoContext from "./TodoContext";

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage("react-todo.tasks", []);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(null);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const updateTask = (task) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === task.id ? { ...t, name: task.name } : t))
    );
    closeEditMode();
  };

  const startEditTodo = (task) => {
    setEditedTask(task);
    setIsEditing(true);
  };

  const closeEditMode = () => {
    setIsEditing(false);
  };

  return (
    <TodoContext.Provider
      value={{
        tasks,
        isEditing,
        editedTask,
        addTask,
        deleteTask,
        toggleTask,
        updateTask,
        startEditTodo,
        closeEditMode,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
