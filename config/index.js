require("dotenv").config();

module.exports = {
  mongoUrl: process.env.MONGO_URL,
  sendinBlueUser: process.env.SENDIN_BLUE_USER,
  sendinBluePass:process.env.SENDIN_BLUE_PASS,
};
