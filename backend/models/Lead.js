import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true, lowercase: true },
        phone: { type: String, required: true, trim: true },
        service: { type: String, required: true, trim: true },
        request: { type: String, required: true, trim: true },

        source: { type: String, default: "chatbot" }
    },
    { timestamps: true }
);

export default mongoose.model("Lead", leadSchema);
