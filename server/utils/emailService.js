const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587", 10),
    secure: process.env.SMTP_PORT === "465", // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

/**
 * Send an email to the user when their support ticket status is updated
 * @param {Object} support - Support ticket mongoose document
 * @param {String} newStatus - 'new' | 'in_progress' | 'resolved'
 * @param {String} customNote - Optional note from admin
 */
const sendStatusUpdateEmail = async (support, newStatus, customNote = "") => {
  try {
    if (!support || !support.email) {
      console.warn("No recipient email found for support ticket status update");
      return false;
    }

    const transporter = createTransporter();
    const ticketId =
      support.ticketId ||
      `GZ-${support._id.toString().slice(-6).toUpperCase()}`;

    let statusLabel = "New Inquiry";
    let statusColor = "#ff36c9";
    let statusBg = "#2a1024";
    let subject = `[GenZes Helpdesk] Ticket #${ticketId} Status Update`;
    let mainHeading = "Ticket Status Updated";
    let description =
      "We have an update regarding your support inquiry on GenZes.";

    if (newStatus === "in_progress") {
      statusLabel = "In Progress / Under Review";
      statusColor = "#ffb300";
      statusBg = "#2e2105";
      subject = `[GenZes Helpdesk] Ticket #${ticketId} is Under Review`;
      mainHeading = "Your Ticket is Under Review";
      description =
        "Our support specialists have started reviewing your issue. We are investigating and will get back to you with a resolution soon.";
    } else if (newStatus === "resolved") {
      statusLabel = "Resolved";
      statusColor = "#74ea00";
      statusBg = "#122602";
      subject = `[GenZes Helpdesk] Ticket #${ticketId} has been Resolved 🎉`;
      mainHeading = "Your Ticket has been Resolved";
      description =
        "Good news! Your support inquiry has been successfully resolved by the GenZes support team.";
    } else if (newStatus === "new") {
      statusLabel = "New / Queued";
      statusColor = "#ff36c9";
      statusBg = "#2a1024";
      subject = `[GenZes Helpdesk] Ticket #${ticketId} Received`;
      mainHeading = "Ticket in Queue";
      description =
        "Your ticket has been reopened or placed in our active queue for review.";
    }

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #0b0c10;
      color: #e1e3ea;
      margin: 0;
      padding: 0;
    }
    .email-container {
      max-width: 600px;
      margin: 30px auto;
      background-color: #12131a;
      border: 1px solid #232433;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 10px 40px rgba(0,0,0,0.6);
    }
    .email-header {
      background: linear-gradient(135deg, #181924, #0c0d12);
      padding: 30px 20px 24px;
      text-align: center;
      border-bottom: 1px solid #232433;
    }
    .brand-logo-img {
      width: 190px;
      max-width: 80%;
      height: auto;
      display: block;
      margin: 0 auto 6px;
      filter: drop-shadow(0 0 12px rgba(255, 0, 220, 0.25));
    }
    .brand-sub {
      color: #ff36c9;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 3px;
      margin-top: 4px;
    }
    .email-body {
      padding: 35px 30px;
    }
    .status-badge {
      display: inline-block;
      padding: 6px 14px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 700;
      color: ${statusColor};
      background-color: ${statusBg};
      border: 1px solid ${statusColor}40;
      margin-bottom: 20px;
    }
    h2 {
      margin: 0 0 12px;
      color: #ffffff;
      font-size: 22px;
      font-weight: 700;
    }
    p {
      color: #b0b4c6;
      font-size: 15px;
      line-height: 1.6;
      margin: 0 0 20px;
    }
    .ticket-details-box {
      background-color: #0b0c10;
      border: 1px solid #232433;
      border-radius: 12px;
      padding: 20px;
      margin: 25px 0;
    }
    .detail-row {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      border-bottom: 1px solid #1a1b26;
      font-size: 14px;
    }
    .detail-row:last-child {
      border-bottom: none;
    }
    .detail-label {
      color: #8c90a2;
      font-weight: 600;
    }
    .detail-value {
      color: #ffffff;
      font-weight: 700;
    }
    .ticket-id-highlight {
      font-family: monospace;
      color: #00d0ff;
      background: #00d0ff15;
      padding: 2px 8px;
      border-radius: 6px;
      border: 1px solid #00d0ff30;
    }
    .message-excerpt {
      background-color: #171822;
      border-left: 3px solid #ff36c9;
      padding: 12px 16px;
      margin: 15px 0 0;
      border-radius: 4px 8px 8px 4px;
      color: #cbd0e2;
      font-size: 13.5px;
      line-height: 1.5;
    }
    .admin-note-box {
      background-color: #19202c;
      border: 1px solid #00d0ff40;
      border-radius: 10px;
      padding: 16px;
      margin: 20px 0;
    }
    .admin-note-box strong {
      color: #00d0ff;
      display: block;
      margin-bottom: 6px;
      font-size: 13px;
    }
    .email-footer {
      background-color: #0c0d12;
      padding: 24px 30px;
      text-align: center;
      border-top: 1px solid #1c1d28;
      font-size: 12px;
      color: #717588;
    }
    .email-footer a {
      color: #00d0ff;
      text-decoration: none;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="email-container">
    
    <!-- HEADER WITH OFFICIAL LOGO -->
    <div class="email-header">
      <img src="cid:genzes_logo" alt="GENZES Logo" class="brand-logo-img" />
      <div class="brand-sub">SUPPORT & HELPDESK</div>
    </div>

    <!-- BODY -->
    <div class="email-body">
      <div class="status-badge">${statusLabel}</div>
      <h2>${mainHeading}</h2>
      <p>Hello <strong>${support.name}</strong>,</p>
      <p>${description}</p>

      ${
        customNote
          ? `
        <div class="admin-note-box">
          <strong>💬 Message from Support Specialist:</strong>
          <p style="margin: 0; color: #e1e3ed; font-size: 14px;">${customNote}</p>
        </div>
        `
          : ""
      }

      <div class="ticket-details-box">
        <div class="detail-row">
          <span class="detail-label">Ticket ID:</span>
          <span class="detail-value"><span class="ticket-id-highlight">${ticketId}</span></span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Current Status:</span>
          <span class="detail-value" style="color: ${statusColor};">${statusLabel}</span>
        </div>
        ${
          support.username
            ? `
        <div class="detail-row">
          <span class="detail-label">GenZes Username:</span>
          <span class="detail-value">@${support.username}</span>
        </div>
        `
            : ""
        }
        <div class="detail-row">
          <span class="detail-label">Registered Email:</span>
          <span class="detail-value">${support.email}</span>
        </div>

        <div style="margin-top: 14px;">
          <span class="detail-label" style="font-size: 12px; text-transform: uppercase;">Your Submitted Query:</span>
          <div class="message-excerpt">
            "${support.message}"
          </div>
        </div>
      </div>

      <p style="font-size: 13.5px; color: #8e92a4;">
        If you have any further questions or details to add, simply reply to this email or visit our helpdesk on 
        <a href="https://genzes.in/support" style="color: #ff36c9; font-weight: 600;">genzes.in/support</a>.
      </p>
    </div>

    <!-- FOOTER -->
    <div class="email-footer">
      <p style="margin: 0 0 6px;">© 2026 GenZes. All Rights Reserved.</p>
      <p style="margin: 0;">Connect • Create • Grow | <a href="https://genzes.in">www.genzes.in</a></p>
    </div>

  </div>
</body>
</html>
    `;

    // Attach logo via CID for reliable display in all email clients
    let logoPath = path.join(__dirname, "../assets/logo.png");
    if (!fs.existsSync(logoPath)) {
      logoPath = path.join(__dirname, "../../public/logo.png");
    }

    const attachments = [];

    if (fs.existsSync(logoPath)) {
      attachments.push({
        filename: "logo.png",
        path: logoPath,
        cid: "genzes_logo",
      });
    }

    const mailOptions = {
      from: `"GenZes Support" <${process.env.SMTP_USER}>`,
      to: support.email,
      subject: subject,
      html: htmlContent,
      attachments,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(
      `✅ Status update email with embedded logo sent to ${support.email} for Ticket ${ticketId}: MessageId ${info.messageId}`
    );
    return true;
  } catch (error) {
    console.error("❌ Error sending status update email:", error);
    return false;
  }
};

module.exports = {
  sendStatusUpdateEmail,
};
