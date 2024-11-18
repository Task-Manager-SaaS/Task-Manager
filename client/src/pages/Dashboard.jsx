import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../redux/slices/todoSlice";
import Button from "../components/Button";

const Dashboard = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [task, setTask] = useState("");

  const handleAddTodo = () => {
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask("");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-[#f3f4f6] p-4">
      <h1 className="text-3xl font-bold mb-6">Your To-Do List</h1>
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add new task"
          className="border p-2 rounded w-full"
        />
        <Button label="Add Task" onClick={handleAddTodo} />
      </div>
      <ul className="w-full max-w-md">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center p-2 border-b">
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
            >
              {todo.text}
            </span>
            <Button label="Delete" onClick={() => dispatch(deleteTodo(todo.id))} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
