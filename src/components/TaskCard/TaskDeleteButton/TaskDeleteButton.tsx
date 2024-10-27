"use client";

import { FaTrashAlt } from "react-icons/fa";
import { deleteTask, FormState } from "@/actions/task";
import { useFormState, useFormStatus } from "react-dom";

interface TaskDeleteButtonProps {
  id: string;
}

const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({ id }) => {
  const deleteTaskWithId = deleteTask.bind(null, id);
  const initialState: FormState = {
    error: "",
  };
  const [state, formAction] = useFormState(deleteTaskWithId, initialState);

  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className="hover:text-gray-700 
      text-lg cursor-pointer"
        disabled={pending}
      >
        <FaTrashAlt />
      </button>
    );
  };

  return (
    <form action={formAction}>
      <SubmitButton />
    </form>
  );
};

export default TaskDeleteButton;
