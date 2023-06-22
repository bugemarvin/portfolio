import React, { useState } from "react";
import emailjs from "emailjs-com";
import emailjsConfig from "./emailjsConfig";
import './contactForm.css';

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Sending email using EmailJS
    emailjs
      .send(
        "default_service",
        emailjsConfig.templateId,
        {
          name,
          email,
          message,
        },
        emailjsConfig.userId
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
        },
        (error) => {
          console.error("Error sending email:", error);
          console.error("Error details:", error.text);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} className="Contact-form">
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="Msg"
        ></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
  );
}
