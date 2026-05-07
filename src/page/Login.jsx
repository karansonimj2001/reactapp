import { useState } from 'react'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import EmailIcon from '@mui/icons-material/Email'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'

function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (email === '' || password === '') {
      return
    }

    const userData = {
      email,
      password,
      role: 'SUPER ADMIN',
      remember,
      savedAt: new Date().toISOString(),
    }

    localStorage.setItem('adminPortalUser', JSON.stringify(userData))
    onLogin(userData)
  }

  function handleTogglePassword() {
    setShowPassword(!showPassword)
  }

  return (
    <div className="login-shell-main">
      <div className="login-shell">
        <header className="login-brand">
          <div className="logo-box">
            <div className="brand-mark">
              <AdminPanelSettingsIcon />
            </div>
          </div>
          <div>
            <p className="brand-title">AdminPortal</p>
            <p className="brand-subtitle">Enterprise v2.1</p>
          </div>
        </header>

        <div className="login-card">
          <div className="login-panel">
            <h1 className="section-label">Secure Login</h1>
            <p className="section-copy">Enter your credentials to access the admin portal.</p>

            <form className="login-form" onSubmit={handleSubmit}>
              <label className="field-label">
                <span>Email Address</span>
                <div className="input-group">
                  <span className="input-icon">
                    <EmailIcon />
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@enterprise.com"
                  />
                </div>
              </label>

              <label className="field-label">
                <span className="label-row">
                  <span>Password</span>
                  <a href="#" className="forgot-link">Forgot password?</a>
                </span>
                <div className="input-group">
                  <span className="input-icon">
                    <LockOpenIcon />
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                  />
                  <button type="button" className="visibility-toggle" onClick={handleTogglePassword}>
                    {showPassword ? '🙈' : '👁'}
                  </button>
                </div>
              </label>

              <div className="form-footer">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  <span>Remember this device for 30 days</span>
                </label>
              </div>

              <button type="submit" className="submit-button">
                Login →
              </button>
            </form>

            <div className="security-note">
              <p>Protected by multi-layer hardware security.</p>
              <div className="security-icons">
                <span className="security-badge">
                  <img className="img1" src="src/assets/icon1.png" alt="" />
                </span>
                <span className="security-badge">
                  <img className="img1" src="src/assets/icon2.png" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <footer className="login-footer">
          <p>Having trouble logging in? <a href="#">Contact System Support</a></p>
        </footer>

        <div className="login-meta">
          <p>© 2024 ADMINPORTAL GLOBAL</p>
          <div className="meta-links">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">System Status</a>
            <span>•</span>
            <span>v2.1.0-release</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
