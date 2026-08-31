import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiUsers,
  FiShield,
  FiAlertOctagon,
  FiAlertTriangle,
  FiMail,
  FiGlobe,
} from "react-icons/fi";
import "./PrivacyPolicy.css";

export default function CommunityGuidelines() {
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
            <FiUsers />
          </div>

          <span className="privacy-label">SAFETY & COMMUNITY</span>

          <h1>
            Community <span>Guidelines</span>
          </h1>

          <p>
            Users are expected to maintain a safe, respectful and lawful
            platform for everyone.
          </p>

          <small>
            Effective Date: 25/08/2026&nbsp; • &nbsp; Last Updated: 31/08/2026
          </small>
        </section>

        {/* CONTENT */}
        <main className="privacy-content">

          {/* GUIDELINES */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiShield />
              <h2>Community Standards</h2>
            </div>
            <p>
              Users are expected to maintain a safe, respectful and lawful
              platform. The following activities may result in content removal or
              account action:
            </p>
            <ul>
              <li>Harassment</li>
              <li>Threats</li>
              <li>Fraud</li>
              <li>Scams</li>
              <li>Spam</li>
              <li>Hate</li>
              <li>Violence</li>
              <li>Illegal activities</li>
              <li>Sexual exploitation</li>
              <li>Child safety violations</li>
              <li>Impersonation</li>
              <li>Privacy violations</li>
              <li>Malicious activity</li>
              <li>Fake engagement</li>
              <li>Platform manipulation</li>
              <li>Copyright infringement</li>
            </ul>
          </section>

          {/* ENFORCEMENT */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiAlertOctagon />
              <h2>Enforcement & Actions</h2>
            </div>
            <p>Depending on the severity of the violation, GenZes may:</p>
            <div className="privacy-subcard">
              <p style={{ fontWeight: "700", color: "#ff40cf" }}>
                Remove Content → Issue Warning → Restrict Feature → Suspend Account
                → Disable Monetization → Terminate Account
              </p>
            </div>
          </section>

          {/* REPORTING */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiAlertTriangle />
              <h2>Reporting Violations</h2>
            </div>
            <p>For reporting violations:</p>
            <div className="privacy-contact-box">
              <p><strong>GenZes Support:</strong></p>
              <p>Email: <a href="mailto:info@genzes.in">info@genzes.in</a></p>
              <p>Phone: <a href="tel:+919728919591">+91 97289 19591</a></p>
            </div>
          </section>

          {/* GENERAL CONTACT */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiGlobe />
              <h2>GENZES — GENERAL CONTACT</h2>
            </div>
            <p>
              For any questions, support requests, complaints, payment issues,
              privacy requests, copyright complaints, monetization queries, Blue
              Tick issues, Profile Tracking issues or policy-related matters:
            </p>
            <div className="privacy-contact-box">
              <p><strong>GenZes</strong></p>
              <p>Email: <a href="mailto:info@genzes.in">info@genzes.in</a></p>
              <p>Phone: <a href="tel:+919728919591">+91 97289 19591</a></p>
              <p>Website: <a href="https://genzes.in" target="_blank" rel="noopener noreferrer">GenZes.in</a></p>
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
            <Link to="/copyright-policy">Copyright Policy</Link>
          </div>
          <p>© 2026 GENZES. All Rights Reserved.</p>
        </footer>

      </div>
    </div>
  );
}
