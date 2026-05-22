const express = require("express");
const cors = require("cors");
const usersRoutes = require("./routes/users.routes");
const env = require("dotenv");

env.config();

const app = express();

app.use(
  cors({
    exposedHeaders: ["Content-Range"],
  }),
);
app.use(express.json());

app.use("/health", (req, res) => res.status(200).json({ status: "OK" }));
app.use("/users", usersRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
