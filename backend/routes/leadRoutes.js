import express from "express";
import Lead from "../models/Lead.js";

const router = express.Router();

/* ✅ Save lead API */
router.post("/", async (req, res) => {
    try {
        const { name, email, phone, service, request } = req.body;

        if (!name || !email || !phone || !service || !request) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        // prevent duplicate leads
        const existing = await Lead.findOne({ $or: [{ phone }, { email }] });
        if (existing) {
            return res.status(409).json({
                success: false,
                message: "Lead already exists with same phone/email."
            });
        }

        const lead = await Lead.create({ name, email, phone, service, request });

        res.json({
            success: true,
            message: "Lead saved successfully ✅",
            lead
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

/* ✅ Get all leads (admin use later) */
router.get("/", async (req, res) => {
    try {
        const leads = await Lead.find().sort({ createdAt: -1 });
        res.json({ success: true, leads });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

export default router;
