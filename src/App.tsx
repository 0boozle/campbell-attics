import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Mail, Clock, Shield, DollarSign, Heart, CheckCircle, Zap, ArrowRight } from 'lucide-react';
import { services } from './data/services';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import About from './pages/About';
import Gallery from './pages/Gallery';
import FAQs from './pages/FAQs';
import { BreadcrumbNav } from './components/BreadcrumbNav';
import { Navigation } from './components/Navigation';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function NotFound() {
  return (
    <div className="min-h-screen bg-brand-navy flex items-center justify-center p-4">
      <div className="bg-brand-dark p-8 rounded-2xl max-w-lg text-center">
        <h1 className="text-2xl font-bold text-brand-copper mb-4">404: Page Not Found</h1>
        <p className="text-white mb-6">
          Sorry, we couldn't find the page you're looking for. The page may have been moved or deleted.
        </p>
        <Link
          to="/"
          className="bg-brand-copper text-white px-6 py-3 rounded-full hover:bg-brand-copper-dark transition-colors inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen">
      <section 
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/hero section.png')"
        }}
        aria-label="Hero section"
      >
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="container mx-auto px-6 relative z-10 h-screen flex items-center">
          <div className="max-w-3xl pt-32 md:pt-20 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-200 mb-6">
              Your Ceiling Is Hiding the Extra Storage You've Been Looking For
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-200 mb-8 leading-tight">
              We help Perth families declutter and organise with safe attic ladder installations and custom roof storage - Backed by 20+ years of experience and a 5-year warranty.
            </p>
            <Link 
              to="/free-quote"
              className="bg-brand-copper/90 p-8 rounded-2xl mb-10 inline-block
                        transform transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <p className="text-2xl font-bold text-white">Get Your Free Quote Today</p>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-navy to-transparent z-10"></div>
      </section>

      <section className="section-padding bg-pattern">
        <div className="container mx-auto px-6">
          <div className="relative bg-brand-navy p-12 rounded-2xl 
                        shadow-[0_0_30px_rgba(166,84,43,0.3)] 
                        border-2 border-brand-copper/30
                        transform hover:scale-[1.01] transition-all duration-500
                        before:absolute before:inset-0 before:rounded-2xl
                        before:bg-gradient-to-r before:from-brand-copper/5 before:to-transparent
                        before:pointer-events-none
                        after:absolute after:inset-0 after:rounded-2xl
                        after:bg-gradient-to-b after:from-white/5 after:to-transparent
                        after:pointer-events-none
                        max-w-4xl mx-auto">
            <div className="relative z-10">
              <h2 className="text-[1.8rem] md:text-[2rem] font-semibold leading-tight text-brand-copper mb-12 text-center">
                The Smartest Way to Create More Space in Your Home
              </h2>
              <div className="space-y-8 text-lg">
                <p className="text-xl font-medium text-white">
                  Boxes stacked to the ceiling. A garage you can barely walk through. Closets bursting at the seams. Sound familiar?
                </p>
                <p className="text-white">
                  You've tried squeezing things into every spare corner, but your house still feels messy and unorganised.
                </p>
                <p className="text-white">
                  Instead of parting with sentimental keepsakes, childhood memories, or holiday decorations you only use once a year - store them safely out of sight, but never out of reach.
                </p>
                <p className="text-white">
                  We install safe, sturdy attic flooring and ladders in just ONE day - Giving you a safe, permanent storage solution - right in your own home - without the hassle of renovations, moving into a bigger house, or the cost of storage units.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white bg-pattern">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Why Choose Campbell Attics?</h2>
            <p className="body-large text-brand-text max-w-2xl mx-auto">
              We're not just creating storage - we're crafting solutions that make your life easier and your home more organised.
            </p>
          </div>
          <div className="features-grid">
            <div className="card">
              <div className="w-16 h-16 bg-brand-copper/10 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-brand-copper" />
              </div>
              <h3 className="text-xl font-bold text-brand-copper mb-4">Over 20 Years of Experience</h3>
              <p className="text-brand-text">
                Trusted attic storage specialists in Perth.
              </p>
            </div>
            <div className="card">
              <div className="w-16 h-16 bg-brand-copper/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-brand-copper" />
              </div>
              <h3 className="text-xl font-bold text-brand-copper mb-4">5-Year Warranty</h3>
              <p className="text-brand-text">
                Every installation is backed for total peace of mind.
              </p>
            </div>
            <div className="card">
              <div className="w-16 h-16 bg-brand-copper/10 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="h-8 w-8 text-brand-copper" />
              </div>
              <h3 className="text-xl font-bold text-brand-copper mb-4">Competitive Pricing</h3>
              <p className="text-brand-text">
                Fair, transparent pricing for quality work.
              </p>
            </div>
            <div className="card">
              <div className="w-16 h-16 bg-brand-copper/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-brand-copper" />
              </div>
              <h3 className="text-xl font-bold text-brand-copper mb-4">Professional and Friendly Service</h3>
              <p className="text-brand-text">
                We treat your home like it's our own.
              </p>
            </div>
            <div className="card">
              <div className="w-16 h-16 bg-brand-copper/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-brand-copper" />
              </div>
              <h3 className="text-xl font-bold text-brand-copper mb-4">Safe, High-Quality Materials</h3>
              <p className="text-brand-text">
                Built to last with expert craftsmanship.
              </p>
            </div>
            <div className="card">
              <div className="w-16 h-16 bg-brand-copper/10 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-brand-copper" />
              </div>
              <h3 className="text-xl font-bold text-brand-copper mb-4">Fast One-Day Installation</h3>
              <p className="text-brand-text">
                No mess. No stress. Just more space—fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-pattern" id="about-us">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 mb-6">Family-Owned. Perth Proud. Backed by 20+ Years of Know-How.</h2>
            <div className="space-y-6 text-gray-600">
              <p>
                At Campbell Attics, we're more than just installers - We're a tight-knit family crew with 20 years of experience. We've seen it all, and we know how to make every job safe, solid, and stress-free.
              </p>
              <p>
                We treat your home like it's our own: no mess, no shortcuts, no BS - just quality attic storage installed properly and backed by a 5-year warranty.
              </p>
              <p>
                We understand that every home is different, and every family has unique storage needs. That's why we take the time to understand your specific requirements and design solutions that work perfectly for your space.
              </p>
              <p>
                Our commitment to quality craftsmanship and customer satisfaction has made us Perth's trusted choice for attic storage solutions. We're proud to help local families make better use of their homes and create more organised living spaces.
              </p>
            </div>
            <Link 
              to="/about-us" 
              className="group inline-flex items-center text-brand-copper font-semibold mt-8
                       hover:text-brand-copper-dark transition-colors duration-300"
              onClick={() => window.scrollTo(0, 0)}
            >
              Read More About Us 
              <ArrowRight className="h-4 w-4 ml-2 transform transition-transform duration-300 
                                 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white bg-pattern">
        <div className="container mx-auto px-6">
          <h2 className="heading-2 text-center mb-4">Our Services – Smart, Safe & Affordable Attic Solutions</h2>
          <p className="body-large text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Transform your unused attic space into a valuable storage asset with our comprehensive range of professional solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service) => (
              <div key={service.id} className="service-card group">
                <div className="service-card-image">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="service-card-content">
                  <p className="text-gray-200 mb-6 line-clamp-2">{service.description}</p>
                  <Link
                    to={service.cta.link}
                    className="group inline-flex items-center text-brand-copper font-semibold
                             hover:text-brand-copper-dark transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 transform transition-transform duration-300 
                                       group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-copper">
        <div className="container mx-auto px-6 text-center">
          <h2 className="heading-2 text-white mb-6">Your Home is Running Out of Space—Let's Fix That.</h2>
          <p className="body-large text-white/90 mb-8 max-w-3xl mx-auto">
            Cluttered closets, packed garages, and limited storage? We help Perth homeowners like you create more space with professional solutions.
          </p>
          <div className="max-w-2xl mx-auto mb-10">
            <ul className="space-y-4">
              <li className="flex items-center justify-center">
                <span className="w-2 h-2 bg-brand-copper rounded-full mr-3"></span>
                <span className="text-brand-copper">Installations in just ONE day—no mess, no stress.</span>
              </li>
              <li className="flex items-center justify-center">
                <span className="w-2 h-2 bg-brand-copper rounded-full mr-3"></span>
                <span className="text-brand-copper">Professional Service with Fair, Competitive Pricing</span>
              </li>
              <li className="flex items-center justify-center">
                <span className="w-2 h-2 bg-brand-copper rounded-full mr-3"></span>
                <span className="text-brand-copper">Backed by a 5-Year Warranty for Total Confidence.</span>
              </li>
            </ul>
          </div>
          <p className="text-white/90 text-lg mb-10">
            On-site inspections ensure the perfect fit (Virtual Estimates Available!)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/attic-storage-perth"
              className="bg-white text-brand-copper px-8 py-4 rounded-full text-lg font-semibold
                     hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 
                     inline-flex items-center gap-2 shadow-xl"
            >
              Explore Our Attic Storage Solutions
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/free-quote"
              className="bg-brand-dark text-white px-8 py-4 rounded-full text-lg font-semibold
                     hover:bg-brand-dark-light transition-all duration-300 transform hover:scale-105 
                     inline-flex items-center gap-2 shadow-xl border-2 border-white/10"
            >
              Get Your Free Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <BreadcrumbNav />

        <main id="main-content" role="main" className="relative">
          <Routes>
            {/* Main routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/free-quote" element={<Quote />} />

            {/* Service routes */}
            <Route path="/attic-storage-perth" element={<Services />} />
            <Route path="/attic-ladder-installation" element={<Services />} />
            <Route path="/dust-proof-storage" element={<Services />} />

            {/* Legacy URL redirects */}
            <Route path="/services" element={<Navigate to="/attic-storage-perth" replace />} />
            <Route path="/quote" element={<Navigate to="/free-quote" replace />} />
            <Route path="/about" element={<Navigate to="/about-us" replace />} />

            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer role="contentinfo" aria-label="Site footer" className="bg-brand-dark text-white py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-16">
              <div>
                <div className="flex items-center mb-6">
                  <img 
                    src="/assets/logo.png" 
                    alt="Campbell Attics Logo" 
                    className="h-10 w-auto" 
                  />
                  <span className="ml-3 text-lg font-display font-bold">Campbell Attics</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Decluttering homes and utilising hidden storage space for two decades
                </p>
              </div>
              <nav aria-label="Footer navigation">
                <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                <ul className="space-y-4">
                  <li>
                    <Link to="/" className="footer-link">Home</Link>
                  </li>
                  <li>
                    <Link to="/attic-storage-perth" className="footer-link">Services</Link>
                  </li>
                  <li>
                    <Link to="/about-us" className="footer-link">About</Link>
                  </li>
                  <li>
                    <Link to="/gallery" className="footer-link">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/faqs" className="footer-link">FAQs</Link>
                  </li>
                  <li>
                    <Link to="/contact" className="footer-link">Contact</Link>
                  </li>
                </ul>
              </nav>
              <div>
                <h3 className="text-lg font-semibold mb-6">Contact</h3>
                <address className="not-italic">
                  <ul className="space-y-4 text-gray-400">
                    <li>
                      <a href="tel:0499229770" className="hover:text-white transition-colors">
                        Phone: 0499 229 770
                      </a>
                    </li>
                    <li>
                      <a href="mailto:campbellcwa@outlook.com" className="hover:text-white transition-colors">
                        Email: campbellcwa@outlook.com
                      </a>
                    </li>
                  </ul>
                </address>
                <div className="flex space-x-6 mt-6">
                  <a href="mailto:campbellcwa@outlook.com" aria-label="Email" className="social-icon-link">
                    <Mail className="social-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Campbell Attics. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;