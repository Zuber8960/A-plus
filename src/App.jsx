import { useMemo, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import HomePage from "./pages/HomePage";
import StudentInquiryPage from "./pages/StudentInquiryPage";
import TutorRegistrationPage from "./pages/TutorRegistrationPage";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "courses", label: "Courses" },
  { id: "tutor", label: "Tutor Registration" },
  { id: "student", label: "Student Inquiry" },
  { id: "contact", label: "Contact" },
];

function App() {
  const [activePage, setActivePage] = useState("home");

  const pageContent = useMemo(() => {
    switch (activePage) {
      case "about":
        return <AboutPage />;
      case "courses":
        return <CoursesPage />;
      case "tutor":
        return <TutorRegistrationPage />;
      case "student":
        return <StudentInquiryPage />;
      case "contact":
        return <ContactPage />;
      case "home":
      default:
        return <HomePage onNavigate={setActivePage} />;
    }
  }, [activePage]);

  return (
    <div className="app-shell">
      <Header
        brand="A Plus Tutor Provider"
        navItems={navItems}
        activePage={activePage}
        onNavigate={setActivePage}
      />
      <main className="content-shell">{pageContent}</main>
      <Footer onNavigate={setActivePage} />
    </div>
  );
}

export default App;
