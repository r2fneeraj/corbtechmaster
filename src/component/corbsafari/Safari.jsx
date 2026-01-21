import React, { useEffect } from "react";
import {
  FaCar,
  FaMountain,
  FaCompass,
  FaCheckCircle,
  FaShieldAlt,
  FaMapMarkedAlt,
  FaMobileAlt,
  FaPaw,
  FaGlobe,
  FaOm
} from "react-icons/fa";

const Safari = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>

      {/* HERO SECTION */}
      <section
        className="d-flex align-items-center"
        style={{
          background: "linear-gradient(135deg, #4A9B8E 0%, #2E5233 100%)",
          minHeight: "80vh",
          paddingTop: "120px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div className="container position-relative">
          <div className="row align-items-center">

            {/* LEFT CONTENT */}
            <div className="col-lg-6 text-white">
              <h1
                className="display-3 fw-bold mb-3"
                style={{
                  background: "linear-gradient(135deg,#F0F0F0,#CCCCCC)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                CorbSafari
              </h1>

              <h2 className="h3 mb-3">
                Explore Uttarakhand with Confidence
              </h2>

              <p className="lead text-dark fw-semibold mb-4">
                CorbSafari is CorbTech's digital travel companion for safe,
                simple, and unforgettable journeys across Uttarakhand.
              </p>

              <div className="row g-3 mb-4 text-white">
                <div className="col-md-6 d-flex align-items-center">
                  <FaCar className="me-3 text-primary" />
                  Verified chauffeurs & safari operators
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <FaMountain className="me-3 text-primary" />
                  Jim Corbett, Char Dham & hill stations
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <FaCompass className="me-3 text-primary" />
                  Smart travel guidance
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <FaCheckCircle className="me-3 text-primary" />
                  Safe & transparent journeys
                </div>
              </div>

              <a
                href="https://safari.corbtech.in"
                target="_blank"
                rel="noreferrer"
                className="btn btn-lg me-3"
                style={{ background: "#4A9B8E", color: "#fff" }}
              >
                Start Your Journey
              </a>

              <a
                href="#features"
                className="btn btn-outline-light btn-lg"
                style={{ borderColor: "#7CB342", color: "#7CB342" }}
              >
                Learn More
              </a>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-6 text-center mt-4 mt-lg-0">
              <div
                className="p-4 rounded-3 mx-auto"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  maxWidth: "500px"
                }}
              >
                <img
                  src="/assets/corbsafari_with_slogan_CROPPED-removebg-preview.png"
                  alt="CorbSafari"
                  className="img-fluid"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-3" style={{ color: "#2E5233" }}>
            Why Choose CorbSafari?
          </h2>
          <p className="text-muted mb-5">
            Technology + Tourism for stress-free Uttarakhand travel
          </p>

          <div className="row g-4">
            {[
              { icon: <FaShieldAlt />, title: "Safety First", text: "Verified & trusted partners" },
              { icon: <FaMapMarkedAlt />, title: "Local Expertise", text: "Hidden gems & trusted routes" },
              { icon: <FaMobileAlt />, title: "Smart Technology", text: "Book & manage digitally" },
              { icon: <FaPaw />, title: "Curated Packages", text: "Safaris & pilgrimages" },
              { icon: <FaGlobe />, title: "Community Tourism", text: "Ethical & sustainable travel" },
              { icon: <FaShieldAlt />, title: "Reliable Network", text: "Transparent & authentic" }
            ].map((f, i) => (
              <div className="col-md-4" key={i}>
                <div className="p-4 bg-white shadow-sm rounded-4 h-100">
                  <div className="fs-1 mb-3" style={{ color: "#4A9B8E" }}>
                    {f.icon}
                  </div>
                  <h5 style={{ color: "#2E5233" }}>{f.title}</h5>
                  <p className="text-muted">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Our Mission</h2>
          <p className="lead text-muted mb-5">
            Safe, reliable & memorable journeys across Uttarakhand
          </p>

          <div className="row">
            <div className="col-md-4">
              <FaPaw className="fs-1 mb-3 text-success" />
              <h5>Wildlife Safaris</h5>
              <p className="text-muted small">Jim Corbett & reserves</p>
            </div>
            <div className="col-md-4">
              <FaOm className="fs-1 mb-3 text-success" />
              <h5>Spiritual Travel</h5>
              <p className="text-muted small">Char Dham Yatra</p>
            </div>
            <div className="col-md-4">
              <FaMountain className="fs-1 mb-3 text-success" />
              <h5>Hill Drives</h5>
              <p className="text-muted small">Scenic Uttarakhand routes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-5 text-white text-center"
        style={{ background: "linear-gradient(135deg,#2E5233,#1B3A20)" }}
      >
        <h2 className="fw-bold mb-3">Ready to Explore Uttarakhand?</h2>
        <p className="lead mb-4">
          Discover nature, culture & adventure with CorbSafari
        </p>

        <a
          href="https://safari.corbtech.in"
          target="_blank"
          rel="noreferrer"
          className="btn btn-lg"
          style={{ background: "#4A9B8E", color: "#fff" }}
        >
          Get Started
        </a>
      </section>

    </div>
  );
};

export default Safari;
