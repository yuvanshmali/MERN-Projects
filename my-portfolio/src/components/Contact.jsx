import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    const phoneNumber = "919928310989";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Hey Yuvv! 👋\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          📩 Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 space-y-6 border border-white/40 shadow-[0_0_10px_rgba(255,255,255,0.4)] hover:shadow-[0_0_18px_rgba(255,255,255,0.5)]"
        >
          <div>
            <label className="block text-gray-200 mb-2 font-medium">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-2 font-medium">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            style={{ backgroundColor: '#0c56f5', color: 'white' }}
          >
            Send via WhatsApp 💬
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
