const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, DevOps!");
});

module.exports = app; // Export the app for testing

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
