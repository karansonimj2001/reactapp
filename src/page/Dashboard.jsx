import { useState, useEffect } from "react";
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
  const data = [
    {
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Rahul Sharma",
      display_name: "rahul_dev",
      email: "rahul@example.com",
      phone: "+91 9876543210",
      entity: "Developer",
      rating: 4.5,
      created_at: "2026-05-01",
      updated_at: "2026-05-08",
    },
    {
      photo: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Priya Verma",
      display_name: "priya_ui",
      email: "priya@example.com",
      phone: "+91 9876543211",
      entity: "Designer",
      rating: 4.8,
      created_at: "2026-05-02",
      updated_at: "2026-05-08",
    },
    {
      photo: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Amit Kumar",
      display_name: "amit_react",
      email: "amit@example.com",
      phone: "+91 9876543212",
      entity: "Frontend",
      rating: 4.2,
      created_at: "2026-05-03",
      updated_at: "2026-05-08",
    },
    {
      photo: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Sneha Patel",
      display_name: "sneha_app",
      email: "sneha@example.com",
      phone: "+91 9876543213",
      entity: "Mobile App",
      rating: 4.9,
      created_at: "2026-05-04",
      updated_at: "2026-05-08",
    },
    {
      photo: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "Vikas Singh",
      display_name: "vikas_node",
      email: "vikas@example.com",
      phone: "+91 9876543214",
      entity: "Backend",
      rating: 4.1,
      created_at: "2026-05-05",
      updated_at: "2026-05-08",
    },
    {
      photo: "https://randomuser.me/api/portraits/women/6.jpg",
      name: "Neha Gupta",
      display_name: "neha_admin",
      email: "neha@example.com",
      phone: "+91 9876543215",
      entity: "Admin",
      rating: 4.7,
      created_at: "2026-05-06",
      updated_at: "2026-05-08",
    },
    {
      photo: "https://randomuser.me/api/portraits/men/7.jpg",
      name: "Karan Mehta",
      display_name: "karan_js",
      email: "karan@example.com",
      phone: "+91 9876543216",
      entity: "React JS",
      rating: 4.3,
      created_at: "2026-05-07",
      updated_at: "2026-05-08",
    },
    {
      photo: "https://randomuser.me/api/portraits/women/8.jpg",
      name: "Pooja Arora",
      display_name: "pooja_native",
      email: "pooja@example.com",
      phone: "+91 9876543217",
      entity: "React Native",
      rating: 4.6,
      created_at: "2026-05-08",
      updated_at: "2026-05-08",
    },
    {
      photo: "https://randomuser.me/api/portraits/men/9.jpg",
      name: "Arjun Das",
      display_name: "arjun_fullstack",
      email: "arjun@example.com",
      phone: "+91 9876543218",
      entity: "Full Stack",
      rating: 4.4,
      created_at: "2026-05-08",
      updated_at: "2026-05-08",
    },
    {
      photo: "https://randomuser.me/api/portraits/women/10.jpg",
      name: "Anjali Roy",
      display_name: "anjali_dev",
      email: "anjali@example.com",
      phone: "+91 9876543219",
      entity: "Software Engineer",
      rating: 5.0,
      created_at: "2026-05-08",
      updated_at: "2026-05-08",
    },
  ];

  const columns = [
    { label: "S.No", key: "index" },
    { label: "Photo", key: "photo" },
    { label: "Name", key: "name" },
    { label: "Display Name", key: "display_name" },
    { label: "Email", key: "email" },
    { label: "Phone", key: "phone" },
    { label: "Entity", key: "entity" },
    // { label: "Balance", key: "balance" },
    { label: "Rating", key: "rating" },
    { label: "Created At", key: "created_at" },
    { label: "Updated At", key: "updated_at" },
  ];

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const activityHeaders = ["User", "Action", "Timestamp", "Status"];

  const totalPages = Math.ceil(users.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = users.slice(startIndex, startIndex + itemsPerPage);

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
            <div className="table-scroll">
              <table className="activity-log-table">
                <thead>
                  <tr>
                    {columns.map((col) => (
                      <th
                        key={col.key}
                        className={`activity-th ${col.key === "photo" ? "activity-th--photo" : "activity-th--cell"}`}
                      >
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      {columns.map((col) => (
                        <td
                          key={col.key}
                          className={`activity-td ${col.key === "photo" ? "activity-td--photo" : "activity-td--cell"}`}
                        >
                          {col.key === "index"
                            ? index + 1
                            : col.key === "photo"
                              ? <img src={item[col.key]} alt={item.name} className="activity-avatar" />
                              : item[col.key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
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
                  <p className="analytic-number analytic-number--primary">
                    1,284
                  </p>
                </div>
                <div>
                  <p className="analytic-label">Conversion</p>
                  <p className="analytic-number analytic-number--success">
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
