import { useState, useEffect } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useTodoContext } from "../contexts/TodoContext";

const EditForm = () => {
  const { editedTask, updateTask, closeEditMode } = useTodoContext();
  const [updatedTaskName, setUpdatedTaskName] = useState(
    editedTask?.name || ""
  );

  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      if (e.key === "Escape") closeEditMode();
    };

    window.addEventListener("keydown", closeModalIfEscaped);

    return () => {
      window.removeEventListener("keydown", closeModalIfEscaped);
    };
  }, [closeEditMode]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...editedTask, name: updatedTaskName });
  };

  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
      onClick={(e) => e.target === e.currentTarget && closeEditMode()}
    >
      <form className="todo" onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            className="input"
            value={updatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task"
          />
          <label htmlFor="editTask" className="label">
            Update Task
          </label>
        </div>
        <button
          className="btn"
          type="submit"
          aria-label={`Confirm edited task to now read ${updatedTaskName}`}
        >
          <CheckIcon strokeWidth={2} height={24} width={24} />
        </button>
      </form>
    </div>
  );
};

export default EditForm;
