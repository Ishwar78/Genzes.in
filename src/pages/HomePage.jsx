import { Link } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import TrustStrip from "../components/TrustStrip.jsx";
import WhySection from "../components/WhySection.jsx";
import FutureStrip from "../components/FutureStrip.jsx";
import DownloadQrSection from
  "../components/DownloadQrSection.jsx";
import SocialLinksSection from "../components/SocialLinksSection.jsx";

import "./HomePage.css";

export default function HomePage() {
  return (
    <main className="home-page">

      {/* <Navbar /> */}

      <HeroSection />

      <TrustStrip />

      <WhySection />
      {/* <SocialLinksSection /> */}

      {/* <FutureStrip /> */}

 <DownloadQrSection />
      {/* ============================= */}
      {/* LEGAL / FOOTER SECTION */}
      {/* ============================= */}

      <footer className="home-legal-footer">

        <div className="home-legal-inner">

          <div className="home-footer-brand">
            <img
              src="/logo.png"
              alt="GENZES Logo"
              className="home-footer-logo"
            />

            <p>
              Connect • Create • Grow
            </p>
          </div>


          <div className="home-footer-links">
            <Link to="/support">Support</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            <Link to="/monetization-policy">Monetization Policy</Link>
            <Link to="/refund-policy">Refund Policy</Link>
            <Link to="/cancellation-policy">Cancellation Policy</Link>
            <Link to="/copyright-policy">Copyright Policy</Link>
            <Link to="/community-guidelines">Community Guidelines</Link>
          </div>


          <div className="home-footer-copy">
            © 2026 GENZES. All Rights Reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}