import React from 'react';
import { ChevronRight, Check } from 'lucide-react';
import { services } from '../data/services';
import { Link } from 'react-router-dom';

function Services() {
  const storageItems = [
    'Seasonal decorations',
    'Recreational gear',
    'Baby clothes',
    'Childhood drawings',
    'Family heirlooms',
    'Photo albums and important documents',
    'Sentimental treasures',
    'Collectables'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brand-copper py-32 text-white min-h-[50vh] flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto">
            Make the Most of the Space You Already Have
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Turn Unused Ceiling Space into Organised and Easy-to-Access Storage
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-brand-navy bg-geometric-pattern bg-fixed">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-white">
                We Install Safe, Dust-Proof Attic Storage Solutions Across Perth - North & South of the River
              </p>
              
              <p className="text-white">
                At Campbell's Attics, we help families across Perth reclaim their home and turn unused roof space into clean, sealed attic storage rooms - accessible in seconds with a professionally installed attic ladder.
              </p>

              <p className="text-white">
                Whether you need dust-proof attic storage, attic shelving, or a simple ladder and platform install, we deliver secure, long-lasting storage solutions - installed in just one day.
              </p>

              <div className="mt-8 mb-8">
                <h3 className="text-xl font-semibold text-brand-copper mb-4">Perfect for storing:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {storageItems.map((item, index) => (
                    <li key={index} className="flex items-center text-white">
                      <ChevronRight className="h-5 w-5 text-brand-copper mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-lg italic text-white">
                All the stuff you don't need every day but aren't ready to part with.
              </p>

              <p className="text-white">
                Once installed, most homeowners are shocked by how much space they had all along—and how quickly we made it usable.
              </p>

              <p className="text-white">
                Our team of experts installs strong, safe, and durable attic storage solutions in just 4-8 hours, so you can start using your new space the same day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Service Sections */}
      {services.map((service) => (
        <section key={service.id} id={service.id} className="py-20 bg-brand-navy bg-geometric-pattern bg-fixed">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-brand-copper mr-3" />
                  <h2 className="text-3xl font-bold text-brand-copper">{service.title}</h2>
                </div>
                <p className="text-xl text-white font-medium mb-4">{service.description}</p>
                <div className="text-white mb-8 space-y-6">
                  {service.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="leading-relaxed">{paragraph}</p>
                  ))}
                </div>
                {service.subHeadline && (
                  <h3 className="text-2xl font-bold text-brand-copper mb-6">{service.subHeadline}</h3>
                )}
                <ul className="space-y-6 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-brand-copper mr-3 mt-1 flex-shrink-0" />
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.cta.link}
                  className="bg-brand-copper text-white px-8 py-3 rounded-full hover:bg-brand-copper-dark transition-colors duration-200 inline-block"
                >
                  {service.cta.text}
                </Link>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Trust Us Section */}
      <section className="py-20 bg-brand-navy bg-geometric-pattern bg-fixed">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-copper">Why Perth Homeowners Trust Campbell's Attics</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-brand-dark p-8 rounded-xl shadow-lg">
              <div className="flex items-start mb-4">
                <Check className="h-6 w-6 text-brand-copper flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2 text-brand-copper">A Family Business That Cares</h3>
                  <p className="text-white">We treat every home like our own, delivering friendly, professional service with no shortcuts.</p>
                </div>
              </div>
            </div>
            <div className="bg-brand-dark p-8 rounded-xl shadow-lg">
              <div className="flex items-start mb-4">
                <Check className="h-6 w-6 text-brand-copper flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2 text-brand-copper">20+ Years of Expert Craftsmanship</h3>
                  <p className="text-white">Two decades of precision, reliability, and trust in attic storage solutions.</p>
                </div>
              </div>
            </div>
            <div className="bg-brand-dark p-8 rounded-xl shadow-lg">
              <div className="flex items-start mb-4">
                <Check className="h-6 w-6 text-brand-copper flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2 text-brand-copper">Built to Last – Guaranteed</h3>
                  <p className="text-white">We stand by our work with a 5-year warranty, so your storage stays safe and secure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-brand-copper text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Attic Space is Waiting - Let's Make the Most of It</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl mb-6">
              Tired of cluttered rooms and overflowing garages? The solution is already in your home - you just need the right team to unlock it.
            </p>
            <p className="text-lg mb-6">
              At Campbell's Attics, we don't just install storage solutions - we create seamless, stress-free experiences for Perth families looking to reclaim their space without breaking the bank.
            </p>
            <p className="text-xl font-semibold mb-8">
              Transparent pricing, expert craftsmanship, and a home that finally feels organised.
            </p>
            <p className="text-lg mb-8">
              Fill out the form below, and we'll be in touch to arrange your free, no-obligation quote.
            </p>
            <Link
              to="/quote"
              className="bg-white text-brand-copper px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
            >
              Get Your Free Quote Today <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;