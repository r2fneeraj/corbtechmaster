import "./Home.css";
import { FaCode, FaMobileAlt, FaPaintBrush, FaRobot } from "react-icons/fa";
import { FaRocket, FaIndustry, FaHandshake } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
    <section className="home">
        <div className="home-container">

          <div className="home-content">
            <h1 className="hero-title">
              Corb<span>Tech</span> <br />
              Where Travel and Tech Meet
            </h1>

            <p className="hero-text">
              CorbTech is a full-service IT solutions company specializing in
              end-to-end digital development, design, and infrastructure support.
              We help startups and enterprises build, optimize, and scale their
              digital presence with smart, future-ready technology.
            </p>

            {/* <div className="home-buttons">
              <a href="/services" className="btn-primary">Our Services</a>
              <a href="/corbsafari" className="btn-secondary">Explore CorbSafari</a>
            </div> */}


            <div className="home-buttons">
              <a href="/services" className="btn-primary">
                Our Services
              </a>

              <a href="/corbsafari" className="btn-secondary">
                Explore CorbSafari
              </a>
            </div>
          </div>

        </div>
      </section> 

      {/* SERVICES SECTION */}
      <section className="services-home">
        <div className="services-container">

          <h2 className="fade-up">Our Services</h2>
          <p className="services-subtext fade-up delay-1">
            Scalable technology solutions built for performance and growth.
          </p>

          <div className="services-cards">

            <div className="service-card fade-up delay-1">
              <FaCode className="service-icon" />
              <h4>Web Development</h4>
            </div>

            <div className="service-card fade-up delay-2">
              <FaMobileAlt className="service-icon" />
              <h4>Mobile App Development</h4>
            </div>

            <div className="service-card fade-up delay-3">
              <FaPaintBrush className="service-icon" />
              <h4>UI / UX Design</h4>
            </div>
{/* 
            <div className="service-card fade-up delay-4">
              <FaRobot className="service-icon" />
              <h4>Automation & AI</h4>
            </div> */}

          </div>
        
          {/* <a href="/services" className="btn-primary services-btn fade-up delay-4">
            View All Services
          </a> */}

          <button type="button" class="btn btn-primary"> View All Services</button>


        </div>
      </section>


       {/* WHO WE WORK WITH */}
      <section className="workwith">
        <div className="workwith-container">

          <h2>Who We Work With</h2>
          <span className="underline"></span>

          <p className="subtitle">
            Partnering with businesses of all sizes to achieve their digital goals
          </p>

          <div className="workwith-cards">

            <div className="workwith-card">
              <FaRocket className="work-icon" />
              <h3>Startups</h3>
              <p>
                Startups launching their MVPs or scaling existing platforms
              </p>
            </div>

            <div className="workwith-card">
              <FaIndustry className="work-icon" />
              <h3>Mid-Size Businesses</h3>
              <p>
                Mid-sized businesses undergoing digital transformation
              </p>
            </div>

            <div className="workwith-card">
              <FaHandshake className="work-icon" />
              <h3>Agencies & Consultancies</h3>
              <p>
                Agencies and consultants in need of white-label development and design
              </p>
            </div>

          </div>

        </div>
      </section>



    {/* Our Mission */}

      {/* OUR MISSION SECTION */}
      <section className="mission">
        <div className="mission-container">

          {/* LEFT IMAGE */}
          {/* <div className="mission-image">
            <img src={missionImg} alt="Our Mission" />
          </div> */}

          {/* RIGHT CONTENT */}
          <div className="mission-content">
            <h2>Our Mission</h2>
            <div className="mission-line"></div>

            <p className="mission-tagline">
              Empowering businesses through innovative technology solutions
            </p>

            <p>
              At CorbTech, our mission is to deliver cutting-edge IT solutions
              that drive growth, efficiency, and digital transformation for
              businesses of all sizes. We are committed to:
            </p>

            <ul className="mission-list">
              <li><FaCheckCircle /> Delivering exceptional quality in every project</li>
              <li><FaCheckCircle /> Fostering long-term partnerships with clients</li>
              <li><FaCheckCircle /> Staying ahead of technological advancements</li>
              <li><FaCheckCircle /> Providing customized business solutions</li>
              <li><FaCheckCircle /> Ensuring transparency and clear communication</li>
            </ul>

            <a href="/about" className="mission-btn">
              Learn More About Us
            </a>
          </div>

        </div>
      </section>


<section className="looking-ahead">
  <div className="looking-ahead-container">
    <h2>Looking Ahead</h2>
    <span className="section-line"></span>

    <p className="subtitle">
      Your trusted partner in digital transformation.
    </p>

    <p className="description">
      As a fast-growing IT firm, Corb Tech is focused on expanding its service
      offerings, strengthening its developer community, and building a
      portfolio of in-house digital products that address real-world problems.
      We're not just a service provider—we're a technology partner committed to
      innovation, quality, and value.
    </p>

    <button className="primary-btn">Learn More</button>
  </div>
</section>




<section className="cta-section">
  <div className="cta-container">
    <h2>Start Your Digital Transformation</h2>
    <p>
      Ready to take your business to the next level? Contact us today to
      discuss how our software solutions can help you achieve your goals.
    </p>

    <a href="/contact" className="cta-btn">
      Contact Us
    </a>
  </div>
</section>

    </>
  );
}

export default Home;
