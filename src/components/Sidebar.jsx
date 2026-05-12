import {
  PermIdentityOutlined,
  DashboardCustomizeOutlined,
  AnalyticsOutlined,
  SettingsOutlined,
  ReceiptLongOutlined,
  SupportOutlined,
  LogoutOutlined,
  HelpOutlineOutlined,
} from "@mui/icons-material";

import {
  useNavigate,
  useLocation,
} from "react-router-dom";

const navItems = [
  {
    id: "/dashboard",
    label: "Dashboard",
    icon: <DashboardCustomizeOutlined />,
  },
  {
    id: "/team-management",
    label: "Team Management",
    icon: <PermIdentityOutlined />,
  },
  {
    id: "/analytics",
    label: "Analytics",
    icon: <AnalyticsOutlined />,
  },
  {
    id: "/settings",
    label: "Settings",
    icon: <SettingsOutlined />,
  },
  {
    id: "/activity-logs",
    label: "Activity Logs",
    icon: <ReceiptLongOutlined />,
  },
];

function Sidebar({ onLogout }) {

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="sidebar">

      <div className="sidebar-brand">

        <div>
          <p className="brand-title">
            AdminPortal
          </p>

          <p className="brand-subtitle">
            Enterprise v2.1
          </p>
        </div>

        <nav className="sidebar-nav">

          {navItems.map((item) => {

            const isActive =
              location.pathname === item.id;

            return (
              <button
                key={item.id}
                className={`nav-item ${
                  isActive ? "active" : ""
                }`}
                onClick={() => navigate(item.id)}
              >

                <span className="nav-icon">
                  {item.icon}
                </span>

                {item.label}

              </button>
            );
          })}

        </nav>
      </div>

      <div className="sidebar-footer">

        <button className="support-ticket">
          <SupportOutlined />
          Support Ticket
        </button>

        <p className="sidebar-help">
          <HelpOutlineOutlined />
          Help Center
        </p>

        <button
          className="logout-button"
          onClick={onLogout}
        >
          <LogoutOutlined />
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;