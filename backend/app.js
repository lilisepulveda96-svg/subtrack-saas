const express = require("express");
const cors = require("cors");
const usersRoutes = require("./routes/users.routes");

const app = express();

app.use(
  cors({
    exposedHeaders: ["Content-Range"],
  }),
);
app.use(express.json());

app.use("/health", (req, res) => res.status(200).json({ status: "OK" }));
app.use("/users", usersRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
