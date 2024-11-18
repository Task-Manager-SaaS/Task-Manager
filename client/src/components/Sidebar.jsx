import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-full bg-gray-800 text-white p-4">
      <h2 className="text-lg font-bold">Task Manager</h2>
      <ul className="mt-4">
        <li>
          <Link to="/dashboard" className="block py-2 hover:bg-gray-700 rounded">Dashboard</Link>
        </li>
        <li>
          <Link to="/tasks" className="block py-2 hover:bg-gray-700 rounded">Tasks</Link>
        </li>
        <li>
          <Link to="/team" className="block py-2 hover:bg-gray-700 rounded">Team</Link>
        </li>
        <li>
          <Link to="/trashed" className="block py-2 hover:bg-gray-700 rounded">Trashed</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;