import { contactInfo } from "../data/siteData";

const quickLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "courses", label: "Courses" },
  { id: "tutor", label: "Tutor Registration" },
  { id: "student", label: "Student Inquiry" },
  { id: "contact", label: "Contact" },
];

function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section>
          <h3>A Plus Tutor Provider</h3>
          <p>
            Professional tuition guidance for Class 5 to Graduation in Ayodhya.
          </p>
        </section>

        <section>
          <h3>Quick Links</h3>
          <div className="footer-links">
            {quickLinks.map((link) => (
              <button key={link.id} onClick={() => onNavigate(link.id)}>
                {link.label}
              </button>
            ))}
          </div>
        </section>

        <section>
          <h3>Contact</h3>
          <p>{contactInfo.address}</p>
          <p>{contactInfo.phone}</p>
          <p>{contactInfo.email}</p>
        </section>
      </div>
      <p className="copyright">
        {new Date().getFullYear()} A Plus Tutor Provider. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
