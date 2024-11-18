import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner'; // For showing toast notifications
import Login from './pages/Login.jsx';
import Tasks from './pages/Tasks.jsx';
import Users from './pages/Users.jsx';
import Trash from './pages/Trash.jsx';
import TaskDetails from './pages/TaskDetails.jsx';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state

function App() {
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Accessing authentication status

  return (
    <main className="w-full min-h-screen bg-[#f3f4f6]">
      <Toaster richColors />
      <Routes>
        {/* Protected Routes */}
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/team" element={<Users />} />
            <Route path="/trashed" element={<Trash />} />
            <Route path="/task/:id" element={<TaskDetails />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/log-in" state={{ from: location }} replace />} /> // Redirect to login if not authenticated
        )}
        
        {/* Login Route */}
        <Route path="/log-in" element={<Login />} />
      </Routes>
    </main>
  );
}

export default App;
