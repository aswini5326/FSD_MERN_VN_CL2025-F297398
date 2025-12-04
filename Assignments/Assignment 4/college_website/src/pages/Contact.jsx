import React, { useEffect, useState } from "react";
import '../pages/Contact.css'

const Contact = () => {
  const [departments, setDepartments] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(null);

  useEffect(() => {
    fetch("/src/data/departments.json")
      .then((res) => res.json())
      .then((data) => setDepartments(data))
      .catch((e) => console.error("Failed to load departments:", e));
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(form);
    setForm({ name: "", email: "", department: "", message: "" });
  };
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Department
          <select
            name="department"
            value={form.department}
            onChange={handleChange}
            required
          >
            <option value="">Select department</option>
            {departments.map((d) => (
              <option key={d.id} value={d.name}>
                {d.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div className="submitted">
          <h3>Submitted Details</h3>
          <p>
            <strong>Name:</strong> {submitted.name}
          </p>
          <p>
            <strong>Email:</strong> {submitted.email}
          </p>
          <p>
            <strong>Department:</strong> {submitted.department}
          </p>
          <p>
            <strong>Message:</strong> {submitted.message}
          </p>
        </div>
      )}
    </div>
  );
};

export default Contact;
