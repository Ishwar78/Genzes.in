import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiShield,
  FiCheckCircle,
  FiMusic,
  FiVideo,
  FiImage,
  FiType,
  FiAlertTriangle,
  FiMail,
} from "react-icons/fi";
import "./PrivacyPolicy.css";

export default function CopyrightPolicy() {
  return (
    <div className="privacy-page">
      <div className="privacy-container">

        {/* TOPBAR */}
        <div className="privacy-topbar">
          <Link to="/" className="privacy-back">
            <FiArrowLeft />
            Back to Home
          </Link>

          <div className="privacy-brand">GENZES</div>
        </div>

        {/* HERO */}
        <section className="privacy-hero">
          <div className="privacy-icon">
            <FiShield />
          </div>

          <span className="privacy-label">INTELLECTUAL PROPERTY</span>

          <h1>
            Copyright <span>Policy</span>
          </h1>

          <p>
            GenZes respects intellectual property rights. Users must upload only
            content that they have the legal right to use and publish.
          </p>

          <small>
            Effective Date: 25/08/2026&nbsp; • &nbsp; Last Updated: 31/08/2026
          </small>
        </section>

        {/* CONTENT */}
        <main className="privacy-content">

          {/* OVERVIEW */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiCheckCircle />
              <h2>Respecting Intellectual Property</h2>
            </div>
            <p>
              Users must upload only content that they have the legal right to use
              and publish. This includes appropriate rights for:
            </p>
            <ul>
              <li>Music</li>
              <li>Videos</li>
              <li>Images</li>
              <li>Graphics</li>
              <li>Logos</li>
              <li>Text</li>
              <li>Other copyrighted material</li>
            </ul>
            <p>
              Users are responsible for obtaining necessary licenses and
              permissions.
            </p>
          </section>

          {/* ENFORCEMENT */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiAlertTriangle />
              <h2>Content Removal & Violations</h2>
            </div>
            <p>
              GenZes may remove content where it receives a valid copyright
              complaint or reasonably determines that content may infringe
              third-party rights.
            </p>
            <div className="privacy-subcard">
              <h3>Repeated copyright violations may result in:</h3>
              <p style={{ fontWeight: "700", color: "#ff40cf" }}>
                Content Removal → Feature Restriction → Monetization Suspension →
                Account Suspension → Account Termination
              </p>
            </div>
          </section>

          {/* COMPLAINTS */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiMail />
              <h2>Copyright Complaints</h2>
            </div>
            <p>For copyright-related complaints:</p>
            <div className="privacy-contact-box">
              <p><strong>GenZes Support:</strong></p>
              <p>Email: <a href="mailto:info@genzes.in">info@genzes.in</a></p>
              <p>Phone: <a href="tel:+919728919591">+91 97289 19591</a></p>
            </div>
          </section>

        </main>

        {/* FOOTER */}
        <footer className="privacy-footer">
          <div className="privacy-footer-links">
            <Link to="/">Home</Link>
            <Link to="/support">Support</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            <Link to="/monetization-policy">Monetization Policy</Link>
            <Link to="/refund-policy">Refund Policy</Link>
            <Link to="/cancellation-policy">Cancellation Policy</Link>
            <Link to="/community-guidelines">Community Guidelines</Link>
          </div>
          <p>© 2026 GENZES. All Rights Reserved.</p>
        </footer>

      </div>
    </div>
  );
}
