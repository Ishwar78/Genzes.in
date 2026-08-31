const jwt = require("jsonwebtoken");
const Admin = require("../module/Admin");

const protectAdmin = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || "genzes_super_secure_jwt_secret_key_2026_@#"
      );

      req.admin = await Admin.findById(decoded.id).select("-password");

      if (!req.admin) {
        return res.status(401).json({
          success: false,
          message: "Admin not found or unauthorized",
        });
      }

      next();
    } catch (error) {
      console.error("JWT verification failed:", error.message);
      return res.status(401).json({
        success: false,
        message: "Invalid or expired token. Please login again.",
      });
    }
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No token provided. Authorization denied.",
    });
  }
};

module.exports = { protectAdmin };
