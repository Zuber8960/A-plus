import SectionTitle from "../components/SectionTitle";
import { missionVision, whyChooseUs } from "../data/siteData";

function AboutPage() {
  return (
    <section className="section">
      <div className="container flow">
        <SectionTitle
          eyebrow="About Us"
          title="Guiding Academic Success in Ayodhya"
          description="A Plus Tutor Provider is committed to quality tuition support from Class 5 to Graduation."
        />

        <div className="split-panel">
          <article className="info-card">
            <h3>Our Mission</h3>
            <p>{missionVision.mission}</p>
          </article>
          <article className="info-card">
            <h3>Our Vision</h3>
            <p>{missionVision.vision}</p>
          </article>
        </div>

        <article className="info-card">
          <h3>Why Choose A Plus Tutor Provider</h3>
          <ul className="list-check">
            {whyChooseUs.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </article>

        <article className="location-banner">
          <h3>Local Focus</h3>
          <p>
            We primarily serve students in Ayodhya, Uttar Pradesh, and nearby
            areas with dependable tutor support and family-friendly coordination.
          </p>
        </article>
      </div>
    </section>
  );
}

export default AboutPage;
