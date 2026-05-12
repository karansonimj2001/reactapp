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

    const savedUser =
      localStorage.getItem("adminPortalUser");

    if (savedUser) {

      const userObject =
        JSON.parse(savedUser);

      setUser(userObject);
    }

  }, []);

  function handleLogin(userData) {

    localStorage.setItem(
      "adminPortalUser",
      JSON.stringify(userData)
    );

    setUser(userData);
  }

  function handleLogout() {

    localStorage.removeItem(
      "adminPortalUser"
    );

    setUser(null);
  }

  // LOGIN PAGE
  if (!user) {
    return (
      <Login onLogin={handleLogin} />
    );
  }

  // ROUTES
  return (

    <Routes>

      <Route
        path="/"
        element={
          <Navigate to="/dashboard" />
        }
      />

      <Route
        path="/dashboard"
        element={
          <Dashboard
            user={user}
            onLogout={handleLogout}
          />
        }
      />

      <Route
        path="/team-management"
        element={
          <TeamManagement
            onLogout={handleLogout}
          />
        }
      />

      <Route
        path="/analytics"
        element={
          <Analytics
            onLogout={handleLogout}
          />
        }
      />

      <Route
        path="/settings"
        element={
          <Settings
            onLogout={handleLogout}
          />
        }
      />

      <Route
        path="/activity-logs"
        element={
          <ActivityLogs
            onLogout={handleLogout}
          />
        }
      />

    </Routes>
  );
}

export default App;