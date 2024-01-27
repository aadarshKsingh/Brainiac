import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import { Privacy } from './Pages/Privacy';
import { Landing } from './Pages/Landing';
import { About } from './Pages/About';
import {Routes,Route, BrowserRouter } from 'react-router-dom';
import { Books } from './Pages/Books';
import { Announcements } from './Pages/Announcements';
import { Schedule } from './Pages/Schedule';
import { Assignment } from './Pages/Assignment';
import { Leaderboard } from 'flywheel-leaderboard';
import { Sessions } from './Pages/Sessions';
import { Communities } from './Pages/Communities';
import { Account } from './Pages/Account';
import { LBoard } from './Pages/LBoard';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/privacy-policy' element={<Privacy/>} />
        <Route path="/login-student" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/books" element={<Books/>} />
        <Route path="/announcements" element={<Announcements/>} />
        <Route path="/schedule" element={<Schedule/>} />
        <Route path="/assignments" element={<Assignment/>} />
        <Route path="/lboard" element={<LBoard/>} />
        <Route path="/rsessions" element={<Sessions/>} />
        <Route path="/communities" element={<Communities/>} />
        <Route path="/account" element={<Account/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
