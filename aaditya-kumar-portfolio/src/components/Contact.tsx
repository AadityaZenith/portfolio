import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    emailjs
      .sendForm(
        'service_fdiy3hq',
        'template_contact_form',
        formRef.current,
        'PilyeG23SwT2yl0bN'
      )
      .then(
        () => {
          setStatus('success');
          formRef.current?.reset();
          setTimeout(() => setStatus('idle'), 4000);
        },
        () => {
          setStatus('error');
          setTimeout(() => setStatus('idle'), 4000);
        }
      );
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-3 text-4xl font-bold">
            Contact Me<span className="text-red-500">.</span>
          </h2>
          <p className="mb-12 text-gray-500 leading-relaxed">
            Have a question or want to work together? Drop me a message below.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name & Email Row */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="group">
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Aaditya Kumar"
                  className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-red-400 focus:bg-red-50/30 focus:shadow-lg"
                />
              </div>
              <div className="group">
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-red-400 focus:bg-red-50/30 focus:shadow-lg"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                placeholder="What's this about?"
                className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-red-400 focus:bg-red-50/30 focus:shadow-lg"
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Write your message here..."
                className="w-full resize-none rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-red-400 focus:bg-red-50/30 focus:shadow-lg"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="group relative overflow-hidden rounded-full bg-red-500 px-10 py-4 font-semibold text-white transition-all duration-300 hover:bg-red-600 hover:shadow-xl hover:shadow-red-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span className="relative z-10">
                {status === 'sending'
                  ? '⏳ Sending...'
                  : status === 'success'
                  ? '✅ Message Sent!'
                  : status === 'error'
                  ? '❌ Failed, Try Again'
                  : 'Send Message →'}
              </span>
            </button>
          </form>

          {/* Status Message */}
          {status === 'success' && (
            <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 px-6 py-4 text-green-700 text-sm animate-pulse">
              🎉 Your message has been sent successfully! I'll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-6 py-4 text-red-700 text-sm">
              ⚠️ Something went wrong. Please try again or email me directly.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
