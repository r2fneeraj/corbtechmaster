import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./component/navbar/Navbar";
import Home from "./component/home/Home";
import Service from "./component/service/Service";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Safari from "./component/corbsafari/Safari";

import Admin from "./component/admin/Admin";
import Dashboard from "./component/admin/Dashboard";
import Leads from "./component/admin/Leads";

import Chatbot from "./component/chatbot/Chatbot";

function App() {
  const location = useLocation();

  // ✅ Hide chatbot on admin pages
  const hideChatbot = location.pathname.startsWith("/admin");

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/safari" element={<Safari />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/leads" element={<Leads />} />
      </Routes>

      {/* ✅ Show chatbot only on main website pages */}
      {!hideChatbot && <Chatbot />}
    </>
  );
}

export default App;
