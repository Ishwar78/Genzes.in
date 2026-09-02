import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiMail,
  FiPhone,
  FiUser,
  FiAtSign,
  FiMessageSquare,
  FiUploadCloud,
  FiCheckCircle,
  FiAlertCircle,
  FiX,
  FiHeadphones,
  FiShield,
  FiClock,
  FiCopy,
  FiCheck,
} from "react-icons/fi";
import { submitSupportTicket } from "../lib/api";
import "./SupportPage.css";

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    mobile: "",
    message: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [createdTicketId, setCreatedTicketId] = useState("");
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setErrorMsg("Please upload a valid image file (JPG, PNG, WEBP, GIF)");
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        setErrorMsg("File size must be under 10 MB");
        return;
      }
      setErrorMsg("");
      setSelectedFile(file);
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleCopyTicket = () => {
    if (createdTicketId) {
      navigator.clipboard.writeText(createdTicketId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    setCreatedTicketId("");

    if (!formData.name.trim()) {
      setErrorMsg("Please enter your full name");
      return;
    }

    if (!formData.email.trim()) {
      setErrorMsg("Please enter your email address");
      return;
    }

    if (!formData.username.trim()) {
      setErrorMsg("Please enter your GenZes username");
      return;
    }

    if (!formData.message.trim()) {
      setErrorMsg("Please enter your message or query");
      return;
    }

    if (!selectedFile) {
      setErrorMsg("Please attach a screenshot or image (Mandatory)");
      return;
    }

    try {
      setLoading(true);
      const dataToSend = new FormData();
      dataToSend.append("name", formData.name.trim());
      dataToSend.append("email", formData.email.trim());
      dataToSend.append("username", formData.username.trim());
      dataToSend.append("mobile", formData.mobile.trim());
      dataToSend.append("message", formData.message.trim());

      if (selectedFile) {
        dataToSend.append("image", selectedFile);
      }

      const res = await submitSupportTicket(dataToSend);
      const ticketNum = res.ticketId || res.support?.ticketId || "";
      setCreatedTicketId(ticketNum);
      setSuccessMsg(
        res.message ||
          "Your support request has been submitted successfully! We will get back to you shortly."
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        username: "",
        mobile: "",
        message: "",
      });
      removeFile();
    } catch (err) {
      setErrorMsg(
        err.message || "Failed to submit support request. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="support-page">
      <div className="support-container">

        {/* TOPBAR */}
        <header className="support-topbar">
          <Link to="/" className="support-back">
            <FiArrowLeft />
            Back to Home
          </Link>

          <Link to="/" className="support-brand">
            <img src="/logo.png" alt="GENZES" className="support-logo-img" />
          </Link>
        </header>

        {/* MAIN SPLIT CONTENT */}
        <div className="support-wrapper">

          {/* LEFT SIDE: INFO & HERO */}
          <aside className="support-info-card">
            <div className="support-badge">
              <FiHeadphones />
              <span>24/7 HELPDESK & SUPPORT</span>
            </div>

            <h1 className="support-title">
              How Can We <span>Help You?</span>
            </h1>

            <p className="support-desc">
              Have questions about your GenZes account, monetization, verification,
              or technical issues? Fill out the form and our support team will
              assist you promptly.
            </p>

            {/* QUICK CONTACT CHANNELS */}
            <div className="support-channels">
              <a href="mailto:info@genzes.in" className="support-channel-item">
                <div className="support-channel-icon email-icon">
                  <FiMail />
                </div>
                <div>
                  <small>Email Us Directly</small>
                  <strong>info@genzes.in</strong>
                </div>
              </a>

              <a href="tel:+919728919591" className="support-channel-item">
                <div className="support-channel-icon phone-icon">
                  <FiPhone />
                </div>
                <div>
                  <small>Call or WhatsApp</small>
                  <strong>+91 97289 19591</strong>
                </div>
              </a>
            </div>

            {/* TRUST HIGHLIGHTS */}
            <div className="support-highlights">
              <div className="highlight-item">
                <FiShield />
                <span>Fast & Secure Resolution</span>
              </div>
              <div className="highlight-item">
                <FiClock />
                <span>Quick Response Time</span>
              </div>
            </div>

            {/* DECORATIVE ARTWORK / GLOW */}
            <div className="support-glow support-glow--1" />
            <div className="support-glow support-glow--2" />
          </aside>

          {/* RIGHT SIDE: SUPPORT FORM */}
          <main className="support-form-card">
            <h2>Send Us a Message</h2>
            <p className="form-subtitle">
              Fill in your details below and attach screenshots if applicable.
            </p>

            {/* SUCCESS BANNER WITH TICKET NUMBER */}
            {createdTicketId ? (
              <div className="support-ticket-success-box">
                <div className="ticket-success-header">
                  <FiCheckCircle className="ticket-success-icon" />
                  <div>
                    <h3>Support Ticket Generated!</h3>
                    <p>{successMsg || "Your support inquiry has been submitted successfully."}</p>
                  </div>
                </div>

                <div className="ticket-id-display-card">
                  <span className="ticket-id-label">YOUR TICKET NUMBER</span>
                  <div className="ticket-id-value-row">
                    <span className="ticket-id-number">{createdTicketId}</span>
                    <button
                      type="button"
                      onClick={handleCopyTicket}
                      className={`ticket-copy-btn ${copied ? "copied" : ""}`}
                      title="Copy Ticket ID"
                    >
                      {copied ? (
                        <>
                          <FiCheck />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <FiCopy />
                          <span>Copy ID</span>
                        </>
                      )}
                    </button>
                  </div>
                  <small className="ticket-id-tip">
                    ✨ Save this ticket number for tracking. Our team will contact your email shortly.
                  </small>
                </div>
              </div>
            ) : successMsg ? (
              <div className="support-alert support-alert--success">
                <FiCheckCircle />
                <span>{successMsg}</span>
              </div>
            ) : null}

            {/* ERROR BANNER */}
            {errorMsg && (
              <div className="support-alert support-alert--error">
                <FiAlertCircle />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="support-form">

              {/* NAME & EMAIL ROW */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    Full Name <span className="req">*</span>
                  </label>
                  <div className="input-wrapper">
                    <FiUser className="input-icon" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email Address <span className="req">*</span>
                  </label>
                  <div className="input-wrapper">
                    <FiMail className="input-icon" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* USERNAME & MOBILE ROW */}
              <div className="form-row">
                 <div className="form-group">
                   <label htmlFor="username">
                     GenZes Username <span className="req">*</span>
                   </label>
                   <div className="input-wrapper">
                     <FiAtSign className="input-icon" />
                     <input
                       type="text"
                       id="username"
                       name="username"
                       placeholder="e.g. rahul_official"
                       value={formData.username}
                       onChange={handleInputChange}
                       required
                     />
                   </div>
                 </div>

                 <div className="form-group">
                   <label htmlFor="mobile">
                     Mobile Number <span className="optional">(Optional)</span>
                   </label>
                   <div className="input-wrapper">
                     <FiPhone className="input-icon" />
                     <input
                       type="tel"
                       id="mobile"
                       name="mobile"
                       placeholder="e.g. +91 98765 43210"
                       value={formData.mobile}
                       onChange={handleInputChange}
                     />
                   </div>
                 </div>
               </div>

               {/* MESSAGE */}
               <div className="form-group">
                 <label htmlFor="message">
                   Your Message / Query <span className="req">*</span>
                 </label>
                 <div className="input-wrapper input-wrapper--textarea">
                   <FiMessageSquare className="input-icon textarea-icon" />
                   <textarea
                     id="message"
                     name="message"
                     rows={4}
                     placeholder="Describe your issue, feedback, or question in detail..."
                     value={formData.message}
                     onChange={handleInputChange}
                     required
                   />
                 </div>
               </div>

               {/* IMAGE / FILE ATTACHMENT */}
               <div className="form-group">
                 <label>
                   Attach Screenshot / Image <span className="req">*</span>
                 </label>

                {!previewUrl ? (
                  <div
                    className="upload-dropzone"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <FiUploadCloud className="upload-icon" />
                    <div className="upload-text">
                      <strong>Click to upload image</strong> or drag and drop
                    </div>
                    <small>Supports JPG, PNG, WEBP, GIF (Max: 10 MB)</small>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                  </div>
                ) : (
                  <div className="preview-container">
                    <img
                      src={previewUrl}
                      alt="Upload preview"
                      className="preview-image"
                    />
                    <div className="preview-info">
                      <span className="preview-name">
                        {selectedFile?.name || "Attached Image"}
                      </span>
                      <small>
                        {(
                          (selectedFile?.size || 0) /
                          (1024 * 1024)
                        ).toFixed(2)}{" "}
                        MB
                      </small>
                    </div>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="preview-remove-btn"
                      title="Remove image"
                    >
                      <FiX />
                    </button>
                  </div>
                )}
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="support-submit-btn"
              >
                {loading ? (
                  <>
                    <span className="spinner" />
                    Submitting...
                  </>
                ) : (
                  "Submit Support Request"
                )}
              </button>

            </form>
          </main>

        </div>

        {/* FOOTER */}
        <footer className="support-footer">
          <div className="support-footer-links">
            <Link to="/">Home</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
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
