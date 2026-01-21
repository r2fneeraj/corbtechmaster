import mongoose from "mongoose";

// ✅ Lead schema (simple)
const leadSchema = new mongoose.Schema(
    {
        phone: String,
        email: String,
        message: String,
    },
    { timestamps: true }
);

const Lead = mongoose.models.Lead || mongoose.model("Lead", leadSchema);

// ✅ DB caching (important for Vercel)
let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

async function connectDB() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(process.env.MONGO_URI);
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

// ✅ Main API handler
export default async function handler(req, res) {
    // ✅ CORS headers (safe)
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // ✅ Preflight request support
    if (req.method === "OPTIONS") return res.status(200).end();

    // ✅ Only allow POST
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Only POST allowed" });
    }

    try {
        await connectDB();

        const { phone, email, message } = req.body;

        if (!phone || !email) {
            return res.status(400).json({ error: "phone and email required" });
        }

        const lead = await Lead.create({ phone, email, message });

        return res.status(200).json({ success: true, lead });
    } catch (err) {
        return res.status(500).json({ success: false, error: err.message });
    }
}
