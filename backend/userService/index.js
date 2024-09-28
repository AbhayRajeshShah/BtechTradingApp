const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
const helloRoutes = require("./routes/hello.route");
const userRoutes = require("./routes/user.route");
app.use("/api/", helloRoutes);
app.use("/api/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}`);
});
