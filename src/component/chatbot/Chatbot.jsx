import { useEffect, useMemo, useRef, useState } from "react";
import "./chatbot.css";
import { SERVICES, SERVICE_INFO } from "./chatbotData";
import { MessageCircle, X } from "lucide-react";

export default function Chatbot() {
    const [open, setOpen] = useState(false);

    // steps:
    // service -> decision -> requirement -> name -> phone -> email -> done
    const [step, setStep] = useState("service");

    const [lead, setLead] = useState({
        service: "",
        request: "",
        name: "",
        phone: "",
        email: ""
    });

    const [input, setInput] = useState("");

    const [messages, setMessages] = useState([
        {
            from: "bot",
            text: "Hello 👋 Welcome to Corbtech.\nPlease choose a service below to continue."
        }
    ]);

    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, open]);

    const addBot = (text) => setMessages((m) => [...m, { from: "bot", text }]);
    const addUser = (text) => setMessages((m) => [...m, { from: "user", text }]);

    const serviceOptions = useMemo(() => SERVICES, []);

    // ✅ API call function (IMPORTANT: should be outside validation)
    const saveLeadToDB = async (finalLead) => {
        try {
            const res = await fetch("http://localhost:5000/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(finalLead)
            });

            return await res.json();
        } catch (err) {
            return { success: false, message: "Server not reachable" };
        }
    };

    // --------- Utils ----------
    const detectServiceFromText = (text) => {
        const t = text.trim().toLowerCase();

        if (t.includes("web") || t.includes("website")) return "Web Development";
        if (t.includes("app") || t.includes("android") || t.includes("ios")) return "App Development";
        if (t.includes("ui") || t.includes("ux") || t.includes("figma")) return "UI/UX Design";
        if (t.includes("seo") || t.includes("marketing")) return "SEO / Digital Marketing";
        if (t.includes("support") || t.includes("maintenance") || t.includes("bug"))
            return "Maintenance & Support";

        const exact = SERVICES.find((s) => s.toLowerCase() === t);
        return exact || "";
    };

    const isValidPhone = (phone) => {
        const p = phone.replace(/\s+/g, "");
        return /^(\+91)?[6-9]\d{9}$/.test(p);
    };

    const isValidEmail = (email) => {
        const e = email.trim();
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
    };

    // --------- Service Selection ----------
    const handleSelectService = (service) => {
        addUser(service);

        setLead((l) => ({ ...l, service }));
        setStep("decision");

        const info = SERVICE_INFO[service];

        addBot(
            `Thank you for selecting ${info.title} ✅\n${info.description}\n\nWould you like to view available options?`
        );
    };

    // --------- Options ----------
    const handleYesShowOptions = () => {
        const options = SERVICE_INFO[lead.service]?.options || [];
        if (!options.length) return;

        addBot("Sure 😊 Please select one option below:");
        setStep("requirement");

        // show option buttons
        setMessages((prev) => [...prev, { from: "bot_options", options }]);
    };

    const handleOptionPick = (op) => {
        addUser(op);
        setLead((l) => ({ ...l, request: op }));
        addBot("Thank you. May I know your name? 😊");
        setStep("name");
    };

    // --------- Send handler ----------
    const handleSend = async () => {
        const text = input.trim();
        if (!text) return;

        addUser(text);
        setInput("");

        const low = text.toLowerCase();

        // Support keywords anytime
        if (
            low.includes("support") ||
            low.includes("agent") ||
            low.includes("call") ||
            low.includes("whatsapp")
        ) {
            addBot(
                "Sure 😊 You can contact our support team:\n📞 Call: +91XXXXXXXXXX\n💬 WhatsApp: +91XXXXXXXXXX"
            );
            return;
        }

        // If user typed service without clicking
        if (step === "service") {
            const detected = detectServiceFromText(text);
            if (detected) {
                handleSelectService(detected);
            } else {
                addBot("To continue, please choose a service from the options below 👇");
            }
            return;
        }

        // decision step (yes/no)
        if (step === "decision") {
            if (low === "yes" || low === "y") {
                handleYesShowOptions();
            } else {
                // treat as custom requirement
                setLead((l) => ({ ...l, request: text }));
                addBot("No problem 🙂 Please type your requirement in a few words.");
                setStep("requirement");
            }
            return;
        }

        // requirement
        if (step === "requirement") {
            setLead((l) => ({ ...l, request: text }));
            addBot("Thank you. May I know your name? 😊");
            setStep("name");
            return;
        }

        // name
        if (step === "name") {
            if (text.length < 2) {
                addBot("Please enter a valid name 🙂");
                return;
            }
            setLead((l) => ({ ...l, name: text }));
            addBot("Please share your contact number (WhatsApp preferred) 📱");
            setStep("phone");
            return;
        }

        // phone
        if (step === "phone") {
            if (!isValidPhone(text)) {
                addBot("Please enter a valid 10-digit mobile number 🙂");
                return;
            }
            setLead((l) => ({ ...l, phone: text }));
            addBot("Please share your email ID (for project updates) 📩");
            setStep("email");
            return;
        }

        // email
        if (step === "email") {
            if (!isValidEmail(text)) {
                addBot("Please enter a valid email ID (example: name@gmail.com) 🙂");
                return;
            }

            const finalLead = { ...lead, email: text };
            setLead(finalLead);

            addBot("Submitting your request… ⏳");

            const result = await saveLeadToDB(finalLead);

            if (result.success) {
                addBot(
                    `Perfect ✅ Thank you, ${finalLead.name}.\nYour request has been submitted successfully. Our team will contact you shortly.`
                );
                setStep("done");
            } else {
                addBot(
                    `⚠️ Sorry, we could not submit your request right now.\nPlease try again after some time.`
                );
            }

            return;
        }

        addBot("If you need any assistance, please type support 🙂");
    };

    return (
        <>
            <button className="cb-toggle" onClick={() => setOpen((v) => !v)}>
                <MessageCircle size={24} />
            </button>

            {open && (
                <div className="cb-box">
                    <div className="cb-header">
                        <div>
                            <div className="cb-title">Corbtech Assistant</div>
                            <div className="cb-sub">Project Inquiry Support</div>
                        </div>

                        <button className="cb-close" onClick={() => setOpen(false)}>
                            <X size={18} />
                        </button>
                    </div>

                    <div className="cb-body">
                        {/* ✅ Messages FIRST */}
                        {messages.map((m, idx) => {
                            if (m.from === "bot_options") {
                                return (
                                    <div className="cb-options" key={idx}>
                                        {m.options.map((op) => (
                                            <button
                                                key={op}
                                                className="cb-btn"
                                                onClick={() => handleOptionPick(op)}
                                            >
                                                {op}
                                            </button>
                                        ))}
                                    </div>
                                );
                            }

                            return (
                                <div key={idx} className={`msg ${m.from}`}>
                                    {m.text}
                                </div>
                            );
                        })}

                        {/* ✅ Service buttons BELOW greeting */}
                        {step === "service" && (
                            <div className="cb-options">
                                {serviceOptions.map((s) => (
                                    <button key={s} className="cb-btn" onClick={() => handleSelectService(s)}>
                                        {s}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* ✅ Decision buttons after service info */}
                        {step === "decision" && (
                            <div className="cb-options">
                                <button className="cb-btn" onClick={handleYesShowOptions}>
                                    ✅ Yes, show options
                                </button>

                                <button
                                    className="cb-btn"
                                    onClick={() => {
                                        addBot("No problem 🙂 Please type your requirement in a few words.");
                                        setStep("requirement");
                                    }}
                                >
                                    ✍️ No, I will type my requirement
                                </button>
                            </div>
                        )}

                        <div ref={bottomRef} />
                    </div>

                    <div className="cb-input">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type here and press Enter..."
                            onKeyDown={(e) => {
                                if (e.key === "Enter") handleSend();
                            }}
                        />
                        <button onClick={handleSend}>Send</button>
                    </div>
                </div>
            )}
        </>
    );
}
