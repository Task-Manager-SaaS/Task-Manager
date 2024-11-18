import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/slices/taskSlice"; // This should already handle fetching from the API
import TaskItem from "../components/TaskItem";
import AddTask from "../components/AddTask";

const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.items);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const loadTasks = async () => {
      await dispatch(fetchTasks()); // Fetch tasks from the API
      setLoading(false);
    };
    loadTasks();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>; // Show loading state while fetching tasks
  }

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true; // Return all tasks if filter is "All"
  });

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Your Tasks</h2>
      
      {/* Filter Buttons */}
      <div className="mt-4 mb-4">
        <button onClick={() => setFilter("All")} className="mr-2 bg-gray-300 p-2 rounded">All</button>
        <button onClick={() => setFilter("Completed")} className="mr-2 bg-green-300 p-2 rounded">Completed</button>
        <button onClick={() => setFilter("Pending")} className="bg-red-300 p-2 rounded">Pending</button>
      </div>

      {/* Include AddTask component */}
      <AddTask />

      <div className="mt-4">
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;