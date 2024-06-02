import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import AllCourses from './pages/AllCourses';
import FullStackDevelopment from './pages/FullStackDevelopment';
import DataScience from './pages/DataScience';
import CyberSecurity from './pages/CyberSecurity';
import Career from './pages/Career';
import './App.css';

function App() {
  return (
   <div className='container'>
       <div className="App">
      <nav className="navigation">
         <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>All</NavLink>
        <NavLink to="/full-stack-development" className={({ isActive }) => (isActive ? 'active' : '')}>Full Stack Development</NavLink>
        <NavLink to="/data-science" className={({ isActive }) => (isActive ? 'active' : '')}>Data Science</NavLink>
        <NavLink to="/cyber-security" className={({ isActive }) => (isActive ? 'active' : '')}>Cyber Security</NavLink>
        <NavLink to="/career" className={({ isActive }) => (isActive ? 'active' : '')}>Career</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<AllCourses />} />
        <Route path="/full-stack-development" element={<FullStackDevelopment />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/cyber-security" element={<CyberSecurity />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </div>
   </div>
  );
}

export default App;
