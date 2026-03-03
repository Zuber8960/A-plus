import InfoCard from "../components/InfoCard";
import SectionTitle from "../components/SectionTitle";
import { courseGroups } from "../data/siteData";

function CoursesPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Courses"
          title="Classes and Subjects Offered"
          description="Comprehensive academic support for school, higher secondary, and graduation students."
        />
        <div className="card-grid">
          {courseGroups.map((group) => (
            <InfoCard key={group.level} title={group.level}>
              <ul className="list-clean">
                {group.subjects.map((subject) => (
                  <li key={subject}>{subject}</li>
                ))}
              </ul>
            </InfoCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesPage;
