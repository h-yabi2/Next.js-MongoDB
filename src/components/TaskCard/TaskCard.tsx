import TaskDeleteButton from "./TaskDeleteButton/TaskDeleteButton";
import TaskEditButton from "./TaskEditButton/TaskEditButton";

interface TaskDocument {
  _id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
}

const TaskCard: React.FC<{ taskCard: TaskDocument }> = ({ taskCard }) => {
  return (
    <div
      className="w-64 h-52 p-4 bg-white rounded-md shadow-md 
  flex flex-col justify-between"
    >
      <header>
        <h1 className="text-lg font-semibold">{taskCard.title}</h1>
        <div className="mt-1 text-sm line-clamp-3">{taskCard.description}</div>
      </header>
      <div>
        <div className="text-sm">{taskCard.dueDate}</div>
        <div className="flex justify-between items-center">
          <div
            className={`mt-1 text-sm px-2 py-1 w-24 text-center text-white 
        rounded-full shadow-sm ${
          taskCard.isCompleted ? "bg-green-500" : "bg-red-500"
        }`}
          >
            {taskCard.isCompleted ? "Completed" : "Incomplete"}
          </div>
          <div className="flex gap-4">
            <TaskEditButton id={taskCard._id} />
            <TaskDeleteButton id={taskCard._id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
