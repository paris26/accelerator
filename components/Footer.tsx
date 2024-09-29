import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_c9o68dn",
        "template_karqpwh",
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        "j48ago7R7Qy-27qCS"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black-100">
      <div className="w-full max-w-4xl mx-auto p-8">
        <div className="bg-black-100 shadow-lg rounded-2xl p-8">
          <p className="text-2xl font-semibold text-gray-700">Get in touch</p>
          <h3 className="text-4xl font-bold text-gray-900 mt-2">Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What is your name?"
                className="bg-[#6b7280] py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What is your email?"
                className="bg-gray-50 py-4 px-6 placeholder:text-gray-400 text-gray-900 rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium mb-4">
                Your Message
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to say?"
                className="bg-gray-50 py-4 px-6 placeholder:text-gray-400 text-gray-900 rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-blue-600 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-blue-300 hover:bg-blue-700 transition-colors"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;