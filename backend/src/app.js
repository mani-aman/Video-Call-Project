import express from "express";
import { createServer } from "node:http";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/users.routes.js";
import { connectToSocket } from "./controllers/socketManager.js";

dotenv.config();

const app = express();
const server = createServer(app);

// Socket.IO
connectToSocket(server);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/users", userRoutes);

// Port
const PORT = process.env.PORT || 8000;

// MongoDB + Server Start
const startServer = async () => {
  try {
    const connectionDb = await mongoose.connect(process.env.MONGO_URI);

    // console.log(`✅ MongoDB Connected: ${connectionDb.connection.host}`);
    console.log("✅ MongoDB Connected");

    server.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:");
    console.error(error.message);
    process.exit(1);
  }
};

startServer();
