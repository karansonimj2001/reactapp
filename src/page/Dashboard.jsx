import React from 'react'

function Dashboard({ user, onLogout }) {
  const userName = (user.email || 'Admin').split('@')[0]

  return (
    <div className="dashboard-shell">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-mark">AP</div>
          <div>
            <p className="brand-title">AdminPortal</p>
            <p className="brand-subtitle">Enterprise v2.1</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          <button className="nav-link active">Dashboard</button>
          <button className="nav-link">Team Management</button>
          <button className="nav-link">System Analytics</button>
          <button className="nav-link">Settings</button>
          <button className="nav-link">Activity Logs</button>
        </nav>

        <button className="sidebar-cta">Support Ticket</button>

        <div className="sidebar-footer">
          <button className="logout-button" onClick={onLogout}>
            Logout
          </button>
          <p className="sidebar-help">Help Center</p>
        </div>
      </aside>

      <main className="dashboard-main">
        <div className="top-bar">
          <div className="top-left">
            <div className="search-box">
              <span>🔎</span>
              <input placeholder="Search resources..." />
            </div>
            <div className="page-badge">Admin Dashboard</div>
          </div>
          <div className="profile-card">
            <div className="profile-avatar">AR</div>
            <div>
              <p className="profile-name">Alex Rivera</p>
              <p className="profile-role">SUPER ADMIN</p>
            </div>
          </div>
        </div>

        <div className="welcome-row">
          <div>
            <h1>Welcome back, {userName}!</h1>
            <p className="section-copy">Here is what's happening with your system today.</p>
          </div>
        </div>

        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-card-top">
              <div className="stat-icon">👤</div>
              <span className="stat-tag">TOTAL USERS</span>
            </div>
            <p className="stat-value">24,512</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '75%' }} />
            </div>
            <p className="stat-note">+12% from last month</p>
          </div>

          <div className="stat-card">
            <div className="stat-card-top">
              <div className="stat-icon">🖥️</div>
              <span className="stat-tag">SERVER UPTIME</span>
            </div>
            <p className="stat-value">99.98%</p>
            <div className="stat-status">System Status: Active</div>
            <div className="uptime-grid">
              <span className="uptime-box" />
              <span className="uptime-box" />
              <span className="uptime-box active" />
              <span className="uptime-box active" />
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-card-top">
              <div className="stat-icon">☁️</div>
              <span className="stat-tag">CLOUD STORAGE</span>
            </div>
            <p className="stat-value">1.2 TB</p>
            <p className="stat-note">85% of total capacity used</p>
            <div className="status-badge status-critical">Critical</div>
          </div>
        </div>

        <div className="dashboard-grid">
          <section className="activity-card">
            <div className="card-header">
              <h2>Recent Activity Log</h2>
              <button className="view-all">View All</button>
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
                  <td><span className="status-badge status-success">SUCCESS</span></td>
                </tr>
                <tr>
                  <td>Sarah Miller</td>
                  <td>Created new API endpoint</td>
                  <td>11:30 AM</td>
                  <td><span className="status-badge status-success">SUCCESS</span></td>
                </tr>
                <tr>
                  <td>Robert King</td>
                  <td>Database backup failed</td>
                  <td>09:15 AM</td>
                  <td><span className="status-badge status-failed">FAILED</span></td>
                </tr>
                <tr>
                  <td>Anna Lee</td>
                  <td>User role modification</td>
                  <td>08:00 AM</td>
                  <td><span className="status-badge status-success">SUCCESS</span></td>
                </tr>
              </tbody>
            </table>
          </section>

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
                <p className="analytic-number">1,284</p>
                <p className="analytic-label">Active Sessions</p>
              </div>
              <div>
                <p className="analytic-number">3.4%</p>
                <p className="analytic-label">Conversion</p>
              </div>
            </div>
          </section>
        </div>

        <section className="upgrade-card">
          <div>
            <h2>Upgrade Insight</h2>
            <p>Systems are running optimally, but storage scaling is recommended by next quarter.</p>
          </div>
          <button className="upgrade-button">Review Infrastructure</button>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
