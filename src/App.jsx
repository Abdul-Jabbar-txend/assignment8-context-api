import { useEffect } from "react";
import { useTodoContext } from "./contexts/TodoContext";
import CustomForm from "./components/CustomForm";
import EditForm from "./components/EditForm";
import TaskList from "./components/TaskList";

const App = () => {
  const {
    tasks,
    isEditing,
    editedTask,
    addTask,
    deleteTask,
    toggleTask,
    updateTask,
    startEditTodo,
    closeEditMode,
  } = useTodoContext();

  useEffect(() => {
    if (isEditing) {
      document.getElementById("editTask").focus();
    }
  }, [isEditing]);

  return (
    <div className="container">
      <header>
        <h1>Todo App</h1>
      </header>
      {isEditing && (
        <EditForm
          editedTask={editedTask}
          updateTask={updateTask}
          closeEditMode={closeEditMode}
        />
      )}
      <CustomForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        enterEditMode={startEditTodo}
      />
    </div>
  );
};

export default App;
