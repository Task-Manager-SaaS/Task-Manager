import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch tasks from the API
// Fetch tasks from the API
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
    const response = await fetch("http://localhost:8000/tasks");
    return response.json();
  });

// Add a new task
export const addTask = createAsyncThunk("tasks/addTask", async (task) => {
  const response = await fetch("http://localhost:8000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return response.json();
});

// Update an existing task
export const updateTask = createAsyncThunk("tasks/updateTask", async (task) => {
  const response = await fetch(`http://localhost:8000/tasks/${task.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return response.json(); // Return the updated task
});

// Delete a task
export const deleteTask = createAsyncThunk("tasks/deleteTask", async (id) => {
  await fetch(`http://localhost:8000/tasks/${id}`, {
    method: "DELETE",
  });
  return id; // Return the id to remove it from the state
});

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.items.push(action.payload); // Add new task to the list
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.items.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload; // Update the task in the list
        }
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter((task) => task.id !== action.payload); // Remove deleted task
      });
  },
});

export default taskSlice.reducer;