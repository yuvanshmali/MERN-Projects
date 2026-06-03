import React from 'react'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import Add from './pages/Add'
import List from './pages/List'
import Order from './pages/Order'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';


const App = () => {
  const url = "http://localhost:4000";

  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className="app-container flex">
        <SideBar/>
        <Routes>
          <Route path="/add" element={<Add url={url}/>}/>
          <Route path="/list" element={<List url={url}/>}/>
          <Route path="/order" element={<Order url={url}/>}/>
        </Routes>
      </div>

    </div>
  )
}

export default App








// Understanding Purpose

// What is axios?
// axios – HTTP client, axios is a library used to send HTTP requests from frontend to backend (API calls).
// Matlab: React 👉 Backend 👉 Database, axios is bridge 
// One-line memory, axios = frontend ka messenger

// axios:-
// Used for API calls
// Better than fetch
// Supports interceptors
// Handles file uploads
// Auto JSON parsing



// What is react-toastify?
// react-toastify – Notifications system, A library to show beautiful toast notifications (success, error, warning, info)
// Instead of: alert("Login successful"); // ❌

// react-toastify:-
// Used for notifications
// Replaces alert()
// Success / error / warning UI
// Improves UX massively