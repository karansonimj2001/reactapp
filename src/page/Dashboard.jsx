import { useNavigate, useLocation } from "react-router-dom";
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
import AdminLayout from "../Layouts/AdminLayouts";
// import axios from "axios";
// import { useNavigate, useLocation } from "react-router-dom";
const navItems = [
  {
    id: "/dashboard",
    label: "Dashboard",
  },
  {
    id: "/team-management",
    label: "Team Management",
  },
  {
    id: "/analytics",
    label: "System Analytics",
  },
  {
    id: "/settings",
    label: "Settings",
  },
  {
    id: "/activity-logs",
    label: "Activity Logs",
  },
];
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
// const [itemsPerPage, setItemsPerPage] = useState(10);
function getInitials(name) {
  const parts = String(name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const first = parts[0]?.[0] || "";
  const second = parts[1]?.[0] || parts[0]?.[1] || "";
  return (first + second).toUpperCase();
}

function Dashboard({ user }) {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedNav = location.pathname;
  const [users] = useState(data);

  const [loading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://jsonplaceholder.typicode.com/users",
  //       );
  //       setUsers(response.data);
  //     } catch (error) {
  //       console.error("Error fetching users:", error);
  //       setUsers([]);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchUsers();
  // }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedNav, itemsPerPage]);

  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(users.length / itemsPerPage));
  }, [users.length, itemsPerPage]);

  const paginatedUsers = useMemo(() => {
    const safePage = Math.min(Math.max(1, currentPage), totalPages);
    const startIndex = (safePage - 1) * itemsPerPage;
    return users.slice(startIndex, startIndex + itemsPerPage);
  }, [users, currentPage, itemsPerPage, totalPages]);

  const columns = useMemo(
    () => [
      { label: "S.No", key: "index" },
      { label: "Photo", key: "photo" },
      { label: "Name", key: "name" },
      { label: "Display Name", key: "display_name" },
      { label: "Email", key: "email" },
      { label: "Phone", key: "phone" },
      { label: "Entity", key: "entity" },
      { label: "Rating", key: "rating" },
    ],
    [],
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
    <AdminLayout>
      <main className="admin-mai">
        <div className="top-bar">
          <div className="top-search">
            <div className="search-box">
              <SearchOutlinedIcon />
              <input placeholder="Search resources..." />
            </div>
            <div className="page-title">{pageTitle}</div>
          </div>

          <div className="top-actions">
            <button
              type="button"
              className="icon-button"
              aria-label="Notifications"
            >
              <NotificationsNoneOutlinedIcon />
            </button>
            <button
              type="button"
              className="icon-button"
              aria-label="Dark mode"
            >
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
                {selectedNav === "/dashboard"
                  ? "Recent Activity Log"
                  : selectedNav === "/team-management"
                    ? "Team Users"
                    : selectedNav === "/activity-logs"
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
                          col.key === "photo"
                            ? "activity-th--photo"
                            : "activity-th--cell"
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
                      <td
                        colSpan={columns.length}
                        style={{ padding: 18, color: "#7b7894" }}
                      >
                        Loading...
                      </td>
                    </tr>
                  ) : paginatedUsers.length === 0 ? (
                    <tr>
                      <td
                        colSpan={columns.length}
                        style={{ padding: 18, color: "#7b7894" }}
                      >
                        No data found.
                      </td>
                    </tr>
                  ) : (
                    paginatedUsers.map((item, idx) => {
                      const rowIndex =
                        (currentPage - 1) * itemsPerPage + idx + 1;

                      return (
                        <tr key={item.id}>
                          {columns.map((col) => {
                            const tdClass =
                              col.key === "photo"
                                ? "activity-td--photo"
                                : "activity-td--cell";

                            let value = item[col.key];
                            if (col.key === "photo") value = item.photo;

                            return (
                              <td
                                key={col.key}
                                className={`activity-td ${tdClass}`}
                              >
                                {col.key === "index" ? (
                                  rowIndex
                                ) : col.key === "photo" ? (
                                  <img
                                    src={value}
                                    alt={item.name}
                                    className="activity-avatar"
                                  />
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

            <div className="pagination-bar">
              {/* Left Side - Rows per page */}
              <div className="pagination-left">
                <span style={{ fontSize: "14px", color: "#6b7280" }}>
                  Rows per page:
                </span>
                <select
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  className="rows-per-page-select"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </div>

              {/* Center - Prev, Page, Next */}
              <div className="pagination-center">
                <button
                  type="button"
                  className="pagination-btn"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>

                <span className="pagination-info">
                  Page <b>{currentPage}</b> of <b>{totalPages}</b>
                </span>

                <button
                  type="button"
                  className="pagination-btn"
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>

              {/* Right Side - Showing X to Y of Z */}
              <div
                className="pagination-right"
                style={{ fontSize: "14px", color: "#6b7280" }}
              >
                Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                {Math.min(currentPage * itemsPerPage, users.length)} of{" "}
                {users.length}
              </div>
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
    </AdminLayout>
  );
}

export default Dashboard;
