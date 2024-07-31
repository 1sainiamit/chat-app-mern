import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDb.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()) //to parse the incoming requests with JSON payloads (from req.body)

app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("Welcome to chat app");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is Listening at PORT ${PORT}`);
});