import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
    {
        phone: String,
        email: String,
        message: String,
    },
    { timestamps: true }
);

const Lead = mongoose.models.Lead || mongoose.model("Lead", leadSchema);

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

async function connectDB() {
    if (cached.conn) return cached.conn;
    if (!cached.promise) cached.promise = mongoose.connect(process.env.MONGO_URI);
    cached.conn = await cached.promise;
    return cached.conn;
}

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") return res.status(200).end();

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Only POST allowed" });
    }

    try {
        await connectDB();

        const { phone, email, message } = req.body;

        if (!phone || !email) {
            return res.status(400).json({ success: false, message: "phone and email required" });
        }

        const lead = await Lead.create({ phone, email, message: message || "" });

        return res.status(200).json({ success: true, lead });
    } catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
}
