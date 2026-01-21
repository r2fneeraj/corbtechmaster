import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        phone: String,
        service: String,
        request: String,
        message: String,
    },
    { timestamps: true }
);

const Lead = mongoose.models.Lead || mongoose.model("Lead", leadSchema);

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

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") return res.status(200).end();

    try {
        await connectDB();

        // ✅ GET: Admin will use this
        if (req.method === "GET") {
            const leads = await Lead.find().sort({ createdAt: -1 });
            return res.status(200).json({ success: true, leads });
        }

        // ✅ POST: Chatbot will use this
        if (req.method === "POST") {
            const { name, email, phone, service, request, message } = req.body;

            if (!phone || !email) {
                return res.status(400).json({
                    success: false,
                    message: "phone and email required",
                });
            }

            const lead = await Lead.create({
                name: name || "Unknown",
                email,
                phone,
                service: service || "Chatbot",
                request: request || message || "No message",
                message: message || "",
            });

            return res.status(200).json({ success: true, lead });
        }

        return res.status(405).json({ error: "Method not allowed" });
    } catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
}
