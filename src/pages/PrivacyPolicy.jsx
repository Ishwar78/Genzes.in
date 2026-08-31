import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiShield,
  FiUser,
  FiFileText,
  FiSmartphone,
  FiCreditCard,
  FiCheckCircle,
  FiDatabase,
  FiLayers,
  FiShare2,
  FiLock,
  FiClock,
  FiUsers,
  FiTrash2,
  FiMail,
  FiPhone,
  FiRefreshCw,
} from "react-icons/fi";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
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

          <span className="privacy-label">LEGAL & PRIVACY</span>

          <h1>
            Privacy <span>Policy</span>
          </h1>

          <p>
            This Privacy Policy explains how we collect, use, store, process and
            protect information when you use the GenZes website, mobile application
            and related services.
          </p>

          <small>
            Effective Date: 25/08/2026&nbsp; • &nbsp; Last Updated: 31/08/2026
          </small>
        </section>

        {/* CONTENT */}
        <main className="privacy-content">

          {/* INTRODUCTION */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiShield />
              <h2>Welcome to GenZes</h2>
            </div>

            <p>
              Welcome to GenZes (“GenZes”, “we”, “us”, or “our”). GenZes is a social
              media and content-sharing platform that allows users to create profiles,
              upload and share content, interact with other users, follow creators and,
              where eligible, participate in monetization programs.
            </p>

            <p>
              This Privacy Policy explains how we collect, use, store, process and
              protect information when you use the GenZes website, mobile application
              and related services.
            </p>

            <p>
              By accessing or using GenZes, you acknowledge that you have read and
              understood this Privacy Policy.
            </p>
          </section>

          {/* 1 */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiUser />
              <h2>1. INFORMATION WE COLLECT</h2>
            </div>

            <p>
              Depending on how you use GenZes, we may collect the following
              information:
            </p>

            <div className="privacy-subcard">
              <h3>A. Account Information</h3>
              <ul>
                <li>Name</li>
                <li>Username</li>
                <li>Email address</li>
                <li>Mobile number</li>
                <li>Password/authentication information</li>
                <li>Date of birth or age information</li>
                <li>Profile photo</li>
                <li>Bio and other profile information</li>
              </ul>
            </div>

            <div className="privacy-subcard">
              <h3>B. User-Generated Content</h3>
              <p>
                We may process content that you voluntarily upload, publish, share
                or otherwise provide, including:
              </p>
              <ul>
                <li>Photos</li>
                <li>Videos</li>
                <li>Reels</li>
                <li>Text</li>
                <li>Captions</li>
                <li>Comments</li>
                <li>Likes</li>
                <li>Follows</li>
                <li>Shares</li>
                <li>Profile information</li>
                <li>Other content submitted by you</li>
              </ul>
            </div>

            <div className="privacy-subcard">
              <h3>C. Device and Technical Information</h3>
              <p>We may collect:</p>
              <ul>
                <li>IP address</li>
                <li>Device type</li>
                <li>Operating system</li>
                <li>Browser information</li>
                <li>Application version</li>
                <li>Device identifiers</li>
                <li>Log information</li>
                <li>Usage information</li>
                <li>Crash and diagnostic information</li>
              </ul>
            </div>

            <div className="privacy-subcard">
              <h3>D. Payment Information</h3>
              <p>
                When you purchase paid services such as Blue Tick/Verification,
                Profile Tracking or other premium services, payment information may
                be processed by our third-party payment service providers. GenZes may
                receive transaction-related information but does not necessarily store
                complete card, banking or UPI credentials.
              </p>
            </div>

            <div className="privacy-subcard">
              <h3>E. KYC Information</h3>
              <p>
                Users applying for monetization may be required to complete KYC
                verification. KYC information may include:
              </p>
              <ul>
                <li>Government-issued identification</li>
                <li>PAN details</li>
                <li>Bank/payment details</li>
                <li>Name and date of birth</li>
                <li>Other information reasonably required for verification</li>
              </ul>
              <p>
                KYC information may be processed through authorized third-party
                verification providers.
              </p>
            </div>
          </section>

          {/* 2 */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiDatabase />
              <h2>2. HOW WE USE INFORMATION</h2>
            </div>

            <p>We may use collected information to:</p>
            <ul>
              <li>Create and maintain user accounts</li>
              <li>Provide GenZes services</li>
              <li>Display profiles and content</li>
              <li>Enable followers, likes, comments and sharing</li>
              <li>Provide monetization features</li>
              <li>Process payments</li>
              <li>Process verification requests</li>
              <li>Provide Profile Tracking services</li>
              <li>Conduct KYC verification</li>
              <li>Prevent fraud and abuse</li>
              <li>Detect suspicious activity</li>
              <li>Improve platform security</li>
              <li>Respond to support requests</li>
              <li>Improve our services and features</li>
              <li>Analyze platform usage</li>
              <li>Communicate service-related information</li>
              <li>Enforce our policies</li>
              <li>Comply with applicable laws and legal requirements</li>
            </ul>
          </section>

          {/* 3 */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiFileText />
              <h2>3. USER-GENERATED CONTENT</h2>
            </div>

            <p>
              Content uploaded by users may be visible to other users depending on
              the functionality and visibility settings available on GenZes. You
              retain ownership of content that you create and upload, subject to the
              license and rights granted to GenZes under our Terms & Conditions.
            </p>
            <p>
              You are responsible for ensuring that your content does not violate
              copyright, trademark, privacy, publicity or other third-party rights.
            </p>
          </section>

          {/* 4 */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiLayers />
              <h2>4. COOKIES AND TRACKING TECHNOLOGIES</h2>
            </div>

            <p>
              GenZes may use cookies, SDKs, pixels and similar technologies to:
            </p>
            <ul>
              <li>Maintain login sessions</li>
              <li>Remember preferences</li>
              <li>Improve functionality</li>
              <li>Analyze usage</li>
              <li>Improve performance</li>
              <li>Detect fraud and abuse</li>
              <li>Measure marketing effectiveness</li>
            </ul>
          </section>

          {/* 5 */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiShare2 />
              <h2>5. INFORMATION SHARING</h2>
            </div>

            <p>
              We may share information with service providers and third parties
              where reasonably necessary to operate GenZes, including:
            </p>
            <ul>
              <li>Payment processors</li>
              <li>KYC/verification providers</li>
              <li>Hosting providers</li>
              <li>Cloud service providers</li>
              <li>Analytics providers</li>
              <li>Security providers</li>
              <li>Customer support providers</li>
              <li>Professional advisors</li>
              <li>Government or regulatory authorities where required by law</li>
            </ul>
          </section>

          {/* 6 */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiLock />
              <h2>6. DATA SECURITY</h2>
            </div>

            <p>
              We use reasonable technical and organizational measures designed to
              protect user information from unauthorized access, misuse, alteration
              or disclosure. However, no internet-based service can guarantee
              absolute security.
            </p>
          </section>

          {/* 7 */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiClock />
              <h2>7. DATA RETENTION</h2>
            </div>

            <p>We may retain information for as long as reasonably necessary to:</p>
            <ul>
              <li>Provide our services</li>
              <li>Maintain accounts</li>
              <li>Fulfill legal obligations</li>
              <li>Resolve disputes</li>
              <li>Prevent fraud</li>
              <li>Enforce agreements</li>
              <li>Maintain transaction and financial records</li>
            </ul>
            <p>
              Certain information may be retained after account deletion where
              required or permitted by applicable law.
            </p>
          </section>

          {/* 8 */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiUsers />
              <h2>8. CHILDREN</h2>
            </div>

            <p>
              Users must comply with applicable age requirements for using GenZes.
              GenZes may restrict or terminate accounts that violate applicable age
              requirements or provide inaccurate age information.
            </p>
          </section>

          {/* 9 */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiTrash2 />
              <h2>9. ACCOUNT DELETION</h2>
            </div>

            <p>
              Users may request deletion of their account through available account
              settings or by contacting us:
            </p>
            <div className="privacy-contact-box">
              <p><strong>Email:</strong> <a href="mailto:info@genzes.in">info@genzes.in</a></p>
              <p><strong>Phone:</strong> <a href="tel:+919728919591">+91 97289 19591</a></p>
            </div>
            <p>
              Some information may continue to be retained where required or
              permitted by applicable law.
            </p>
          </section>

          {/* 10 */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiMail />
              <h2>10. PRIVACY REQUESTS</h2>
            </div>

            <p>
              For privacy-related questions, concerns or requests, users may
              contact:
            </p>
            <div className="privacy-contact-box">
              <p><strong>Email:</strong> <a href="mailto:info@genzes.in">info@genzes.in</a></p>
              <p><strong>Phone:</strong> <a href="tel:+919728919591">+91 97289 19591</a></p>
            </div>
          </section>

          {/* 11 */}
          <section className="privacy-card">
            <div className="privacy-card-heading">
              <FiRefreshCw />
              <h2>11. CHANGES TO THIS PRIVACY POLICY</h2>
            </div>

            <p>
              GenZes may update this Privacy Policy from time to time. The updated
              version will be published on the GenZes website/application with a
              revised “Last Updated” date.
            </p>
          </section>

        </main>

        {/* FOOTER */}
        <footer className="privacy-footer">
          <div className="privacy-footer-links">
            <Link to="/">Home</Link>
            <Link to="/support">Support</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
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
