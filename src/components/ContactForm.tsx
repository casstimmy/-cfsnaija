"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const INITIAL: FormState = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  function validate(): boolean {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    if (!form.message.trim()) e.message = "Message is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    // TODO: wire up to an API endpoint / email service
    console.log("Form data:", form);
    setSubmitted(true);
    setForm(INITIAL);
    setTimeout(() => setSubmitted(false), 5000);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
    >
      {submitted && (
        <div className="flex items-center gap-3 p-4 rounded-lg bg-green/10 text-green border border-green/20">
          <CheckCircle2 className="h-5 w-5 shrink-0" />
          <p className="text-sm font-medium">
            Thank you! Your message has been sent. We&rsquo;ll get back to you shortly.
          </p>
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-navy mb-1.5">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          className={`w-full rounded-lg border ${
            errors.name ? "border-red-400" : "border-gray-300"
          } px-4 py-3 text-sm focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors`}
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1.5">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className={`w-full rounded-lg border ${
            errors.email ? "border-red-400" : "border-gray-300"
          } px-4 py-3 text-sm focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors`}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1.5">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          className={`w-full rounded-lg border ${
            errors.phone ? "border-red-400" : "border-gray-300"
          } px-4 py-3 text-sm focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors`}
          placeholder="+234 000 000 0000"
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={`w-full rounded-lg border ${
            errors.message ? "border-red-400" : "border-gray-300"
          } px-4 py-3 text-sm focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors resize-none`}
          placeholder="Tell us about your project or inquiry..."
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3.5 text-sm font-bold text-navy hover:bg-gold-light hover:-translate-y-0.5 hover:brightness-105 hover:shadow-lg active:translate-y-0 active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-gold/40 transition-all duration-200 shadow-lg shadow-gold/20"
      >
        <Send className="h-4 w-4" />
        Send Message
      </button>
    </form>
  );
}
