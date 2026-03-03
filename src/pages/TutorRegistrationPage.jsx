import { useState } from "react";
import FormField from "../components/forms/FormField";
import SectionTitle from "../components/SectionTitle";
import TextAreaField from "../components/forms/TextAreaField";

const initialForm = {
  name: "",
  qualification: "",
  subjects: "",
  experience: "",
  preferredClasses: "",
  contact: "",
};

function TutorRegistrationPage() {
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

    if (!formData.name.trim()) {
      nextErrors.name = "Name is required.";
    }
    if (!formData.qualification.trim()) {
      nextErrors.qualification = "Qualification is required.";
    }
    if (!formData.subjects.trim()) {
      nextErrors.subjects = "Please list subjects you teach.";
    }
    if (!formData.experience.trim()) {
      nextErrors.experience = "Experience is required.";
    }
    if (!formData.preferredClasses.trim()) {
      nextErrors.preferredClasses = "Preferred classes are required.";
    }
    if (!formData.contact.trim()) {
      nextErrors.contact = "Contact details are required.";
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
          eyebrow="Tutor Registration"
          title="Register as a Tutor"
          description="Join our network and help students in Ayodhya achieve their academic goals."
        />

        <form className="site-form" onSubmit={handleSubmit} noValidate>
          <FormField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            error={errors.name}
          />
          <FormField
            label="Qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            placeholder="e.g., M.Sc Mathematics"
            error={errors.qualification}
          />
          <TextAreaField
            label="Subjects"
            name="subjects"
            value={formData.subjects}
            onChange={handleChange}
            placeholder="e.g., Mathematics, Physics, Chemistry"
            error={errors.subjects}
          />
          <FormField
            label="Experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="e.g., 5 years"
            error={errors.experience}
          />
          <FormField
            label="Preferred Classes"
            name="preferredClasses"
            value={formData.preferredClasses}
            onChange={handleChange}
            placeholder="e.g., Class 9-12"
            error={errors.preferredClasses}
          />
          <FormField
            label="Contact Details"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Phone number or email"
            error={errors.contact}
          />
          <button type="submit" className="btn btn-primary">
            Submit Registration
          </button>
          {submitted ? (
            <p className="form-success">
              Registration submitted. Our team will contact you soon.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

export default TutorRegistrationPage;
