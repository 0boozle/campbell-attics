import React, { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { sendEmail } from '../utils/email';

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  jobType: string;
  budget: string;
  urgency: string;
  location: string;
  additionalInfo: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  jobType?: string;
  budget?: string;
  urgency?: string;
  location?: string;
}

const BUDGET_RANGES = [
  'Under $1,000',
  '$1,000 - $2,500',
  '$2,500 - $5,000',
  '$5,000 - $10,000',
  'Over $10,000'
];

const URGENCY_OPTIONS = [
  'As soon as possible',
  'Within 1 week',
  'Within 2 weeks',
  'Within 1 month',
  'No rush - Flexible timing'
];

function Quote() {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    jobType: '',
    budget: '',
    urgency: '',
    location: '',
    additionalInfo: ''
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
      newErrors.name = 'Email is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.jobType) {
      newErrors.jobType = 'Please select a job type';
    }

    if (!formData.budget) {
      newErrors.budget = 'Please select a budget range';
    }

    if (!formData.urgency) {
      newErrors.urgency = 'Please select urgency';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await sendEmail(formData, "template_iw1yedq");
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          jobType: '',
          budget: '',
          urgency: '',
          location: '',
          additionalInfo: ''
        });
      } catch (error) {
        alert("Failed to send quote request. Please try again or contact us directly.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center max-w-4xl mx-auto">
            Transform Your Roof Space Into Clean, Hidden Storage - in Just One Day
          </h1>
          <p className="text-xl md:text-2xl opacity-90 text-center max-w-3xl mx-auto mt-4">
            Get a free quote for your attic storage solution
          </p>
        </div>
      </section>

      <section className="py-20 bg-geometric-pattern bg-fixed">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-brand-navy p-8 rounded-lg shadow-lg mb-12">
            <div className="prose prose-lg text-white space-y-6 mb-8">
              <p>
                Garage looking like a messy warehouse? Spare rooms overrun by clutter?
              </p>
              <p>
                We'll help you unlock an extra storage room that's been hiding above you're head this whole time.
              </p>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-brand-copper flex-shrink-0" />
                  <span>20 years of hands-on experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-brand-copper flex-shrink-0" />
                  <span>Professional, quality installations</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-brand-copper flex-shrink-0" />
                  <span>All solutions backed by a 5-year warranty</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-brand-copper flex-shrink-0" />
                  <span>Installed in just one day - No mess. No stress</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-brand-copper flex-shrink-0" />
                  <span>Friendly, family-run local business</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-brand-navy p-8 rounded-lg shadow-lg mb-16">
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-brand-copper mb-2">Thank You!</h3>
                <p className="text-white">
                  We've received your quote request and will contact you within 24 hours with a detailed estimate.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-brand-copper hover:text-brand-copper-light font-semibold"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
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
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-brand-copper font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-gray-700'
                    } focus:outline-none focus:ring-2 focus:ring-brand-copper bg-brand-dark text-white`}
                    placeholder="Email address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-brand-copper font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.phone ? 'border-red-500' : 'border-gray-700'
                    } focus:outline-none focus:ring-2 focus:ring-brand-copper bg-brand-dark text-white`}
                    placeholder="0412 345 678"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="jobType" className="block text-brand-copper font-semibold mb-2">
                    Job Type *
                  </label>
                  <select
                    id="jobType"
                    name="jobType"
                    value={formData.jobType}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.jobType ? 'border-red-500' : 'border-gray-700'
                    } focus:outline-none focus:ring-2 focus:ring-brand-copper bg-brand-dark text-white`}
                  >
                    <option value="">Select a service</option>
                    {services.map(service => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                  {errors.jobType && (
                    <p className="text-red-500 text-sm mt-1">{errors.jobType}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="budget" className="block text-brand-copper font-semibold mb-2">
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.budget ? 'border-red-500' : 'border-gray-700'
                    } focus:outline-none focus:ring-2 focus:ring-brand-copper bg-brand-dark text-white`}
                  >
                    <option value="">Select budget range</option>
                    {BUDGET_RANGES.map(range => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className="text-red-500 text-sm mt-1">{errors.budget}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="urgency" className="block text-brand-copper font-semibold mb-2">
                    How soon do you need this done? *
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.urgency ? 'border-red-500' : 'border-gray-700'
                    } focus:outline-none focus:ring-2 focus:ring-brand-copper bg-brand-dark text-white`}
                  >
                    <option value="">Select timeframe</option>
                    {URGENCY_OPTIONS.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.urgency && (
                    <p className="text-red-500 text-sm mt-1">{errors.urgency}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="location" className="block text-brand-copper font-semibold mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.location ? 'border-red-500' : 'border-gray-700'
                    } focus:outline-none focus:ring-2 focus:ring-brand-copper bg-brand-dark text-white`}
                    placeholder="Your suburb"
                  />
                  {errors.location && (
                    <p className="text-red-500 text-sm mt-1">{errors.location}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="additionalInfo" className="block text-brand-copper font-semibold mb-2">
                    Additional Information (Optional)
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-copper bg-brand-dark text-white"
                    placeholder="Tell us more about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-copper text-white py-3 rounded-lg font-semibold hover:bg-brand-copper-dark transition-colors duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Quote Request'}
                </button>
              </form>
            )}
          </div>

          {/* Features Section */}
          <div className="bg-brand-navy p-8 rounded-lg shadow-lg mb-16">
            <ul className="space-y-4 text-white">
              <li className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-brand-copper flex-shrink-0" />
                <span>No Hidden Costs. No Pressure. No BS.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-brand-copper flex-shrink-0" />
                <span>Most installs completed in just 4–8 hours</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-brand-copper flex-shrink-0" />
                <span>Keep your sentimental items without losing space</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-brand-copper flex-shrink-0" />
                <span>Make use of the roof space you already own</span>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="bg-brand-navy p-8 rounded-lg shadow-lg mb-16">
            <h2 className="text-2xl font-bold text-brand-copper mb-6">Our Services</h2>
            <ul className="space-y-4 text-white mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-brand-copper flex-shrink-0" />
                <span>Attic Ladders – Safe, easy-access, fold-away designs</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-brand-copper flex-shrink-0" />
                <span>Dust-Proof Storage Rooms – Sealed from pests, dust, and moisture</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-brand-copper flex-shrink-0" />
                <span>Attic Platforms & Shelving – Custom-built to organise bulky items</span>
              </li>
            </ul>
            <p className="text-white mb-6">See what we can build</p>
            <Link
              to="/services"
              className="inline-flex items-center bg-brand-copper text-white px-6 py-3 rounded-lg hover:bg-brand-copper-dark transition-colors duration-200"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* About Section */}
          <div className="bg-brand-navy p-8 rounded-lg shadow-lg">
            <p className="text-white mb-6">
              Campbell Attics is run by a close-knit family team who have 20 years experience in the industry. We show up on time, we don't take shortcuts, and we do the job right the first time.
            </p>
            <p className="text-white">
              We listen to what you want and design our solid, reliable attic storage rooms to suit your needs - All our work is backed by a 5-year warranty (not that you'll need it ;)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Quote;