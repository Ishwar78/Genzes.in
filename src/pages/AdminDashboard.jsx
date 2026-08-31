import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FiGrid,
  FiHeadphones,
  FiLogOut,
  FiExternalLink,
  FiSearch,
  FiFilter,
  FiRefreshCw,
  FiTrash2,
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
  FiMail,
  FiPhone,
  FiUser,
  FiAtSign,
  FiImage,
  FiX,
  FiMaximize2,
  FiChevronDown,
  FiMessageSquare,
  FiShield,
  FiLayers,
} from "react-icons/fi";
import {
  getAdminStats,
  getSupportTickets,
  updateTicketStatus,
  deleteTicket,
  getImageUrl,
} from "../lib/api";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const navigate = useNavigate();

  // Active tab: 'overview' | 'support'
  const [activeTab, setActiveTab] = useState("support");
  const [token, setToken] = useState("");
  const [adminUser, setAdminUser] = useState(null);

  // Stats state
  const [stats, setStats] = useState({
    total: 0,
    newTickets: 0,
    inProgress: 0,
    resolved: 0,
  });

  // Support list state
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Modal / Preview state
  const [previewImage, setPreviewImage] = useState(null);
  const [expandedMessage, setExpandedMessage] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [actionSuccess, setActionSuccess] = useState("");

  // Check auth
  useEffect(() => {
    const savedToken = localStorage.getItem("genzes_admin_token");
    if (!savedToken) {
      navigate("/admin/gengeslogin");
      return;
    }
    setToken(savedToken);

    try {
      const savedUser = JSON.parse(
        localStorage.getItem("genzes_admin_user") || "{}"
      );
      setAdminUser(savedUser);
    } catch (e) {
      console.error(e);
    }
  }, [navigate]);

  // Fetch stats & tickets
  const fetchData = useCallback(async () => {
    if (!token) return;
    try {
      setLoading(true);
      const [statsRes, ticketsRes] = await Promise.all([
        getAdminStats(token),
        getSupportTickets(token, {
          status: statusFilter,
          search: searchTerm,
        }),
      ]);

      if (statsRes.success) {
        setStats(statsRes.stats);
      }
      if (ticketsRes.success) {
        setTickets(ticketsRes.supports || []);
      }
    } catch (err) {
      console.error("Fetch data error:", err);
      if (err.message?.includes("token") || err.message?.includes("authorized")) {
        handleLogout();
      }
    } finally {
      setLoading(false);
    }
  }, [token, statusFilter, searchTerm]);

  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token, fetchData]);

  // Handle status update
  const handleStatusChange = async (ticketId, newStatus) => {
    try {
      await updateTicketStatus(token, ticketId, newStatus);
      showNotification("Ticket status updated successfully!");
      fetchData();
    } catch (err) {
      alert(err.message || "Failed to update status");
    }
  };

  // Handle delete
  const handleDelete = async (ticketId) => {
    if (!window.confirm("Are you sure you want to delete this support ticket?")) {
      return;
    }

    try {
      setDeletingId(ticketId);
      await deleteTicket(token, ticketId);
      showNotification("Ticket deleted successfully.");
      fetchData();
    } catch (err) {
      alert(err.message || "Failed to delete ticket");
    } finally {
      setDeletingId(null);
    }
  };

  const showNotification = (msg) => {
    setActionSuccess(msg);
    setTimeout(() => {
      setActionSuccess("");
    }, 3500);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("genzes_admin_token");
    localStorage.removeItem("genzes_admin_user");
    navigate("/admin/gengeslogin");
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return d.toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="admin-layout">

      {/* =========================================
          LEFT SIDEBAR
      ========================================= */}
      <aside className="admin-sidebar">

        {/* BRAND & LOGO */}
        <div className="sidebar-brand">
          <img src="/logo.png" alt="GENZES" className="sidebar-logo" />
          <div className="sidebar-admin-chip">
            <FiShield />
            <span>ADMIN PANEL</span>
          </div>
        </div>

        {/* NAV ITEMS */}
        <nav className="sidebar-nav">
          <button
            type="button"
            className={`nav-item ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            <FiGrid className="nav-icon" />
            <span>Overview</span>
          </button>

          <button
            type="button"
            className={`nav-item ${activeTab === "support" ? "active" : ""}`}
            onClick={() => setActiveTab("support")}
          >
            <FiHeadphones className="nav-icon" />
            <span>Support Tickets</span>
            {stats.newTickets > 0 && (
              <span className="nav-badge">{stats.newTickets}</span>
            )}
          </button>

          <Link to="/" className="nav-item nav-item--link" target="_blank">
            <FiExternalLink className="nav-icon" />
            <span>Visit Website</span>
          </Link>
        </nav>

        {/* SIDEBAR FOOTER / ADMIN PROFILE */}
        <div className="sidebar-footer">
          <div className="admin-profile-chip">
            <div className="admin-avatar">
              <FiUser />
            </div>
            <div className="admin-info">
              <strong>{adminUser?.name || "Admin User"}</strong>
              <small>{adminUser?.email || "Genzescom@gmail.com"}</small>
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="sidebar-logout-btn"
            title="Sign Out"
          >
            <FiLogOut />
            <span>Sign Out</span>
          </button>
        </div>

      </aside>

      {/* =========================================
          MAIN CONTENT AREA
      ========================================= */}
      <main className="admin-main">

        {/* TOPBAR */}
        <header className="admin-header">
          <div>
            <h1>
              {activeTab === "overview"
                ? "Platform Overview"
                : "Support & Helpdesk Management"}
            </h1>
            <p>
              {activeTab === "overview"
                ? "Real-time insights and support metrics for GenZes."
                : "Review and respond to incoming user support inquiries and attachments."}
            </p>
          </div>

          <button
            type="button"
            onClick={fetchData}
            className="admin-refresh-btn"
            title="Refresh Data"
            disabled={loading}
          >
            <FiRefreshCw className={loading ? "spin-icon" : ""} />
            <span>Refresh</span>
          </button>
        </header>

        {/* ACTION SUCCESS BANNER */}
        {actionSuccess && (
          <div className="admin-toast-alert">
            <FiCheckCircle />
            <span>{actionSuccess}</span>
          </div>
        )}

        {/* STATS CARDS ROW */}
        <div className="admin-stats-grid">

          <div
            className={`stat-card stat-card--total ${
              statusFilter === "all" ? "stat-card--active" : ""
            }`}
            onClick={() => {
              setActiveTab("support");
              setStatusFilter("all");
            }}
          >
            <div className="stat-icon total-icon">
              <FiLayers />
            </div>
            <div className="stat-details">
              <span className="stat-count">{stats.total}</span>
              <span className="stat-label">Total Requests</span>
            </div>
          </div>

          <div
            className={`stat-card stat-card--new ${
              statusFilter === "new" ? "stat-card--active" : ""
            }`}
            onClick={() => {
              setActiveTab("support");
              setStatusFilter("new");
            }}
          >
            <div className="stat-icon new-icon">
              <FiAlertCircle />
            </div>
            <div className="stat-details">
              <span className="stat-count">{stats.newTickets}</span>
              <span className="stat-label">New / Pending</span>
            </div>
          </div>

          <div
            className={`stat-card stat-card--progress ${
              statusFilter === "in_progress" ? "stat-card--active" : ""
            }`}
            onClick={() => {
              setActiveTab("support");
              setStatusFilter("in_progress");
            }}
          >
            <div className="stat-icon progress-icon">
              <FiClock />
            </div>
            <div className="stat-details">
              <span className="stat-count">{stats.inProgress}</span>
              <span className="stat-label">In Progress</span>
            </div>
          </div>

          <div
            className={`stat-card stat-card--resolved ${
              statusFilter === "resolved" ? "stat-card--active" : ""
            }`}
            onClick={() => {
              setActiveTab("support");
              setStatusFilter("resolved");
            }}
          >
            <div className="stat-icon resolved-icon">
              <FiCheckCircle />
            </div>
            <div className="stat-details">
              <span className="stat-count">{stats.resolved}</span>
              <span className="stat-label">Resolved</span>
            </div>
          </div>

        </div>

        {/* =========================================
            OVERVIEW TAB CONTENT
        ========================================= */}
        {activeTab === "overview" && (
          <div className="overview-section">
            <div className="overview-card">
              <div className="overview-header">
                <h2>Quick Overview</h2>
                <button
                  type="button"
                  className="btn-link"
                  onClick={() => setActiveTab("support")}
                >
                  View All Tickets →
                </button>
              </div>

              <div className="overview-summary">
                <div className="summary-item">
                  <strong>Total Support Inquiries:</strong>
                  <span>{stats.total}</span>
                </div>
                <div className="summary-item">
                  <strong>Pending Response:</strong>
                  <span className="text-pink">{stats.newTickets}</span>
                </div>
                <div className="summary-item">
                  <strong>Under Review:</strong>
                  <span className="text-yellow">{stats.inProgress}</span>
                </div>
                <div className="summary-item">
                  <strong>Successfully Resolved:</strong>
                  <span className="text-green">{stats.resolved}</span>
                </div>
              </div>

              <div className="overview-actions-box">
                <h3>Admin Quick Actions</h3>
                <div className="action-buttons-row">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab("support");
                      setStatusFilter("new");
                    }}
                    className="action-btn action-btn--primary"
                  >
                    <FiHeadphones />
                    <span>Review {stats.newTickets} New Tickets</span>
                  </button>

                  <a
                    href="https://genzes.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn action-btn--secondary"
                  >
                    <FiExternalLink />
                    <span>Visit Live Portal</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================
            SUPPORT TICKETS TAB CONTENT
        ========================================= */}
        {activeTab === "support" && (
          <div className="support-management-card">

            {/* CONTROLS BAR: SEARCH & STATUS FILTER */}
            <div className="tickets-controls-bar">

              {/* SEARCH INPUT */}
              <div className="tickets-search-box">
                <FiSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search by name, email, @username, phone or message..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm("")}
                    className="search-clear-btn"
                  >
                    <FiX />
                  </button>
                )}
              </div>

              {/* STATUS FILTER TABS */}
              <div className="filter-chips-group">
                <button
                  type="button"
                  className={`filter-chip ${
                    statusFilter === "all" ? "active" : ""
                  }`}
                  onClick={() => setStatusFilter("all")}
                >
                  All ({stats.total})
                </button>
                <button
                  type="button"
                  className={`filter-chip filter-chip--new ${
                    statusFilter === "new" ? "active" : ""
                  }`}
                  onClick={() => setStatusFilter("new")}
                >
                  New ({stats.newTickets})
                </button>
                <button
                  type="button"
                  className={`filter-chip filter-chip--progress ${
                    statusFilter === "in_progress" ? "active" : ""
                  }`}
                  onClick={() => setStatusFilter("in_progress")}
                >
                  In Progress ({stats.inProgress})
                </button>
                <button
                  type="button"
                  className={`filter-chip filter-chip--resolved ${
                    statusFilter === "resolved" ? "active" : ""
                  }`}
                  onClick={() => setStatusFilter("resolved")}
                >
                  Resolved ({stats.resolved})
                </button>
              </div>

            </div>

            {/* TICKETS LIST / TABLE */}
            {loading && tickets.length === 0 ? (
              <div className="admin-loading-state">
                <span className="spinner" />
                <p>Loading support messages...</p>
              </div>
            ) : tickets.length === 0 ? (
              <div className="admin-empty-state">
                <FiHeadphones className="empty-icon" />
                <h3>No Support Tickets Found</h3>
                <p>
                  {searchTerm || statusFilter !== "all"
                    ? "No tickets match your filter criteria. Try clearing search filters."
                    : "No user support requests have been submitted yet."}
                </p>
                {(searchTerm || statusFilter !== "all") && (
                  <button
                    type="button"
                    className="clear-filter-btn"
                    onClick={() => {
                      setSearchTerm("");
                      setStatusFilter("all");
                    }}
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            ) : (
              <div className="tickets-table-wrapper">
                <table className="tickets-table">
                  <thead>
                    <tr>
                      <th>User Details</th>
                      <th>Contact Info</th>
                      <th>Message</th>
                      <th>Attachment</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tickets.map((t) => (
                      <tr key={t._id} className={`ticket-row ticket-row--${t.status}`}>

                        {/* USER DETAILS */}
                        <td className="user-col">
                          <div className="user-name-wrapper">
                            <strong className="user-full-name">{t.name}</strong>
                            {t.username && (
                              <span className="user-handle">
                                <FiAtSign />
                                {t.username}
                              </span>
                            )}
                          </div>
                        </td>

                        {/* CONTACT INFO */}
                        <td className="contact-col">
                          <div className="contact-links">
                            <a
                              href={`mailto:${t.email}`}
                              className="contact-link"
                              title="Send Email"
                            >
                              <FiMail />
                              <span>{t.email}</span>
                            </a>
                            {t.mobile && (
                              <a
                                href={`tel:${t.mobile}`}
                                className="contact-link phone-link"
                                title="Call / WhatsApp"
                              >
                                <FiPhone />
                                <span>{t.mobile}</span>
                              </a>
                            )}
                          </div>
                        </td>

                        {/* MESSAGE CONTENT WITH READ MORE */}
                        <td className="message-col">
                          <div className="message-preview-container">
                            <p className="message-text-clamp">{t.message}</p>
                            {t.message && t.message.length > 80 && (
                              <button
                                type="button"
                                onClick={() => setExpandedMessage(t)}
                                className="read-more-btn"
                              >
                                Read More
                              </button>
                            )}
                          </div>
                        </td>

                        {/* ATTACHMENT WITH POP-UP PREVIEW */}
                        <td className="attachment-col">
                          {t.image ? (
                            <div
                              className="attachment-thumbnail-card"
                              onClick={() => setPreviewImage(getImageUrl(t.image))}
                              title="Click to preview full image"
                            >
                              <img
                                src={getImageUrl(t.image)}
                                alt="Attachment thumbnail"
                                className="thumbnail-img"
                                onError={(e) => {
                                  e.target.style.display = "none";
                                }}
                              />
                              <span className="preview-overlay-chip">
                                <FiMaximize2 />
                                <span>Preview</span>
                              </span>
                            </div>
                          ) : (
                            <span className="no-attachment-text">—</span>
                          )}
                        </td>

                        {/* DATE */}
                        <td className="date-col">
                          <span className="date-text">
                            {formatDate(t.createdAt)}
                          </span>
                        </td>

                        {/* STATUS DROPDOWN */}
                        <td className="status-col">
                          <div className="status-select-wrapper">
                            <select
                              value={t.status}
                              onChange={(e) =>
                                handleStatusChange(t._id, e.target.value)
                              }
                              className={`status-dropdown status-dropdown--${t.status}`}
                            >
                              <option value="new">New</option>
                              <option value="in_progress">In Progress</option>
                              <option value="resolved">Resolved</option>
                            </select>
                            <FiChevronDown className="select-arrow-icon" />
                          </div>
                        </td>

                        {/* ACTIONS: DELETE */}
                        <td className="actions-col">
                          <button
                            type="button"
                            onClick={() => handleDelete(t._id)}
                            disabled={deletingId === t._id}
                            className="ticket-delete-btn"
                            title="Delete this ticket"
                          >
                            <FiTrash2 />
                          </button>
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

          </div>
        )}

      </main>

      {/* =========================================
          IMAGE PREVIEW POP-UP MODAL
      ========================================= */}
      {previewImage && (
        <div
          className="admin-modal-backdrop"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="image-preview-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className="modal-title-group">
                <FiImage />
                <h3>Attached Image Preview</h3>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setPreviewImage(null)}
              >
                <FiX />
              </button>
            </div>

            <div className="modal-image-body">
              <img
                src={previewImage}
                alt="Full Attachment Preview"
                className="full-preview-image"
              />
            </div>

            <div className="modal-footer">
              <a
                href={previewImage}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-open-tab-btn"
              >
                <FiExternalLink />
                <span>Open in New Tab</span>
              </a>
              <button
                type="button"
                className="modal-dismiss-btn"
                onClick={() => setPreviewImage(null)}
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================
          READ MORE MESSAGE POP-UP MODAL
      ========================================= */}
      {expandedMessage && (
        <div
          className="admin-modal-backdrop"
          onClick={() => setExpandedMessage(null)}
        >
          <div
            className="message-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className="modal-title-group">
                <FiMessageSquare />
                <h3>Support Message from {expandedMessage.name}</h3>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setExpandedMessage(null)}
              >
                <FiX />
              </button>
            </div>

            <div className="modal-message-meta">
              <div>
                <strong>Email:</strong> {expandedMessage.email}
              </div>
              {expandedMessage.username && (
                <div>
                  <strong>Username:</strong> @{expandedMessage.username}
                </div>
              )}
              {expandedMessage.mobile && (
                <div>
                  <strong>Mobile:</strong> {expandedMessage.mobile}
                </div>
              )}
              <div>
                <strong>Submitted:</strong> {formatDate(expandedMessage.createdAt)}
              </div>
            </div>

            <div className="modal-message-body">
              <p>{expandedMessage.message}</p>
            </div>

            {expandedMessage.image && (
              <div className="modal-attached-image-preview">
                <strong>Attachment:</strong>
                <div
                  className="modal-thumbnail-trigger"
                  onClick={() => {
                    setPreviewImage(getImageUrl(expandedMessage.image));
                    setExpandedMessage(null);
                  }}
                >
                  <img
                    src={getImageUrl(expandedMessage.image)}
                    alt="Attachment"
                  />
                  <span>Click to view full image</span>
                </div>
              </div>
            )}

            <div className="modal-footer">
              <button
                type="button"
                className="modal-dismiss-btn"
                onClick={() => setExpandedMessage(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
