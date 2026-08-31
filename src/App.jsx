import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsConditions from "./pages/TermsConditions.jsx";
import MonetizationPolicy from "./pages/MonetizationPolicy.jsx";
import RefundPolicy from "./pages/RefundPolicy.jsx";
import CancellationPolicy from "./pages/CancellationPolicy.jsx";
import CopyrightPolicy from "./pages/CopyrightPolicy.jsx";
import CommunityGuidelines from "./pages/CommunityGuidelines.jsx";
import SupportPage from "./pages/SupportPage.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

import ScrollToTop from "./components/ScrollToTop.jsx";

export const APP_ROUTES = {
  home: '/',
  support: '/support',
  adminLogin: '/admin/gengeslogin',
  adminDashboard: '/admin/dashboard',
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path={APP_ROUTES.home} element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/monetization-policy" element={<MonetizationPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/cancellation-policy" element={<CancellationPolicy />} />
        <Route path="/copyright-policy" element={<CopyrightPolicy />} />
        <Route path="/community-guidelines" element={<CommunityGuidelines />} />
        <Route path="/support" element={<SupportPage />} />

        {/* ADMIN ROUTES */}
        <Route path="/admin/gengeslogin" element={<AdminLogin />} />
        <Route path="/admin/genzeslogin" element={<AdminLogin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
