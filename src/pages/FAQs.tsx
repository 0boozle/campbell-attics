import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQSchema } from '../components/FAQSchema';

function FAQs() {
  const faqs = [
    {
      question: "Can I use my attic for storage in a Perth home?",
      answer: "Yes! Most Perth homes have roof space that can be safely converted into attic storage. We'll assess your ceiling structure to ensure it's suitable, then build a custom storage solution that maximises the space you already have."
    },
    {
      question: "How long does attic storage installation take?",
      answer: "Most installations take just one day. We'll arrive in the morning and by evening, your attic ladder, flooring, or dust-proof room will be fully installed—with zero mess left behind."
    },
    {
      question: "How much weight can attic storage support?",
      answer: "Our professionally installed attic flooring supports up to 75kg per square metre—perfect for storage tubs, decorations, luggage, and family keepsakes."
    },
    {
      question: "Are attic ladders safe for regular use?",
      answer: "Absolutely. Our attic ladders are rated to support up to 150kg and include wide, slip-resistant steps. They're built to Australian safety standards and installed by experienced professionals."
    },
    {
      question: "What is a dust-proof attic storage room?",
      answer: "It's a fully sealed attic space built to keep out dust, moisture, and pests—ideal for storing sentimental or delicate items like documents, collectables, baby clothes, and heirlooms."
    },
    {
      question: "Do I need council approval for attic storage in Perth?",
      answer: "Not usually. Since our attic storage installs are non-habitable (used for storage only), they generally don't require council approval. We'll advise you during your quote if anything special is needed."
    },
    {
      question: "What type of plywood or flooring is used for attic storage?",
      answer: "We use structural-grade, termite-treated plywood designed specifically for attic platforms. It's strong, lightweight, and built to last."
    },
    {
      question: "Do attic storage solutions help with insulation?",
      answer: "Yes. By sealing off the attic area and using proper materials, your dust-proof room can help regulate temperature and reduce airflow through the ceiling, improving overall insulation."
    },
    {
      question: "How much does attic storage installation cost in Perth?",
      answer: "Costs vary depending on the type of solution you need and the size of your roof space. We offer free quotes and transparent pricing with no surprises."
    },
    {
      question: "What areas do you service?",
      answer: "We install attic storage solutions across all of Perth and surrounding areas - both North and South of the Swan River and everywhere in between."
    },
    {
      question: "Do you offer a warranty?",
      answer: "Yes! All our installations come with a comprehensive 5-year warranty for total peace of mind. We stand behind the quality of our work."
    }
  ];

  return (
    <div>
      <FAQSchema faqs={faqs} />
      {/* Hero Section */}
      <section className="bg-brand-copper py-32 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
          <p className="text-xl opacity-90 text-center max-w-2xl mx-auto">
            Everything you need to know about our attic storage solutions
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-geometric-pattern bg-fixed">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-brand-navy rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300
                         border-t-2 border-l border-brand-cool-gray/10 hover:border-brand-copper/20
                         relative before:absolute before:inset-0 before:rounded-2xl
                         before:bg-gradient-to-b before:from-white/5 before:to-transparent
                         before:pointer-events-none"
              >
                <h3 className="text-xl font-bold text-brand-copper mb-4">{faq.question}</h3>
                <p className="text-white">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-white mb-8">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/free-quote"
                className="btn-secondary"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQs;