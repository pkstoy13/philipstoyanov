// components/EmailForm.tsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

interface EmailFormProps {}

const EmailForm: React.FC<EmailFormProps> = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "contact_service", // replace with your EmailJS service ID
        "contact_form", // replace with your EmailJS template ID
        templateParams,
        "KofjRcj8x0buwlwqU" // replace with your EmailJS public key
      )
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);
        setFeedback("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setFeedback("Failed to send email. Please try again later.");
      });
  };

  return (
    <div>
      <form onSubmit={sendEmail}>
        <Form className="bg-primary text-black">
          <Form.Group
            className="mb-3  flex items-center justify-around "
            controlId="exampleForm.ControlInput1"
          >
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Send Email</button>
        </Form>
      </form>
      {feedback && <p>{feedback}</p>}
    </div>
  );
};

export default EmailForm;
