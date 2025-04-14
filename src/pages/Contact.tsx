import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import { sendEmail } from '../utils/email';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await sendEmail(formData, "template_qx3kn5p");
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } catch (error) {
        alert("Failed to send message. Please try again or contact us directly.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brand-copper py-32 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">We're Here to Help!</h1>
          <p className="text-xl opacity-90 text-center max-w-2xl mx-auto">
            Get in touch with us using the form below, or reach out through any of the methods listed.
          </p>
        </div>
      </section>

      <section className="py-20 bg-geometric-pattern bg-fixed">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-brand-navy p-8 rounded-lg shadow-lg">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="h-16 w-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-copper mb-2">Thank You!</h3>
                  <p className="text-white">
                    We've received your message and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-brand-copper hover:text-brand-copper-light font-semibold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-brand-copper font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.name ? 'border-red-500' : 'border-gray-700'
                      } focus:outline-none focus:ring-2 focus:ring-brand-copper bg-brand-dark text-white`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-brand-copper font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.email ? 'border-red-500' : 'border-gray-700'
                      } focus:outline-none focus:ring-2 focus:ring-brand-copper bg-brand-dark text-white`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-brand-copper font-semibold mb-2">
                      Phone Number (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-copper bg-brand-dark text-white"
                      placeholder="0412 345 678"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-brand-copper font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.message ? 'border-red-500' : 'border-gray-700'
                      } focus:outline-none focus:ring-2 focus:ring-brand-copper bg-brand-dark text-white`}
                      placeholder="How can we help you?"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-copper text-white py-3 rounded-lg font-semibold hover:bg-brand-copper-dark transition-colors duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-brand-navy p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-6 text-brand-copper">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-brand-copper mr-4 mt-1" />
                    <div>
                      <p className="font-semibold text-brand-copper">Phone</p>
                      <a
                        href="tel:0499229770"
                        className="text-white hover:text-brand-copper"
                      >
                        0499 229 770
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-brand-copper mr-4 mt-1" />
                    <div>
                      <p className="font-semibold text-brand-copper">Email</p>
                      <a
                        href="mailto:campbellcwa@outlook.com"
                        className="text-white hover:text-brand-copper"
                      >
                        campbellcwa@outlook.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-navy p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-brand-copper">Get in Touch</h3>
                <div className="flex space-x-4">
                  <a
                    href="mailto:campbellcwa@outlook.com"
                    className="bg-brand-dark p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
                  >
                    <Mail className="h-6 w-6 text-brand-copper" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;