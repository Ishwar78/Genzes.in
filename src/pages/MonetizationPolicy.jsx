import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiDollarSign,
  FiCheckSquare,
  FiShield,
  FiAward,
  FiAlertOctagon,
  FiSearch,
  FiTrendingUp,
  FiAlertTriangle,
  FiPercent,
  FiSlash,
  FiUserX,
  FiRefreshCw,
  FiMail,
} from "react-icons/fi";
import "./PrivacyPolicy.css";

export default function MonetizationPolicy() {
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
            <FiDollarSign />
          </div>

          <span className="privacy-label">CREATOR PROGRAM</span>

          <h1>
            Monetization <span>Policy</span>
          </h1>

          <p>
            GenZes may provide eligible creators with opportunities to monetize
            qualifying content. Monetization is a platform feature and not an
            automatic entitlement.
          </p>

          <small>
            Effective Date: 25/08/2026&nbsp; • &nbsp; Last Updated: 31/08/2026
          </small>
        </section>

        {/* CONTENT */}
        <main className="privacy-content">

          {/* 1. ELIGIBILITY REQUIREMENTS */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiCheckSquare />
              <h2>1. ELIGIBILITY REQUIREMENTS</h2>
            </div>
            <p>
              To apply for monetization, a creator must meet the following minimum
              requirements:
            </p>
            <div className="privacy-subcard">
              <h3>Minimum Thresholds:</h3>
              <ul>
                <li><strong>100 Followers</strong></li>
                <li><strong>100 Hours of Eligible Watch Time</strong></li>
                <li><strong>200 Reels Uploaded</strong></li>
                <li><strong>Completed KYC</strong></li>
              </ul>
            </div>
            <p>
              All applicable requirements must be fulfilled before applying.
              Meeting these requirements does not guarantee approval. GenZes
              reserves the right to review the account, content and compliance
              before enabling monetization.
            </p>
          </section>

          {/* 2. KYC IS MANDATORY */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiShield />
              <h2>2. KYC IS MANDATORY</h2>
            </div>
            <p>
              KYC is mandatory for monetization. Creators may be required to
              provide:
            </p>
            <ul>
              <li>Government-issued identification</li>
              <li>PAN/tax information</li>
              <li>Bank/payment details</li>
              <li>Name and date of birth</li>
              <li>Other verification information reasonably required by GenZes</li>
            </ul>
            <p>
              False, incomplete or unverifiable KYC information may result in
              rejection or suspension.
            </p>
          </section>

          {/* 3. ORIGINAL, UNIQUE AND COPYRIGHT-FREE CONTENT */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiAward />
              <h2>3. ORIGINAL, UNIQUE AND COPYRIGHT-FREE CONTENT</h2>
            </div>
            <p>
              Creators must ensure that monetized content is:
            </p>
            <div className="privacy-subcard">
              <p><strong>Original + Authentic + Unique + Legally Usable</strong></p>
            </div>
            <p>Creators must not use:</p>
            <ul>
              <li>Copied videos</li>
              <li>Stolen videos</li>
              <li>Unauthorized reuploads</li>
              <li>Pirated content</li>
              <li>Copyright-infringing music</li>
              <li>Copyright-infringing images</li>
              <li>Content taken from other platforms without appropriate rights</li>
              <li>Mass-produced content intended primarily to manipulate monetization</li>
              <li>Content violating third-party rights</li>
            </ul>
            <p>
              Creators are responsible for obtaining all necessary permissions/licenses
              for third-party material used in their content.
            </p>
          </section>

          {/* 4. FAKE ENGAGEMENT */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiAlertOctagon />
              <h2>4. FAKE ENGAGEMENT</h2>
            </div>
            <p>Creators must not artificially increase:</p>
            <ul>
              <li>Followers</li>
              <li>Views</li>
              <li>Watch hours</li>
              <li>Likes</li>
              <li>Comments</li>
              <li>Shares</li>
              <li>Engagement</li>
              <li>Other monetization metrics</li>
            </ul>
            <p>
              The use of bots, fake accounts, purchased engagement, automated
              systems, click farms, view exchanges or similar methods is
              prohibited.
            </p>
          </section>

          {/* 5. CONTENT REVIEW */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiSearch />
              <h2>5. CONTENT REVIEW</h2>
            </div>
            <p>GenZes may review:</p>
            <ul>
              <li>Profile</li>
              <li>Reels</li>
              <li>Videos</li>
              <li>Content originality</li>
              <li>Engagement</li>
              <li>Watch time</li>
              <li>Traffic</li>
              <li>Copyright compliance</li>
              <li>KYC information</li>
              <li>Policy compliance</li>
            </ul>
            <p>
              GenZes may use automated systems and/or human review.
            </p>
          </section>

          {/* 6. EARNINGS */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiTrendingUp />
              <h2>6. EARNINGS</h2>
            </div>
            <p>
              GenZes may provide creators with opportunities to earn from eligible
              content. GenZes does not guarantee any specific income, revenue,
              views, engagement or earnings.
            </p>
            <p>
              The amount of revenue, if any, may depend on multiple factors
              determined by GenZes, including platform activity, eligible content,
              audience engagement, advertising demand and applicable
              adjustments. GenZes may modify its monetization mechanisms from time
              to time.
            </p>
          </section>

          {/* 7. WITHHOLDING OR ADJUSTMENT OF EARNINGS */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiAlertTriangle />
              <h2>7. WITHHOLDING OR ADJUSTMENT OF EARNINGS</h2>
            </div>
            <p>
              GenZes may delay, hold, adjust or cancel earnings where there is
              reasonable evidence of:
            </p>
            <ul>
              <li>Fraud</li>
              <li>Fake engagement</li>
              <li>Invalid traffic</li>
              <li>Copyright issues</li>
              <li>Policy violations</li>
              <li>Payment irregularities</li>
              <li>KYC issues</li>
              <li>Legal requirements</li>
            </ul>
          </section>

          {/* 8. TAXES */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiPercent />
              <h2>8. TAXES</h2>
            </div>
            <p>
              Creators are responsible for applicable taxes and statutory
              obligations relating to their earnings.
            </p>
          </section>

          {/* 9. MONETIZATION SUSPENSION */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiSlash />
              <h2>9. MONETIZATION SUSPENSION</h2>
            </div>
            <p>GenZes may suspend monetization for violations including:</p>
            <ul>
              <li>Copyright infringement</li>
              <li>Fake engagement</li>
              <li>Fraud</li>
              <li>False KYC</li>
              <li>Repeated policy violations</li>
              <li>Manipulation of platform metrics</li>
              <li>Misuse of monetization features</li>
            </ul>
          </section>

          {/* 10. ACCOUNT TERMINATION */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiUserX />
              <h2>10. ACCOUNT TERMINATION</h2>
            </div>
            <p>
              Serious or repeated violations may result in account termination
              and loss of monetization access. Where immediate action is reasonably
              necessary to protect users, GenZes or comply with applicable law,
              action may be taken without prior notice.
            </p>
          </section>

          {/* 11. POLICY CHANGES */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiRefreshCw />
              <h2>11. POLICY CHANGES</h2>
            </div>
            <p>
              GenZes may change eligibility criteria, monetization mechanisms,
              review procedures and other program requirements as the platform
              evolves.
            </p>
          </section>

          {/* 12. MONETIZATION SUPPORT */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiMail />
              <h2>12. MONETIZATION SUPPORT</h2>
            </div>
            <p>For monetization-related queries:</p>
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
            <Link to="/refund-policy">Refund Policy</Link>
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
