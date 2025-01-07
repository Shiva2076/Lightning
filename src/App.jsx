import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Logout from './components/Logout';

function App() {


  return (
    <>
            <Router>
        <Routes>
          <Route path="/logout" element={<Logout />} />
          
          <Route
            path="/*"
            element={
              <div className="layout">
                <Sidebar />
                <div className="main-content">
                  <Header />
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                  </Routes>
                </div>
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
