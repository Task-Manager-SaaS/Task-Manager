import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../redux/slices/taskSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);

  const handleUpdate = () => {
    dispatch(updateTask({ id: task.id, title: updatedTitle, description: updatedDescription }));
    setIsEditing(false);
  };

  // Toggle task completion
  const toggleCompletion = () => {
    dispatch(updateTask({ ...task, completed: !task.completed }));
  };

  return (
    <div className="border p-4 mb-2 rounded-lg shadow">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            className="border p-2 rounded"
          />
          <textarea
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
            className="border p-2 rounded"
          />
          <button onClick={handleUpdate} className="bg-green-500 text-white p-2 rounded">
            Save
          </button>
          <button onClick={() => setIsEditing(false)} className="bg-red-500 text-white p-2 rounded ml-2">
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <h3 className="text-xl font-semibold">{task.title}</h3>
          <p>{task.description}</p>
          <p className={`text-sm ${task.completed ? 'text-green-500' : 'text-red-500'}`}>
            Status: {task.completed ? "Completed" : "Pending"}
          </p>
          {/* Toggle Completion Button */}
          <button onClick={toggleCompletion} className={`p-2 rounded ${task.completed ? 'bg-red-500' : 'bg-green-500'} text-white`}>
            Mark as {task.completed ? "Pending" : "Completed"}
          </button>
          <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white p-2 rounded ml-2">
            Edit
          </button>
          <button onClick={() => dispatch(deleteTask(task.id))} className="bg-red-500 text-white p-2 rounded ml-2">
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;