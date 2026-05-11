import { useEffect, useMemo, useState } from "react";
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
import axios from "axios";

const navItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <DashboardCustomizeOutlinedIcon />,
  },
  {
    id: "Teammanagement",
    label: "Team Management",
    icon: <PermIdentityOutlinedIcon />,
  },
  {
    id: "analytics",
    label: "System Analytics",
    icon: <AnalyticsOutlinedIcon />,
  },
  {
    id: "settings",
    label: "Settings",
    icon: <SettingsOutlinedIcon />,
  },
  {
    id: "activity",
    label: "Activity Logs",
    icon: <ReceiptLongOutlinedIcon />,
  },
];

function getInitials(name) {
  const parts = String(name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const first = parts[0]?.[0] || "";
  const second = parts[1]?.[0] || parts[0]?.[1] || "";
  return (first + second).toUpperCase();
}

function Dashboard({ user, onLogout }) {
  const [selectedNav, setSelectedNav] = useState("dashboard");

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
      } catch (error) {

        console.error("Error fetching users:", error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedNav]);

  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(users.length / itemsPerPage));
  }, [users.length]);

  const paginatedUsers = useMemo(() => {
    const safePage = Math.min(Math.max(1, currentPage), totalPages);
    const startIndex = (safePage - 1) * itemsPerPage;
    return users.slice(startIndex, startIndex + itemsPerPage);
  }, [users, currentPage, totalPages]);

  const columns = useMemo(
    () => [
      { label: "S.No", key: "index" },
      { label: "Photo", key: "photo" },
      { label: "Name", key: "name" },
      { label: "Username", key: "username" },
      { label: "Email", key: "email" },
      { label: "Company", key: "company" },
      { label: "Website", key: "website" },
    ],
    []
  );

  const pageTitle = useMemo(() => {
    const item = navItems.find((x) => x.id === selectedNav);
    return item?.label || "Dashboard";
  }, [selectedNav]);

  function goPrev() {
    setCurrentPage((p) => Math.max(1, p - 1));
  }

  function goNext() {
    setCurrentPage((p) => Math.min(totalPages, p + 1));
  }

  return (
    <div className="admin-shell">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div>
            <p className="brand-title">AdminPortal</p>
            <p className="brand-subtitle">Enterprise v2.1</p>
          </div>

          <nav className="sidebar-nav" aria-label="Sidebar navigation">
            {navItems.map((item) => {
              const isActive = item.id === selectedNav;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`nav-item ${isActive ? "active" : ""}`}
                  onClick={() => setSelectedNav(item.id)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="sidebar-footer">
          <button type="button" className="support-ticket">
            <SupportOutlinedIcon /> Support Ticket
          </button>

          <p className="sidebar-help">
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
            <div className="page-title">{pageTitle}</div>
          </div>

          <div className="top-actions">
            <button type="button" className="icon-button" aria-label="Notifications">
              <NotificationsNoneOutlinedIcon />
            </button>
            <button type="button" className="icon-button" aria-label="Dark mode">
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
            <p className="section-copy">Here is what's happening with your system today.</p>
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
            <p className="stat-value">{users.length || 0}</p>
            <div className="progress-bar">
              <div className="progress-fill progress-fill--75" />
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
              <span className="uptime-box" />
              <span className="uptime-box" />
              <span className="uptime-box" />
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
              <h2>
                {selectedNav === "dashboard"
                  ? "Recent Activity Log"
                  : selectedNav === "Teammanagement"
                    ? "Team Users"
                    : selectedNav === "activity"
                      ? "Activity Logs"
                      : "System Table"}
              </h2>

              <button type="button" className="view-all">
                View All
              </button>
            </div>

            <div className="table-scroll">
              <table className="activity-log-table">
                <thead>
                  <tr>
                    {columns.map((col) => (
                      <th
                        key={col.key}
                        className={`activity-th ${
                          col.key === "photo" ? "activity-th--photo" : "activity-th--cell"
                        }`}
                      >
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={columns.length} style={{ padding: 18, color: "#7b7894" }}>
                        Loading...
                      </td>
                    </tr>
                  ) : paginatedUsers.length === 0 ? (
                    <tr>
                      <td colSpan={columns.length} style={{ padding: 18, color: "#7b7894" }}>
                        No data found.
                      </td>
                    </tr>
                  ) : (
                    paginatedUsers.map((item, idx) => {
                      const rowIndex = (currentPage - 1) * itemsPerPage + idx + 1;

                      return (
                        <tr key={item.id}>
                          {columns.map((col) => {
                            const tdClass =
                              col.key === "photo" ? "activity-td--photo" : "activity-td--cell";

                            let value = item[col.key];
                            if (col.key === "company") value = item.company?.name || "-";
                            if (col.key === "photo") value = getInitials(item.name);

                            return (
                              <td key={col.key} className={`activity-td ${tdClass}`}>
                                {col.key === "index" ? (
                                  rowIndex
                                ) : col.key === "photo" ? (
                                  <div className="activity-avatar">{value}</div>
                                ) : (
                                  value
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            <div className="pagination-bar" role="navigation" aria-label="Pagination">
              <button
                type="button"
                className="pagination-btn"
                onClick={goPrev}
                disabled={currentPage === 1}
              >
                Prev
              </button>

              <span className="pagination-info">
                Page <b>{Math.min(currentPage, totalPages)}</b> of <b>{totalPages}</b>
              </span>

              <button
                type="button"
                className="pagination-btn"
                onClick={goNext}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
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
                  <p className="analytic-number analytic-number--primary">1,284</p>
                </div>
                <div>
                  <p className="analytic-label">Conversion</p>
                  <p className="analytic-number analytic-number--success">3.4%</p>
                </div>
              </div>
            </section>

            <section className="upgrade-card">
              <div>
                <h2>Upgrade Insight</h2>
                <p>Systems are running optimally, but storage scaling is recommended by next quarter.</p>
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
