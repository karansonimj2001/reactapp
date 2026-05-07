import { useState } from "react";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TvIcon from "@mui/icons-material/Tv";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";
import SupportOutlinedIcon from "@mui/icons-material/SupportOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

const navItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <DashboardCustomizeOutlinedIcon />,
    active: true,
  },
  {
    id: "Teammanagement",
    label: "Team Management",
    icon: <PermIdentityOutlinedIcon />,
    active: true,
  },
  {
    id: "analytics",
    label: "System Analytics",
    icon: <AnalyticsOutlinedIcon />,
    active: false,
  },
  {
    id: "settings",
    label: "Settings",
    icon: <SettingsOutlinedIcon />,
    active: false,
  },
  {
    id: "activity",
    label: "Activity Logs",
    icon: <ReceiptLongOutlinedIcon />,
    active: false,
  },
];

function Dashboard({ user, onLogout }) {
  return (
    <div className="admin-shell">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div>
            <p className="brand-title">AdminPortal</p>
            <p className="brand-subtitle">Enterprise v2.1</p>
          </div>

          <nav className="sidebar-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`nav-item ${item.id === "dashboard" ? "active" : ""} ${item.active ? "" : "disabled"}`}
                disabled={!item.active}
              >
                <span className="nav-icon">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="sidebar-footer">
          <button type="button" className="support-ticket">
            <SupportOutlinedIcon /> Support Ticket
          </button>
          <p className="sidebar-help ">
            <HelpOutlineOutlinedIcon /> Help Center
          </p>
          <button type="button" className="logout-button" onClick={onLogout}>
            <LogoutOutlinedIcon /> Logout
          </button>
        </div>
      </aside>

      <main className="admin-main">
        <div className="top-bar">
          <div className="top-search">
            <div className="search-box">
              <SearchOutlinedIcon />
              <input placeholder="Search resources..." />
            </div>
            <div className="page-title">Admin Dashboard</div>
          </div>

          <div className="top-actions">
            <button type="button" className="icon-button">
              <NotificationsNoneOutlinedIcon />
            </button>
            <button type="button" className="icon-button">
              <DarkModeOutlinedIcon />
            </button>
            <div className="profile-card">
              <div className="profile-avatar">AR</div>
              <div>
                <p className="profile-name">Alex Rivera</p>
                <p className="profile-role">SUPER ADMIN</p>
              </div>
            </div>
          </div>
        </div>

        <div className="welcome-row">
          <div>
            <h1>Welcome back, Admin!</h1>
            <p className="section-copy">
              Here is what's happening with your system today.
            </p>
          </div>
        </div>

        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-card-top">
              <div className="stat-icon">
                <PermIdentityOutlinedIcon />
              </div>
              <span className="stat-tag">
                <TrendingUpIcon fontSize="small" /> 12%
              </span>
            </div>
            <p className="stat-note">TOTAL USERS</p>
            <p className="stat-value">24,512</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "75%" }} />
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-card-top">
              <div className="stat-icon">
                <TvIcon />
              </div>
              <span className="stat-tag">System Status : Active </span>
            </div>
            <div className="stat-status">SERVER UPTIME</div>
            <p className="stat-value">99.98%</p>
            <div className="uptime-grid">
              <span className="uptime-box" />
              <span className="uptime-box" />
              <span className="uptime-box " />
              <span className="uptime-box " />
              <span className="uptime-box " />
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-card-top">
              <div className="stat-icon">
                <CloudQueueOutlinedIcon />
              </div>
              <span className="stat-tag">CRITICAL</span>
            </div>
            <p className="stat-note">CLOUD STORAGE</p>
            <p className="stat-value">1.2 TB</p>
            <p className="stat-note">85% of total capacity used</p>
          </div>
        </div>

        <div className="dashboard-grid">
          <section className="activity-card">
            <div className="card-header">
              <h2>Recent Activity Log</h2>
              <button type="button" className="view-all">
                View All
              </button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Action</th>
                  <th>Timestamp</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>Updated system firewall config</td>
                  <td>12:45 PM</td>
                  <td>
                    <span className="status-badge status-success">SUCCESS</span>
                  </td>
                </tr>
                <tr>
                  <td>Sarah Miller</td>
                  <td>Created new API endpoint</td>
                  <td>11:30 AM</td>
                  <td>
                    <span className="status-badge status-success">SUCCESS</span>
                  </td>
                </tr>
                <tr>
                  <td>Robert King</td>
                  <td>Database backup failed</td>
                  <td>09:15 AM</td>
                  <td>
                    <span className="status-badge status-failed">FAILED</span>
                  </td>
                </tr>
                <tr>
                  <td>Anna Lee</td>
                  <td>User role modification</td>
                  <td>08:00 AM</td>
                  <td>
                    <span className="status-badge status-success">SUCCESS</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <div className="analytics-right">
            <section className="analytics-card">
              <div className="card-header">
                <h2>Analytics Overview</h2>
              </div>
              <div className="analytics-graph">
                <div className="bar small" />
                <div className="bar medium" />
                <div className="bar tall active" />
                <div className="bar medium" />
                <div className="bar small" />
              </div>
              <div className="analytics-footer">
                <div>
                  <p className="analytic-label">Active Sessions</p>
                  <p className="analytic-number" style={{ color: "#1a237e" }}>
                    1,284
                  </p>
                </div>
                <div>
                  <p className="analytic-label">Conversion</p>
                  <p className="analytic-number" style={{ color: "#00650d" }}>
                    3.4%
                  </p>
                </div>
              </div>
            </section>
            <section className="upgrade-card">
              <div>
                <h2>Upgrade Insight</h2>
                <p>
                  Systems are running optimally, but storage scaling is
                  recommended by next quarter.
                </p>
              </div>
              <button type="button" className="upgrade-button">
                Review Infrastructure
              </button>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
