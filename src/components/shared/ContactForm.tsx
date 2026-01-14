"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { useAnalytics } from "@/contexts/AnalyticsContext";

export default function ContactForm() {
  const { trackFormSubmission } = useAnalytics();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Client-side validation
    if (!formData.name.trim()) {
      setError("Please enter your full name");
      return;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email address");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!formData.message.trim()) {
      setError("Please enter your message");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          phone: formData.phone.trim(),
          service: formData.service,
          message: formData.message.trim(),
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Track form submission
        trackFormSubmission();
        setIsSubmitted(true);
        setError("");

        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            service: "",
            message: "",
          });
        }, 5000);
      } else {
        setError(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setError("Failed to send message. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-lg p-8 text-center"
      >
        <div className="text-green-500 mb-4">
          <svg
            className="w-16 h-16 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Thank You!</h3>
        <p className="text-slate-600">
          Your message has been sent successfully. We&apos;ll get back to you
          soon.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-lg p-8 space-y-6"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => {
              handleChange(e);
              setError("");
            }}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-colors duration-200"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => {
              handleChange(e);
              setError("");
            }}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-colors duration-200"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-colors duration-200"
            placeholder="Your company name"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-colors duration-200"
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Service of Interest
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-colors duration-200"
        >
          <option value="">Select a service</option>
          <option value="seo-services">SEO Services</option>
          <option value="digital-marketing">Digital Marketing</option>
          <option value="social-media-management">
            Social Media Management
          </option>
          <option value="web-development">Web Development</option>
          <option value="app-development">App Development</option>
          <option value="ui-ux-design">UI/UX Design</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={(e) => {
            handleChange(e);
            setError("");
          }}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-colors duration-200 resize-vertical"
          placeholder="Tell us about your project requirements..."
        />
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
        >
          <p className="text-sm">{error}</p>
        </motion.div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 inline-block"></div>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </motion.form>
  );
}
