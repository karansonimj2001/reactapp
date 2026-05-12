import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import { useEffect, useState } from "react";

import Login from "./page/Login";
import Dashboard from "./page/Dashboard";
import TeamManagement from "./page/TeamManagement";
import Analytics from "./page/Analytics";
import Settings from "./page/Settings";
import ActivityLogs from "./page/ActivityLogs";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("adminPortalUser");

    if (savedUser) {
      const userObject = JSON.parse(savedUser);

      setUser(userObject);
    }
  }, []);

  function handleLogin(userData) {
    localStorage.setItem("adminPortalUser", JSON.stringify(userData));

    setUser(userData);
  }


  // LOGIN PAGE
  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  // ROUTES
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard user={user} />} />

      <Route path="/team-management" element={<TeamManagement />} />

      <Route path="/analytics" element={<Analytics />} />

      <Route path="/settings" element={<Settings />} />

      <Route path="/activity-logs" element={<ActivityLogs />} />
    </Routes>
  );
}

export default App;
