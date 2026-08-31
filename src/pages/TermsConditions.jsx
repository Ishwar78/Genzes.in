import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiFileText,
  FiUserCheck,
  FiUser,
  FiUpload,
  FiAlertOctagon,
  FiAward,
  FiGlobe,
  FiDollarSign,
  FiShoppingBag,
  FiCheckCircle,
  FiActivity,
  FiRepeat,
  FiSlash,
  FiServer,
  FiExternalLink,
  FiAlertTriangle,
  FiRefreshCw,
  FiMail,
  FiBookOpen,
} from "react-icons/fi";
import "./PrivacyPolicy.css";

export default function TermsConditions() {
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
            <FiFileText />
          </div>

          <span className="privacy-label">LEGAL & TERMS</span>

          <h1>
            Terms & <span>Conditions</span>
          </h1>

          <p>
            These Terms & Conditions (“Terms”) govern your use of the GenZes
            website, application and related services. By registering for or
            using GenZes, you agree to these Terms.
          </p>

          <small>
            Effective Date: 25/08/2026&nbsp; • &nbsp; Last Updated: 31/08/2026
          </small>
        </section>

        {/* CONTENT */}
        <main className="privacy-content">

          {/* 1. ELIGIBILITY */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiUserCheck />
              <h2>1. ELIGIBILITY</h2>
            </div>
            <p>
              You must provide accurate and complete information while creating
              your account. You must comply with all applicable laws and age
              requirements.
            </p>
          </section>

          {/* 2. USER ACCOUNT */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiUser />
              <h2>2. USER ACCOUNT</h2>
            </div>
            <p>You are responsible for:</p>
            <ul>
              <li>Your account</li>
              <li>Your login credentials</li>
              <li>Activities conducted through your account</li>
              <li>Information submitted by you</li>
              <li>Content uploaded through your account</li>
            </ul>
            <div className="privacy-subcard">
              <h3>You must not:</h3>
              <ul>
                <li>Impersonate another person</li>
                <li>Create fraudulent accounts</li>
                <li>Provide false information</li>
                <li>Attempt unauthorized access</li>
                <li>Sell or transfer your account without authorization</li>
                <li>Manipulate GenZes systems</li>
              </ul>
            </div>
          </section>

          {/* 3. CONTENT UPLOAD */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiUpload />
              <h2>3. CONTENT UPLOAD</h2>
            </div>
            <p>
              Users may upload photos, videos, reels, text and other permitted
              content.
            </p>
            <p>You represent and warrant that:</p>
            <ul>
              <li>1. You have the necessary rights to upload the content.</li>
              <li>2. Your content does not infringe third-party rights.</li>
              <li>3. Your content is not illegally copied.</li>
              <li>4. Your content does not violate applicable law.</li>
              <li>5. Your content does not contain malicious software.</li>
              <li>6. Your content does not intentionally mislead users.</li>
            </ul>
          </section>

          {/* 4. PROHIBITED CONTENT */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiAlertOctagon />
              <h2>4. PROHIBITED CONTENT</h2>
            </div>
            <p>Users must not upload or distribute:</p>
            <ul>
              <li>Copyright-infringing content</li>
              <li>Trademark-infringing content</li>
              <li>Fraudulent or scam content</li>
              <li>Harassing or threatening content</li>
              <li>Illegal content</li>
              <li>Malware or phishing material</li>
              <li>Spam</li>
              <li>Fake engagement</li>
              <li>Impersonation</li>
              <li>Unauthorized personal information</li>
              <li>Content intended to manipulate GenZes systems</li>
            </ul>
            <p>
              GenZes may remove content that violates these Terms or applicable
              law.
            </p>
          </section>

          {/* 5. ORIGINAL CONTENT */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiAward />
              <h2>5. ORIGINAL CONTENT</h2>
            </div>
            <p>
              Users participating in monetization must publish original, authentic
              and meaningful content. Copied, stolen, illegally downloaded,
              re-uploaded or otherwise unauthorized content may be removed and
              may be made ineligible for monetization.
            </p>
          </section>

          {/* 6. LICENSE TO GENZES */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiGlobe />
              <h2>6. LICENSE TO GENZES</h2>
            </div>
            <p>
              You retain ownership of content you create. By uploading content to
              GenZes, you grant GenZes a worldwide, non-exclusive, royalty-free
              license, to the extent necessary to operate, maintain, improve and
              promote the platform, to host, store, reproduce, process, display,
              distribute and technically modify your content.
            </p>
          </section>

          {/* 7. MONETIZATION */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiDollarSign />
              <h2>7. MONETIZATION</h2>
            </div>
            <p>
              Eligible creators may participate in the GenZes Monetization
              Program subject to the separate Monetization Policy. Meeting the
              eligibility requirements does not guarantee approval or any
              particular level of earnings.
            </p>
          </section>

          {/* 8. PAID SERVICES */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiShoppingBag />
              <h2>8. PAID SERVICES</h2>
            </div>
            <p>GenZes may offer paid services, including:</p>
            <ul>
              <li>Blue Tick / Profile Verification</li>
              <li>Profile Tracking</li>
              <li>Other premium services</li>
            </ul>
            <p>
              Applicable prices and service details will be displayed before
              purchase.
            </p>
          </section>

          {/* 9. BLUE TICK / PROFILE VERIFICATION */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiCheckCircle />
              <h2>9. BLUE TICK / PROFILE VERIFICATION</h2>
            </div>
            <p>
              Blue Tick/Verification is a paid service. Once purchased and
              processed, the applicable payment is non-refundable, except where a
              refund is required under applicable law.
            </p>
            <p>Payment for verification does not guarantee:</p>
            <ul>
              <li>Increased followers</li>
              <li>Increased reach</li>
              <li>Increased engagement</li>
              <li>Monetization approval</li>
              <li>Revenue</li>
              <li>Any particular platform benefit</li>
            </ul>
            <p>
              GenZes may reject, suspend or remove verification where required due
              to inaccurate information, policy violations, fraud or inability to
              verify the account.
            </p>
            <div className="privacy-contact-box">
              <p><strong>For payment-related queries:</strong></p>
              <p>Email: <a href="mailto:info@genzes.in">info@genzes.in</a></p>
              <p>Phone: <a href="tel:+919728919591">+91 97289 19591</a></p>
            </div>
          </section>

          {/* 10. PROFILE TRACKING */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiActivity />
              <h2>10. PROFILE TRACKING</h2>
            </div>
            <p>
              Profile Tracking is a paid service. Once purchased/activated, the
              applicable payment is non-refundable, except where required by
              applicable law.
            </p>
            <p>
              Where Profile Tracking is provided through a recurring
              subscription, the user authorizes the applicable payment provider
              to process recurring payments according to the selected billing
              cycle.
            </p>
          </section>

          {/* 11. AUTOMATIC / RECURRING PAYMENTS */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiRepeat />
              <h2>11. AUTOMATIC / RECURRING PAYMENTS</h2>
            </div>
            <p>
              Where a recurring service is selected, the user authorizes GenZes
              and/or its payment provider to automatically charge the selected
              payment method according to the applicable billing cycle.
            </p>
            <p>
              Users are responsible for maintaining a valid payment method.
              Failure of payment may result in suspension of the applicable
              service.
            </p>
          </section>

          {/* 12. SUSPENSION AND TERMINATION */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiSlash />
              <h2>12. SUSPENSION AND TERMINATION</h2>
            </div>
            <p>
              GenZes may suspend, restrict, disable or terminate an account where
              we reasonably believe that:
            </p>
            <ul>
              <li>These Terms have been violated</li>
              <li>Monetization policies have been violated</li>
              <li>Fraud has occurred</li>
              <li>Fake engagement has occurred</li>
              <li>Copyright infringement has occurred</li>
              <li>The platform has been abused</li>
              <li>Illegal activity has occurred</li>
              <li>Security or legal risks exist</li>
            </ul>
            <p>
              Serious or repeated violations may result in permanent termination.
            </p>
          </section>

          {/* 13. PLATFORM AVAILABILITY */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiServer />
              <h2>13. PLATFORM AVAILABILITY</h2>
            </div>
            <p>
              GenZes does not guarantee uninterrupted availability. The platform
              may temporarily become unavailable because of maintenance, technical
              issues, server problems, security incidents, third-party failures
              or circumstances beyond our reasonable control.
            </p>
          </section>

          {/* 14. THIRD-PARTY SERVICES */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiExternalLink />
              <h2>14. THIRD-PARTY SERVICES</h2>
            </div>
            <p>
              GenZes may use third-party services including payment processors,
              analytics providers, hosting providers and verification providers.
              Such providers may have their own terms and privacy policies.
            </p>
          </section>

          {/* 15. LIMITATION OF LIABILITY */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiAlertTriangle />
              <h2>15. LIMITATION OF LIABILITY</h2>
            </div>
            <p>
              To the maximum extent permitted by applicable law, GenZes will not
              be responsible for indirect, incidental, consequential or special
              losses arising from use of or inability to use the platform.
              Nothing in these Terms excludes liability that cannot legally be
              excluded.
            </p>
          </section>

          {/* 16. CHANGES TO TERMS */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiRefreshCw />
              <h2>16. CHANGES TO TERMS</h2>
            </div>
            <p>
              GenZes may modify these Terms from time to time. Updated Terms may
              be published on the platform.
            </p>
          </section>

          {/* 17. CONTACT US */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiMail />
              <h2>17. CONTACT US</h2>
            </div>
            <p>
              For questions, complaints, account issues, payment issues or
              policy-related matters:
            </p>
            <div className="privacy-contact-box">
              <p><strong>GenZes</strong></p>
              <p>Email: <a href="mailto:info@genzes.in">info@genzes.in</a></p>
              <p>Phone: <a href="tel:+919728919591">+91 97289 19591</a></p>
            </div>
          </section>

          {/* 18. GOVERNING LAW */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiBookOpen />
              <h2>18. GOVERNING LAW</h2>
            </div>
            <p>
              These Terms shall be governed by the applicable laws of India,
              subject to applicable legal requirements.
            </p>
          </section>

        </main>

        {/* FOOTER */}
        <footer className="privacy-footer">
          <div className="privacy-footer-links">
            <Link to="/">Home</Link>
            <Link to="/support">Support</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/monetization-policy">Monetization Policy</Link>
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