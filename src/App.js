import logo from './logo.svg';
import './App.css';
import Sidebar from './component/Sidebar';
import Dashboard from './component/Dashboard';
import { useState } from 'react';

function App() {
  const[sidebarToggle,setSidebarToggle]=useState(false)
  return (
    <div className="flex">
      <Sidebar sidebarToggle={sidebarToggle}/>
      <Dashboard
      sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle}
      />

    </div>
  );
}

export default App;
