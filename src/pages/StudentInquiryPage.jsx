import { useState } from "react";
import FormField from "../components/forms/FormField";
import SectionTitle from "../components/SectionTitle";
import SelectField from "../components/forms/SelectField";

const initialForm = {
  studentName: "",
  classCourse: "",
  subject: "",
  preferredMode: "online",
  contactInfo: "",
};

const modeOptions = [
  { label: "Online", value: "online" },
  { label: "Offline", value: "offline" },
  { label: "Both", value: "both" },
];

function StudentInquiryPage() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmitted(false);
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.studentName.trim()) {
      nextErrors.studentName = "Student name is required.";
    }
    if (!formData.classCourse.trim()) {
      nextErrors.classCourse = "Class or course is required.";
    }
    if (!formData.subject.trim()) {
      nextErrors.subject = "Subject is required.";
    }
    if (!formData.contactInfo.trim()) {
      nextErrors.contactInfo = "Contact information is required.";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setErrors({});
    setFormData(initialForm);
  };

  return (
    <section className="section">
      <div className="container form-section">
        <SectionTitle
          eyebrow="Student Enrollment"
          title="Find the Right Tutor"
          description="Share your learning requirement and we will match you with a suitable tutor."
        />

        <form className="site-form" onSubmit={handleSubmit} noValidate>
          <FormField
            label="Student Name"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            placeholder="Enter student name"
            error={errors.studentName}
          />
          <FormField
            label="Class / Course"
            name="classCourse"
            value={formData.classCourse}
            onChange={handleChange}
            placeholder="e.g., Class 10 or B.Com 1st Year"
            error={errors.classCourse}
          />
          <FormField
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g., Mathematics"
            error={errors.subject}
          />
          <SelectField
            label="Preferred Mode"
            name="preferredMode"
            value={formData.preferredMode}
            onChange={handleChange}
            options={modeOptions}
          />
          <FormField
            label="Contact Information"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            placeholder="Parent/Student phone or email"
            error={errors.contactInfo}
          />
          <button type="submit" className="btn btn-primary">
            Submit Inquiry
          </button>
          {submitted ? (
            <p className="form-success">
              Inquiry submitted successfully. We will contact you shortly.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

export default StudentInquiryPage;
