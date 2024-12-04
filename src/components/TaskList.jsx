import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";
import { useTodoContext } from "../contexts/TodoContext";

const TaskList = () => {
  const { tasks, deleteTask, toggleTask, startEditTodo } = useTodoContext();

  return (
    <ul className={styles.tasks}>
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            enterEditMode={startEditTodo}
          />
        ))}
    </ul>
  );
};

export default TaskList;
