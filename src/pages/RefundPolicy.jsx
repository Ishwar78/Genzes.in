import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiRotateCcw,
  FiCheckCircle,
  FiActivity,
  FiRepeat,
  FiAlertCircle,
  FiShieldOff,
  FiSearch,
  FiHelpCircle,
  FiMail,
} from "react-icons/fi";
import "./PrivacyPolicy.css";

export default function RefundPolicy() {
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
            <FiRotateCcw />
          </div>

          <span className="privacy-label">PAYMENTS & REFUNDS</span>

          <h1>
            Refund <span>Policy</span>
          </h1>

          <p>
            GenZes provides digital, verification and subscription-based services.
            Due to the nature of these services, certain purchases are
            non-refundable.
          </p>

          <small>
            Effective Date: 25/08/2026&nbsp; • &nbsp; Last Updated: 31/08/2026
          </small>
        </section>

        {/* CONTENT */}
        <main className="privacy-content">

          {/* 1. BLUE TICK / VERIFICATION */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiCheckCircle />
              <h2>1. BLUE TICK / VERIFICATION</h2>
            </div>
            <p>
              Payment for Blue Tick/Verification is non-refundable after purchase
              and/or processing, except where a refund is required under
              applicable law.
            </p>
            <p>No refund will ordinarily be provided because:</p>
            <ul>
              <li>The user changes their mind</li>
              <li>The user does not like the service</li>
              <li>Followers do not increase</li>
              <li>Reach does not increase</li>
              <li>Engagement does not increase</li>
              <li>Monetization is not approved</li>
              <li>Expected benefits are not achieved</li>
              <li>The account subsequently violates GenZes policies</li>
            </ul>
          </section>

          {/* 2. PROFILE TRACKING */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiActivity />
              <h2>2. PROFILE TRACKING</h2>
            </div>
            <p>
              Profile Tracking payments are non-refundable after purchase or
              activation, except where required by applicable law.
            </p>
          </section>

          {/* 3. RECURRING PAYMENTS */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiRepeat />
              <h2>3. RECURRING PAYMENTS</h2>
            </div>
            <p>
              For recurring services, cancellation may prevent future renewals.
              Cancellation does not automatically create a refund for an
              already-paid billing period, except where required by applicable
              law.
            </p>
          </section>

          {/* 4. FAILED TRANSACTIONS */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiAlertCircle />
              <h2>4. FAILED TRANSACTIONS</h2>
            </div>
            <p>
              If money is debited but the service is not successfully activated
              due to a transaction failure, GenZes may investigate the transaction.
              Confirmed duplicate or failed payments may be reversed/refunded
              through the relevant payment provider, subject to applicable
              processing timelines.
            </p>
          </section>

          {/* 5. UNAUTHORIZED TRANSACTIONS */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiShieldOff />
              <h2>5. UNAUTHORIZED TRANSACTIONS</h2>
            </div>
            <p>
              Users should immediately report suspected unauthorized transactions
              to:
            </p>
            <div className="privacy-contact-box">
              <p><strong>GenZes Support:</strong></p>
              <p>Email: <a href="mailto:info@genzes.in">info@genzes.in</a></p>
              <p>Phone: <a href="tel:+919728919591">+91 97289 19591</a></p>
            </div>
            <p>
              Users should also contact their bank/payment provider where
              appropriate.
            </p>
          </section>

          {/* 6. FRAUD */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiSearch />
              <h2>6. FRAUD</h2>
            </div>
            <p>
              GenZes may investigate transactions suspected of fraud or
              unauthorized activity.
            </p>
          </section>

          {/* 7. NO GUARANTEE OF RESULTS */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiHelpCircle />
              <h2>7. NO GUARANTEE OF RESULTS</h2>
            </div>
            <p>Purchase of a GenZes service does not guarantee:</p>
            <ul>
              <li>Followers</li>
              <li>Views</li>
              <li>Reach</li>
              <li>Engagement</li>
              <li>Monetization approval</li>
              <li>Revenue</li>
              <li>Any particular earning amount</li>
            </ul>
          </section>

          {/* 8. REFUND REQUESTS */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiMail />
              <h2>8. REFUND REQUESTS</h2>
            </div>
            <p>
              For any refund-related query or transaction issue, contact:
            </p>
            <div className="privacy-contact-box">
              <p><strong>GenZes Support:</strong></p>
              <p>Email: <a href="mailto:info@genzes.in">info@genzes.in</a></p>
              <p>Phone: <a href="tel:+919728919591">+91 97289 19591</a></p>
            </div>
            <p>
              Please provide relevant transaction/order details so that the
              matter can be reviewed.
            </p>
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
            <Link to="/cancellation-policy">Cancellation Policy</Link>
            <Link to="/copyright-policy">Copyright Policy</Link>
            <Link to="/community-guidelines">Community Guidelines</Link>
          </div>
          <p>© 2026 GENZES. All Rights Reserved.</p>
        </footer>

      </div>
    </div>
  );
}
