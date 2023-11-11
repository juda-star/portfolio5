import React, { useState } from "react";
import emailjs from "@emailjs/browser";
const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // emails
    const serviceId = "service_vc7n4el";
    const templateId = "template_8awoubc";
    const publicKey = "user_F2sOkbXU6MFel9pj45ENo";

    //new object

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "web Wizard",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error sending email", error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          name="user_name"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          name="user_email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Message</label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default EmailForm;
