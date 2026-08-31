import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiXCircle,
  FiShoppingBag,
  FiRepeat,
  FiCalendar,
  FiCheckCircle,
  FiActivity,
  FiUserX,
  FiMail,
} from "react-icons/fi";
import "./PrivacyPolicy.css";

export default function CancellationPolicy() {
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
            <FiXCircle />
          </div>

          <span className="privacy-label">SUBSCRIPTION & SERVICES</span>

          <h1>
            Cancellation <span>Policy</span>
          </h1>

          <p>
            Information regarding cancellation of paid, verification and
            subscription-based services on GenZes.
          </p>

          <small>
            Effective Date: 25/08/2026 &nbsp; • &nbsp; Last Updated: 31/08/2026
          </small>
        </section>

        {/* CONTENT */}
        <main className="privacy-content">

          {/* 1. PAID SERVICES */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiShoppingBag />
              <h2>1. PAID SERVICES</h2>
            </div>
            <p>
              Users may cancel eligible recurring services through the available
              account/payment controls or by contacting GenZes:
            </p>
            <div className="privacy-contact-box">
              <p><strong>GenZes Support:</strong></p>
              <p>Email: <a href="mailto:info@genzes.in">info@genzes.in</a></p>
              <p>Phone: <a href="tel:+919728919591">+91 97289 19591</a></p>
            </div>
          </section>

          {/* 2. RECURRING SERVICES */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiRepeat />
              <h2>2. RECURRING SERVICES</h2>
            </div>
            <p>
              Cancellation of a recurring service generally prevents future
              renewal.
            </p>
          </section>

          {/* 3. CURRENT BILLING PERIOD */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiCalendar />
              <h2>3. CURRENT BILLING PERIOD</h2>
            </div>
            <p>
              Cancellation generally does not result in a refund for the current
              paid billing period, except where required by applicable law.
            </p>
          </section>

          {/* 4. BLUE TICK */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiCheckCircle />
              <h2>4. BLUE TICK</h2>
            </div>
            <p>
              Blue Tick/Verification is non-refundable after purchase/processing,
              except where applicable law requires otherwise. Cancellation after
              purchase does not automatically create a refund entitlement.
            </p>
          </section>

          {/* 5. PROFILE TRACKING */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiActivity />
              <h2>5. PROFILE TRACKING</h2>
            </div>
            <p>
              Profile Tracking payments are non-refundable after
              purchase/activation, except where applicable law requires otherwise.
            </p>
          </section>

          {/* 6. ACCOUNT TERMINATION */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiUserX />
              <h2>6. ACCOUNT TERMINATION</h2>
            </div>
            <p>
              If GenZes terminates an account because of policy violations, access
              to certain paid services may be restricted or terminated. Any
              refund entitlement will be determined according to the Refund Policy
              and applicable law.
            </p>
          </section>

          {/* 7. CANCELLATION SUPPORT */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiMail />
              <h2>7. CANCELLATION SUPPORT</h2>
            </div>
            <p>For cancellation assistance:</p>
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
            <Link to="/copyright-policy">Copyright Policy</Link>
            <Link to="/community-guidelines">Community Guidelines</Link>
          </div>
          <p>© 2026 GENZES. All Rights Reserved.</p>
        </footer>

      </div>
    </div>
  );
}
