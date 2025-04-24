// components/EmailForm.tsx
import React, { useState } from "react";
// import emailjs from "@emailjs/browser";

interface EmailFormProps {}

export const EmailForm: React.FC<EmailFormProps> = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [feedback, setFeedback] = useState<string | null>(null);

  // const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const templateParams = {
  //     from_name: name,
  //     from_email: email,
  //     message: message,
  //   };

  //   emailjs
  //     .send(
  //       "contact_service", // replace with your EmailJS service ID
  //       "contact_form", // replace with your EmailJS template ID
  //       templateParams,
  //       "KofjRcj8x0buwlwqU" // replace with your EmailJS public key
  //     )
  //     .then((response) => {
  //       console.log("Email sent successfully:", response.status, response.text);
  //       setFeedback("Email sent successfully!");
  //     })
  //     .catch((error) => {
  //       console.error("Failed to send email:", error);
  //       setFeedback("Failed to send email. Please try again later.");
  //     });
  // };

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-8">
        <h1 className="border-white cursor-default border-b-2 mb-4 mx-8 w-96">
          Contact Me
        </h1>
        <form /*onSubmit={sendEmail}*/ className="project">
          <div>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              className="contact text-black"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="contact text-black"
            />
          </div>
          <div>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter Message"
              className="contact text-black"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-300 rounded-xl hover:shadow-sm hover:shadow-red-200 p-2 mb-8 text-black"
          >
            Send Email
          </button>
        </form>
        <div className="mb-4"></div>
        
      </div>
    </div>
  );
};
