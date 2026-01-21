import React, { useEffect } from "react";
import "./About.css";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaUsers,
  FaShieldAlt,
  FaMountain,
  FaLinkedin,
  FaTwitter,
  FaEnvelope
} from "react-icons/fa";


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="about-page"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      {/* HERO */}
      {/* <section className="about-hero">
        <div className="about-hero-content">
          <motion.h1 variants={fadeUp}>
            About <span className="highlight">CorbTech</span>
          </motion.h1>

          <motion.p className="hero-subtitle" variants={fadeUp}>
            Where <span className="highlight">travel</span> meets{" "}
            <span className="highlight">technology</span>.
            <br />
            Empowering startups & crafting unforgettable Himalayan experiences.
          </motion.p>
        </div>
      </section> */}



      {/* HERO */}
      <section className="about-hero">
        {/* Animated Background Elements */}
        <div className="hero-bg-elements">
          <div className="bg-shape shape-1" />
          <div className="bg-shape shape-2" />
          <div className="bg-shape shape-3" />
          <div className="bg-shape shape-4" />
          <div className="bg-shape shape-5" />
          <div className="bg-grid" />
          <div className="bg-gradient-overlay" />
        </div>

        <div className="about-hero-content">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
          >
            About <span className="highlight">CorbTech</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            variants={fadeUp}
            transition={{ delay: 0.15 }}
          >
            Where <span className="highlight">travel</span> meets{" "}
            <span className="highlight">technology</span>.
            <br />
            Empowering startups & crafting unforgettable Himalayan experiences.
          </motion.p>

          <motion.div
            className="hero-actions"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
          >
            <button className="btn btn-primary">
              <span>Get in Touch</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn btn-outline">Explore Services</button>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="hero-decorative">
          <div className="decorative-circle circle-1" />
          <div className="decorative-circle circle-2" />
          <div className="decorative-dots" />
        </div>
      </section>


      {/* STORY */}
      <section className="about-description">
        <div className="container">
          <motion.div className="section-header" variants={fadeUp}>
            <h2>
              Our <span className="highlight">Story</span>
            </h2>
            <div className="underline" />
          </motion.div>

          <div className="story-grid">
            {/* LEFT IMAGE */}
            <motion.div
              className="story-image"
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="/images/about-story.jpg"
                alt="CorbTech Story"
              />
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div className="content-wrapper" variants={fadeUp}>
              <p className="lead">
                CorbTech was born from a simple idea — technology and adventure
                should grow together.
              </p>

              <p>
                Founded in October 2024, CorbTech bridges the gap between
                innovative digital solutions and immersive tourism experiences.
                From building scalable tech products for startups to managing
                safari and travel operations in Garhwal and Kumaon, we blend
                precision with passion.
              </p>

              <p>
                Our mission is to help startups launch faster, operate smarter,
                and explore further — while creating meaningful travel memories
                in the heart of the Himalayas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="about-team">
        <div className="container">
          <motion.div className="section-header" variants={fadeUp}>
            <h2>
              Meet the <span className="highlight">Team</span>
            </h2>
            <div className="underline" />
            <p className="section-subtitle">
              The people building CorbTech
            </p>
          </motion.div>

          <div className="team-cards">
            {[
              { name: "Suraj Bhatt", role: "Co-founder & COO" },
              { name: "Pranav Mandvikar", role: "Co-founder & CTO" },
              { name: "Chandan Soni", role: "Co-founder & Technical Director" },
              { name: "Nirvana Bannergee", role: "Co-founder & CEO" },
              { name: "Himanshu Chavan", role: "Senior Graphic Designer" }
            ].map((m, i) => (
              <motion.div
                key={i}
                className="team-card"
                variants={fadeUp}
                whileHover={{ y: -12 }}
              >
                <div className="team-image">
                  {m.name.split(" ").map(n => n[0]).join("")}
                </div>

                <h3>{m.name}</h3>
                <p className="role">{m.role}</p>

                <div className="social-links">
                  <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                  <a href="#" aria-label="Twitter"><FaTwitter /></a>
                  <a href="#" aria-label="Email"><FaEnvelope /></a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <div className="container">
          <motion.div className="section-header" variants={fadeUp}>
            <h2>
              Our <span className="highlight">Values</span>
            </h2>
            <div className="underline" />
            <p className="section-subtitle">
              What drives everything we do
            </p>
          </motion.div>

          <div className="values-grid">
            {[
              {
                icon: <FaRocket />,
                title: "Innovation",
                text: "We build future-ready solutions using modern technology."
              },
              {
                icon: <FaUsers />,
                title: "Customer First",
                text: "Every product and journey is designed around people."
              },
              {
                icon: <FaShieldAlt />,
                title: "Reliability",
                text: "Consistency, transparency, and trust define our work."
              },
              {
                icon: <FaMountain />,
                title: "Adventure",
                text: "We celebrate exploration — in code and in nature."
              }
            ].map((v, i) => (
              <motion.div
                key={i}
                className="value-card"
                variants={fadeUp}
                whileHover={{ y: -10 }}
              >
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Let’s Build or Explore Together</h2>
          <p>
            Whether you’re a startup or an explorer — CorbTech is your partner.
          </p>

          <div className="cta-buttons">
            <button className="btn btn-primary">Contact Us</button>
            <button className="btn btn-outline">Our Services</button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
