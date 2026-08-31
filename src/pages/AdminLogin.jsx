import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FiShield,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
  FiAlertCircle,
  FiCheckCircle,
} from "react-icons/fi";
import { adminLogin } from "../lib/api";
import "./AdminLogin.css";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // If already logged in, redirect to dashboard
  useEffect(() => {
    const token = localStorage.getItem("genzes_admin_token");
    if (token) {
      navigate("/admin/dashboard");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      setLoading(true);
      const res = await adminLogin(email.trim(), password);

      if (res.success && res.token) {
        localStorage.setItem("genzes_admin_token", res.token);
        localStorage.setItem(
          "genzes_admin_user",
          JSON.stringify(res.admin || {})
        );
        setSuccess(true);

        setTimeout(() => {
          navigate("/admin/dashboard");
        }, 600);
      } else {
        setError(res.message || "Invalid credentials.");
      }
    } catch (err) {
      setError(
        err.message || "Failed to login. Please check server and credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleQuickFill = () => {
    setEmail("Genzescom@gmail.com");
    setPassword("Genzes@1234@#");
    setError("");
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-backdrop">
        <div className="login-orb login-orb--1" />
        <div className="login-orb login-orb--2" />
      </div>

      <div className="admin-login-card">

        {/* LOGO & BADGE */}
        <div className="admin-login-header">
          <Link to="/" className="login-logo-link" title="Back to Home">
            <img src="/logo.png" alt="GENZES" className="admin-login-logo" />
          </Link>

          <div className="admin-portal-badge">
            <FiShield />
            <span>SECURE ADMIN PORTAL</span>
          </div>

          <h1>Administrator Sign In</h1>
          <p>Enter your authorized credentials to access the GenZes control panel.</p>
        </div>

        {/* ERROR MESSAGE */}
        {error && (
          <div className="login-alert login-alert--error">
            <FiAlertCircle />
            <span>{error}</span>
          </div>
        )}

        {/* SUCCESS MESSAGE */}
        {success && (
          <div className="login-alert login-alert--success">
            <FiCheckCircle />
            <span>Authentication successful! Redirecting...</span>
          </div>
        )}

        {/* LOGIN FORM */}
        <form onSubmit={handleLogin} className="admin-login-form">

          {/* EMAIL INPUT */}
          <div className="login-form-group">
            <label htmlFor="admin-email">Admin Email</label>
            <div className="login-input-wrapper">
              <FiMail className="login-input-icon" />
              <input
                type="email"
                id="admin-email"
                placeholder="Genzescom@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>
          </div>

          {/* PASSWORD INPUT */}
          <div className="login-form-group">
            <label htmlFor="admin-password">Password</label>
            <div className="login-input-wrapper">
              <FiLock className="login-input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                id="admin-password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
                title={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* QUICK FILL / HINT HELPER */}
          <div className="login-hint-row">
            <span>Default Admin:</span>
            <button
              type="button"
              onClick={handleQuickFill}
              className="quick-fill-btn"
            >
              Fill Credentials
            </button>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="admin-login-btn"
          >
            {loading ? (
              <>
                <span className="login-spinner" />
                <span>Verifying...</span>
              </>
            ) : (
              <>
                <span>Access Dashboard</span>
                <FiArrowRight />
              </>
            )}
          </button>

        </form>

        <div className="admin-login-footer">
          <Link to="/">← Return to Public Website</Link>
        </div>

      </div>
    </div>
  );
}
