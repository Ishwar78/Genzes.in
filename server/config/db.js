const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dns = require("dns");
const Admin = require("../module/Admin");

// Fix for Node.js SRV DNS lookup on Windows
try {
  dns.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1"]);
} catch (e) {
  console.warn("DNS server setup warning:", e.message);
}

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      serverSelectionTimeoutMS: 8000,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);

    // Seed default admin if not exists
    await seedAdmin();
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    console.log("ℹ️ Note: Check internet connection or IP whitelist on MongoDB Atlas.");
  }
};

const seedAdmin = async () => {
  try {
    const adminEmail = "genzescom@gmail.com";
    const defaultPassword = "Genzes@1234@#";

    let admin = await Admin.findOne({ email: adminEmail });

    if (!admin) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(defaultPassword, salt);

      admin = await Admin.create({
        name: "GenZes Admin",
        email: adminEmail,
        password: hashedPassword,
        role: "superadmin",
      });

      console.log(`👤 Default Admin created successfully: ${adminEmail}`);
    } else {
      // Ensure password is up to date with Genzes@1234@#
      const isMatch = await bcrypt.compare(defaultPassword, admin.password);
      if (!isMatch) {
        const salt = await bcrypt.genSalt(10);
        admin.password = await bcrypt.hash(defaultPassword, salt);
        await admin.save();
        console.log(`🔑 Admin password updated to default: ${adminEmail}`);
      } else {
        console.log(`👤 Admin verified in database: ${adminEmail}`);
      }
    }
  } catch (error) {
    console.error(`⚠️ Error seeding admin: ${error.message}`);
  }
};

module.exports = connectDB;
