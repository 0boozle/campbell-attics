import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

function About() {
  const whyChooseUs = [
    {
      title: "20+ Years of Experience",
      description: "Trusted attic storage specialists in Perth."
    },
    {
      title: "5-Year Warranty",
      description: "Every installation is backed for total peace of mind."
    },
    {
      title: "Fast, One-Day Installations",
      description: "No mess, no hassle, just more storage space."
    },
    {
      title: "Professional Service",
      description: "Quality work at competitive prices."
    },
    {
      title: "Safe, High-Quality Materials",
      description: "Built to last, with professional craftsmanship."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brand-copper py-32 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center max-w-4xl mx-auto leading-tight">
            A Family Business Built on Quality, Trust & Expert Craftsmanship With 20 Years of Experience
          </h1>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-geometric-pattern bg-fixed">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-brand-copper">Who We Are</h2>
            <div className="prose prose-lg text-gray-200 space-y-6">
              <p>
                We aren't a big company that sees you as just another client - we're a close-knit family team dedicated to helping Perth families declutter their homes, reclaim their garages, and store what matters in a safe space hidden in their roof.
              </p>
              <p>
                Whether you need dust-proof storage rooms, custom shelving, or safe attic ladders, we make it easy, affordable, and mess-free.
              </p>
              <p>
                We understand that feeling confident climbing ladders and walking in your roof is of upmost importance. We value safety above all else and use only the most durable materials.
              </p>
              <p>
                We don't subcontract. We don't cut corners. We show up, get the job done right, and treat your home with the same care we'd give our own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50 bg-geometric-pattern bg-fixed">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-brand-copper">Our Story: Why We Started Campbell Attics</h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                Campbell Attics didn't start with ladders or platforms - it started with roof repairs. We spent years inside Perth roof cavities patching leaks, and fixing structural faults.
              </p>
              <p>
                But over time, we saw something almost every homeowner missed: All that wasted space, just sitting empty hidden above their heads.
              </p>
              <p>
                That's when we saw an opportunity: Why just fix a roof, when we can transform it into something families can actually use?
              </p>
              <p>
                So we got to work. And we built a business around it.
              </p>
              <p>
                Now, after 20+ years in the trade, we help Perth families reclaim their homes with attic ladders, dust-proof storage rooms, and custom-built platforms - installed in just one day, backed by a 5-year guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-geometric-pattern bg-fixed">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Values: What We Stand For</h2>
            <div className="grid gap-6">
              {[
                {
                  title: "Safety & Durability",
                  description: "We build sturdy, secure, and long-lasting attic storage solutions backed by a 5-year warranty."
                },
                {
                  title: "Quality Craftsmanship",
                  description: "We believe in doing things right the first time, using high-quality materials and expert installation techniques."
                },
                {
                  title: "Family-Owned & Operated",
                  description: "We're a local, family-run business that genuinely cares about helping homeowners create more space."
                },
                {
                  title: "Honest Pricing & Fair Deals",
                  description: "No hidden fees, no upsells—just fair, competitive pricing."
                }
              ].map((value, index) => (
                <div key={index} className="bg-brand-navy p-6 rounded-lg flex items-start">
                  <Check className="h-6 w-6 text-brand-copper mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2 text-brand-copper">{value.title}</h3>
                    <p className="text-white">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50 bg-geometric-pattern bg-fixed">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-brand-copper">Experience & Expertise You Can Trust</h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                We're attic specialists with over two decades on the tools. We've worked in more ceilings, roof spaces, and attics than we can count. We know what makes a storage solution safe. We know how to install attic ladders that actually last. And we know what separates a good job from a headache waiting to happen.
              </p>
              <p>
                We don't use cookie-cutter solutions. We take the time to understand your ceiling layout, your needs, and your future storage plans.
              </p>
              <p>
                We design and install the safest, smartest solution possible that adds value to your home and lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-geometric-pattern bg-fixed">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Why Homeowners Choose Campbell Attics</h2>
            <div className="grid gap-6">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="bg-brand-navy p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-brand-copper mb-3">{item.title}</h3>
                  <p className="text-white text-lg">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-copper text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Maximise The Space You Already Own</h2>
          <div className="space-y-6 mb-12">
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether it's baby clothes, a Christmas tree and decorations, or camping gear - you don't have to give up what matters. We'll build the attic storage you need to keep it all, neatly out of the way.
            </p>
            <p className="text-lg font-semibold text-brand-copper">
              Serving homes both North and South of the Swan River
            </p>
            <p className="text-xl">
              Get a free on-site quote and see just how much room is waiting above you.
            </p>
          </div>
          <Link
            to="/quote"
            className="inline-flex items-center bg-white text-brand-copper px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Reclaim Your Space <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;