import "./Service.css";

function Service() {
  const services = [
    { title: "Web Page Design", icon: "🎨", desc: "Modern, responsive, and conversion-focused website designs." },
    { title: "Data Analysis", icon: "📊", desc: "Actionable insights using data-driven analysis and reporting." },
    { title: "Full Stack Development", icon: "💻", desc: "End-to-end development using modern frontend & backend stacks." },
    { title: "System Administration", icon: "🖥️", desc: "Reliable infrastructure management, security, and monitoring." },
    { title: "Product Management", icon: "📦", desc: "From idea to launch with structured planning and execution." },
    { title: "Graphic Designing", icon: "🖌️", desc: "Branding, creatives, UI assets, and marketing visuals." },
    { title: "Video Editing", icon: "🎬", desc: "Professional video editing for marketing and branding." },
    { title: "Animated Ads", icon: "🚀", desc: "High-conversion motion graphics and ad animations." },
  ];

  return (
    <>
      {/* HERO */}
      <section className="service-hero">
        <div className="service-hero-content">

          {/* LEFT TEXT */}
          <div className="service-hero-text">
            <h1>
              Our <span>Services</span>
            </h1>
            <p>
              Comprehensive IT services and creative solutions tailored to your business needs.
            </p>
          </div>

          {/* RIGHT CIRCULAR ICONS */}
          <div className="service-circle-wrapper">
            <div className="service-circle">

              {/* CENTER LOGO */}
              <div className="circle-center">
                <img src="/corbtech-logo.png" alt="CorbTech" />
              </div>

              {services.slice(0, 6).map((item, index) => (
                <div
                  key={index}
                  className={`circle-icon icon-${index + 1}`}
                  title={item.title}
                >
                  {item.icon}
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="service-section">
        <div className="service-grid">
          {services.map((item, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <h2>Let’s Build Something Great</h2>
        <p>
          Partner with CorbTech to transform your ideas into powerful digital products.
        </p>
        <button>Contact Us</button>
      </section>
    </>
  );
}

export default Service;
