import { useState } from "react";
import FormField from "../components/forms/FormField";
import SectionTitle from "../components/SectionTitle";
import TextAreaField from "../components/forms/TextAreaField";
import { contactInfo } from "../data/siteData";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

function ContactPage() {
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
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      nextErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!emailPattern.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      nextErrors.message = "Message is required.";
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
      <div className="container flow">
        <SectionTitle
          eyebrow="Contact Us"
          title="Get in Touch"
          description="Reach us for tutor matching, registration support, or service-related questions."
        />

        <div className="split-panel">
          <article className="info-card">
            <h3>Contact Details</h3>
            <p>
              <strong>Address:</strong> {contactInfo.address}
            </p>
            <p>
              <strong>Phone:</strong> {contactInfo.phone}
            </p>
            <p>
              <strong>Email:</strong> {contactInfo.email}
            </p>
          </article>

          <article className="map-placeholder">
            <h3>Location Map</h3>
            <p>Google Map placeholder for Ayodhya, Uttar Pradesh.</p>
          </article>
        </div>

        <form className="site-form" onSubmit={handleSubmit} noValidate>
          <FormField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            error={errors.name}
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            error={errors.email}
          />
          <TextAreaField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help you?"
            error={errors.message}
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {submitted ? (
            <p className="form-success">
              Thank you for contacting us. We will respond soon.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
