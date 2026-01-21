import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";
import "./Contact.css";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isValidPhone = (phone) => {
    const p = phone.replace(/\s+/g, "");
    return /^(\+91)?[6-9]\d{9}$/.test(p);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMsg("");

    // ✅ validation
    if (!form.name || !form.email || !form.phone || !form.message) {
      setStatusMsg("⚠️ Please fill all required fields.");
      return;
    }

    if (!isValidPhone(form.phone)) {
      setStatusMsg("⚠️ Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        // ✅ match backend: name,email,phone,service,request
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.subject ? form.subject : "Contact Page",
          request: form.message,
          source: "contact_page"
        })
      });

      const data = await res.json();

      if (data.success) {
        setStatusMsg("✅ Message sent successfully! Our team will contact you soon.");
        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      } else {
        setStatusMsg("❌ Failed: " + (data.message || "Something went wrong"));
      }
    } catch (err) {
      setStatusMsg("❌ Server not reachable. Please start backend.");
    }

    setLoading(false);
  };

  return (
    <motion.div className="contact-page" initial="hidden" animate="visible">
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <motion.div
          className="container contact-hero-content"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeIn} className="text-center">
            <h1 className="contact-hero-title">
              Get in <span className="highlight">Touch</span>
            </h1>
            <motion.p className="contact-hero-subtitle" variants={fadeIn}>
              Let's build innovative tech solutions together.
            </motion.p>
            <motion.div className="contact-hero-divider" variants={fadeIn}></motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="container">
          <motion.div className="section-header text-center mb-12" variants={fadeIn}>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              We’d love to hear from you. Send us a message and we’ll respond as soon as possible.
            </p>
            <div className="section-divider"></div>
          </motion.div>

          <div className="contact-grid">
            {/* LEFT INFO */}
            <motion.div
              className="contact-info"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="contact-info-inner">
                <h3>Contact Information</h3>
                <p className="info-description">
                  Reach out to CorbTech for innovative tech solutions and collaborations.
                </p>

                <div className="info-items">
                  <div className="info-item">
                    <div className="info-icon">
                      <FaEnvelope />
                    </div>
                    <div className="info-content">
                      <h4>Email Us</h4>
                      <a href="mailto:contact@corbtech.in">contact@corbtech.in</a>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <FaPhoneAlt />
                    </div>
                    <div className="info-content">
                      <h4>Call Us</h4>
                      <a href="tel:+919958879897">+91 9958879897</a>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="info-content">
                      <h4>Location</h4>
                      <span>
                        D-713, 1st Floor, Chittaranjan Park, New Delhi, 110019, India
                      </span>
                    </div>
                  </div>
                </div>

                <div className="social-links">
                  <p>Follow Us:</p>
                  <div className="social-icons">
                    <a
                      href="https://linkedin.com/company/corbtech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="https://twitter.com/corbtech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT FORM */}
            <motion.div
              className="contact-form-container"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="form-card">
                <h3>Send Us a Message</h3>

                {/* ✅ Status message */}
                {statusMsg && (
                  <p style={{ marginBottom: "12px", fontWeight: 700 }}>
                    {statusMsg}
                  </p>
                )}

                {/* ✅ form connected to backend */}
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="form-control"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      className="form-control"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* ✅ Added phone */}
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="9876543210"
                      required
                      className="form-control"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Web Development / App Development / etc."
                      className="form-control"
                      value={form.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Type your message here..."
                      required
                      className="form-control"
                      value={form.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={loading}
                    style={{ opacity: loading ? 0.7 : 1 }}
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <span className="btn-icon">→</span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
