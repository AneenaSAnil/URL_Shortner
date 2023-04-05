const mongoose = require("mongoose");
async function connectDB(url) {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected Successfully");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

module.exports = {
  connectDB,
};
