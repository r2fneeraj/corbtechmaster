import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import leadRoutes from "./routes/leadRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("✅ Corbtech backend is running...");
});

app.use("/api/leads", leadRoutes);

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB connected");
        app.listen(PORT, () => console.log(`✅ Server running: http://localhost:${PORT}`));
    })
    .catch((err) => console.log("❌ MongoDB error:", err.message));
