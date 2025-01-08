"use client"
import React, { useState } from "react";
import { redirect } from 'next/navigation'

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = { name, email, message };

    let response = await fetch('https://techi-talks.vercel.app/api/contact', {
      method: "POST",
      body: JSON.stringify(formData)
    })
    response = await response.json();
    
    redirect("/Success")
    
  }

  return (
    <div className="min-h-screen  text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="w-full max-w-lg bg-gray-800 rounded-lg shadow-lg p-6">
        <form
          onSubmit={handleSubmit}
          method="POST"
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Name"
              value={name}
              onChange={(e) => { setName(e.target.value) }}
              required
            />
          </div>


          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Email"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => { setMessage(e.target.value) }}
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 rounded-lg font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
