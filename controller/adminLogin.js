const Admin = require("../models/adminLogin");

const adminLogin = async (req, resp) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });
  if (admin) {
    if (admin.password === password) {
      resp.status(200).json({ message: "Admin login successfully" });
    } else {
      resp.status(400).json({ message: "Admin Login failed" });
    }
  }
};

module.exports = {adminLogin};
