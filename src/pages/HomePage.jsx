import InfoCard from "../components/InfoCard";
import SectionTitle from "../components/SectionTitle";
import { highlights } from "../data/siteData";

function HomePage({ onNavigate }) {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Ayodhya's Learning Network</p>
            <h1>Expert Tutors for Class 5 to Graduation - Ayodhya</h1>
            <p>
              A Plus Tutor Provider connects students and families with trusted
              tuition teachers for focused academic progress.
            </p>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={() => onNavigate("student")}>
                Find a Tutor
              </button>
              <button className="btn btn-secondary" onClick={() => onNavigate("tutor")}>
                Become a Tutor
              </button>
            </div>
          </div>
          <aside className="hero-panel">
            <h2>Learning That Fits Every Goal</h2>
            <ul>
              <li>School syllabus support with conceptual clarity</li>
              <li>Exam-oriented preparation and regular progress tracking</li>
              <li>Online and offline options across Ayodhya</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Why Families Choose Us"
            title="Supportive, Structured and Result-Focused Tuition"
            description="Our teaching model combines personalized guidance with practical academic planning."
          />
          <div className="card-grid">
            {highlights.map((highlight) => (
              <InfoCard
                key={highlight.title}
                title={highlight.title}
                description={highlight.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
