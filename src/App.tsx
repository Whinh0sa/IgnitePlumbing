import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Flame, 
  Phone, 
  Droplet, 
  ThermometerSun, 
  ClipboardCheck, 
  Star, 
  Menu, 
  X, 
  MapPin,
  Clock,
  Mail,
  ChevronRight,
  ShieldCheck,
  CheckCircle
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  return (
    <div className="relative min-h-screen flex flex-col font-sans text-charcoal bg-white">
      {/* Accessibility: Skip Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-charcoal focus:text-white"
      >
        Skip to Main Content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-surface-dark shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group p-2 -ml-2 rounded-md hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-trust-blue" aria-label="Ignite Plumbing & Heating Home">
              <div className="bg-trust-blue p-2 rounded-lg text-white group-hover:bg-action-gold transition-colors">
                <Flame size={28} strokeWidth={2.5} />
              </div>
              <span className="font-bold text-2xl tracking-tight text-charcoal">
                Ignite<span className="text-trust-blue">.</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
              <a href="#services" className="text-charcoal hover:text-trust-blue font-medium transition min-h-[44px] flex items-center px-2 border-b-2 border-transparent hover:border-trust-blue">Services</a>
              <a href="#trust" className="text-charcoal hover:text-trust-blue font-medium transition min-h-[44px] flex items-center px-2 border-b-2 border-transparent hover:border-trust-blue">Why Us</a>
              <a href="#contact" className="text-charcoal hover:text-trust-blue font-medium transition min-h-[44px] flex items-center px-2 border-b-2 border-transparent hover:border-trust-blue">Contact</a>
            </nav>

            {/* Emergency CTA */}
            <div className="hidden md:flex items-center">
              <a 
                href="tel:0800123456" 
                className="flex items-center gap-2 bg-charcoal text-white hover:bg-gray-800 transition-colors font-bold px-6 py-3 rounded-md min-h-[44px]"
                aria-label="Call Emergency Line: 0800 123 456"
              >
                <Phone size={20} />
                <span>0800 123 456</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-md text-charcoal hover:bg-surface focus:outline-none focus:ring-2 focus:ring-trust-blue min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="md:hidden bg-surface border-b border-surface-dark px-4 py-4 flex flex-col gap-2"
          >
            <a href="#services" className="block py-3 px-4 font-medium text-charcoal hover:bg-surface-dark rounded-md min-h-[44px]" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#trust" className="block py-3 px-4 font-medium text-charcoal hover:bg-surface-dark rounded-md min-h-[44px]" onClick={() => setIsMenuOpen(false)}>Why Choose Us</a>
            <a href="#contact" className="block py-3 px-4 font-medium text-charcoal hover:bg-surface-dark rounded-md min-h-[44px]" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a href="tel:0800123456" className="mt-4 flex justify-center items-center gap-2 bg-charcoal text-white font-bold py-3 px-4 rounded-md min-h-[44px]">
              <Phone size={20} />
              Emergency Call
            </a>
          </motion.nav>
        )}
      </header>

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-surface py-20 lg:py-32">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #2D2D2D 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-trust-blue/10 text-trust-blue font-semibold rounded-full text-sm mb-6">
                  <ShieldCheck size={18} />
                  <span>Gas Safe Registered & Fully Insured</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-charcoal mb-6 leading-[1.1]">
                  Reliable Plumbers in Hamilton
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
                  Fast, professional, and trusted by hundreds of homeowners. We handle everything from emergency leaks to full heating system installations.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#contact" 
                    className="inline-flex justify-center items-center bg-action-gold hover:bg-action-gold-hover text-charcoal font-bold px-8 py-4 rounded-md transition min-h-[44px] text-lg shadow-sm"
                  >
                    Request a Quote
                  </a>
                  <a 
                    href="tel:0800123456" 
                    className="inline-flex justify-center items-center gap-2 bg-white border-2 border-charcoal text-charcoal hover:bg-surface-dark font-bold px-8 py-4 rounded-md transition min-h-[44px] text-lg"
                  >
                    <Phone size={22} />
                    Call Now
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Our Premium Services</h2>
              <p className="text-gray-600 text-lg">Delivering expert craftsmanship and long-lasting solutions across all aspects of plumbing and heating.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="group bg-surface p-8 rounded-xl border border-surface-dark transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <div className="w-16 h-16 bg-white shadow-sm rounded-xl flex items-center justify-center text-trust-blue mb-6 transition-all duration-500 ease-out group-hover:scale-110 group-hover:-rotate-12 group-hover:text-action-gold group-hover:shadow-md">
                  <Flame size={32} />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-3 transition-colors duration-300 group-hover:text-trust-blue">Boiler Servicing</h3>
                <p className="text-gray-600 mb-6">Comprehensive diagnostics, repairs, and annual servicing to keep your boiler running efficiently and safely.</p>
                <a href="#contact" className="inline-flex items-center text-trust-blue font-bold hover:underline min-h-[44px] transition-transform duration-300 group-hover:translate-x-1">
                  Book Service <ChevronRight size={20} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>

              {/* Service 2 */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="group bg-surface p-8 rounded-xl border border-surface-dark transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <div className="w-16 h-16 bg-white shadow-sm rounded-xl flex items-center justify-center text-trust-blue mb-6 transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-45 group-hover:text-action-gold group-hover:shadow-md">
                  <ThermometerSun size={32} />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-3 transition-colors duration-300 group-hover:text-trust-blue">Heat Pumps</h3>
                <p className="text-gray-600 mb-6">Eco-friendly heat pump installations. Upgrade your home's energy efficiency with our certified green solutions.</p>
                <a href="#contact" className="inline-flex items-center text-trust-blue font-bold hover:underline min-h-[44px] transition-transform duration-300 group-hover:translate-x-1">
                  Explore Options <ChevronRight size={20} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>

              {/* Service 3 */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="group bg-surface p-8 rounded-xl border border-surface-dark transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <div className="w-16 h-16 bg-white shadow-sm rounded-xl flex items-center justify-center text-trust-blue mb-6 transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-2 group-hover:text-action-gold group-hover:shadow-md">
                  <ClipboardCheck size={32} />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-3 transition-colors duration-300 group-hover:text-trust-blue">Landlord Checks</h3>
                <p className="text-gray-600 mb-6">Thorough Gas Safety Certificates (CP12) and inspections ensuring total compliance for your rental properties.</p>
                <a href="#contact" className="inline-flex items-center text-trust-blue font-bold hover:underline min-h-[44px] transition-transform duration-300 group-hover:translate-x-1">
                  Get Certified <ChevronRight size={20} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section id="trust" className="py-24 bg-charcoal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Hamilton Trusts Us</h2>
                <p className="text-gray-300 text-lg mb-8">
                  We don’t just fix pipes; we build relationships. With over 15 years of local experience, our reputation is built on transparency, punctuality, and unrivaled expertise.
                </p>
                
                <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 relative mb-8">
                  <div className="flex text-action-gold mb-4">
                    <Star size={24} fill="currentColor" />
                    <Star size={24} fill="currentColor" />
                    <Star size={24} fill="currentColor" />
                    <Star size={24} fill="currentColor" />
                    <Star size={24} fill="currentColor" />
                  </div>
                  <blockquote className="text-xl italic font-medium leading-relaxed mb-6">
                    "Ignite arrived within an hour of our emergency call. Professional, impeccably clean, and explained everything clearly. Absolutely flawless service."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center font-bold text-xl">S</div>
                    <div>
                      <p className="font-bold">Sarah Jenkins</p>
                      <p className="text-gray-400 text-sm">Hamilton Resident</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Which? Trusted Trader Widget Integration */}
              <div className="bg-white p-8 rounded-xl flex flex-col items-center justify-center text-charcoal min-h-[300px] shadow-lg">
                <h3 className="font-bold text-xl mb-4 text-center">Verified Trusted Trader</h3>
                {/* Accessible iframe implementation */}
                <div className="w-full max-w-[300px] border border-gray-200 rounded-md overflow-hidden bg-surface flex flex-col items-center p-6 text-center">
                  {/* Visual mockup of the widget */}
                  <ShieldCheck size={48} className="text-trust-blue mb-4" />
                  <p className="font-black text-2xl uppercase tracking-tighter mb-1">Which?</p>
                  <p className="font-bold text-sm bg-trust-blue text-white px-3 py-1 rounded-sm uppercase tracking-wide">Trusted Trader</p>
                  <p className="text-xs text-gray-500 mt-4">Verified Reviews: 5.0/5.0</p>
                </div>
                {/* Real iframe placeholder (hidden/disabled for demo but semantically correct) */}
                <iframe 
                  src="about:blank" 
                  title="Which? Trusted Trader Rating Widget showing customer satisfaction score"
                  className="sr-only" // Screen reader only in this demo, real integration would replace the visual mockup
                  aria-hidden="false"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-white rounded-2xl shadow-sm border border-surface-dark overflow-hidden">
              
              {/* Contact Info */}
              <div className="bg-trust-blue text-white p-12 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                  <p className="text-blue-100 text-lg mb-12">Need a quote or emergency repair? Fill out the form or reach us directly.</p>
                  
                  <ul className="space-y-8">
                    <li className="flex items-start gap-4">
                      <div className="bg-blue-800/50 p-3 rounded-lg"><Phone size={24} /></div>
                      <div>
                        <p className="font-semibold text-lg">Phone</p>
                        <a href="tel:0800123456" className="text-blue-100 hover:text-white min-h-[44px] flex items-center">0800 123 456</a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="bg-blue-800/50 p-3 rounded-lg"><Mail size={24} /></div>
                      <div>
                        <p className="font-semibold text-lg">Email</p>
                        <a href="mailto:info@igniteplumbing.com" className="text-blue-100 hover:text-white min-h-[44px] flex items-center">info@igniteplumbing.com</a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="bg-blue-800/50 p-3 rounded-lg"><MapPin size={24} /></div>
                      <div>
                        <p className="font-semibold text-lg">Coverage</p>
                        <p className="text-blue-100">Hamilton & Surrounding Areas</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="bg-blue-800/50 p-3 rounded-lg"><Clock size={24} /></div>
                      <div>
                        <p className="font-semibold text-lg">Hours</p>
                        <p className="text-blue-100">24/7 Emergency Service</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-12">
                <h3 className="text-2xl font-bold text-charcoal mb-6">Request Callback</h3>
                
                {formStatus === 'success' ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg flex items-start gap-4">
                    <CheckCircle className="text-green-600 mt-1" size={24} />
                    <div>
                      <p className="font-bold text-lg">Message Sent!</p>
                      <p>We'll be in touch shortly to assist you.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6" noValidate>
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-charcoal mb-2">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        className="w-full border-2 border-gray-300 rounded-md p-3 min-h-[44px] focus:border-trust-blue focus:ring-1 focus:ring-trust-blue outline-none transition"
                        placeholder="Jane Doe"
                        aria-required="true"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-charcoal mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          required 
                          className="w-full border-2 border-gray-300 rounded-md p-3 min-h-[44px] focus:border-trust-blue focus:ring-1 focus:ring-trust-blue outline-none transition"
                          placeholder="07700 900000"
                          aria-required="true"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-bold text-charcoal mb-2">Service Needed</label>
                        <select 
                          id="service"
                          className="w-full border-2 border-gray-300 rounded-md p-3 min-h-[44px] focus:border-trust-blue focus:ring-1 focus:ring-trust-blue outline-none transition bg-white"
                        >
                          <option value="">Select a service...</option>
                          <option value="boiler">Boiler Servicing</option>
                          <option value="heatpump">Heat Pumps</option>
                          <option value="landlord">Landlord Checks</option>
                          <option value="emergency">Emergency Repair</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-charcoal mb-2">Details (Optional)</label>
                      <textarea 
                        id="message" 
                        rows={4} 
                        className="w-full border-2 border-gray-300 rounded-md p-3 focus:border-trust-blue focus:ring-1 focus:ring-trust-blue outline-none transition resize-y"
                        placeholder="Briefly describe your issue..."
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full bg-action-gold hover:bg-action-gold-hover text-charcoal font-bold text-lg py-4 px-6 rounded-md transition min-h-[44px] focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-action-gold"
                    >
                      Send Request
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-charcoal text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Col */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-trust-blue p-2 rounded-lg text-white">
                  <Flame size={24} strokeWidth={2.5} />
                </div>
                <span className="font-bold text-2xl tracking-tight text-white">
                  Ignite<span className="text-trust-blue">.</span>
                </span>
              </div>
              <p className="text-gray-400 mb-6">Raising the standard for plumbing and heating in Hamilton. Gas Safe registered experts you can rely on.</p>
            </div>
            
            {/* Nav Col */}
            <div>
              <h4 className="font-bold text-lg mb-6 tracking-wide">Company</h4>
              <ul className="space-y-4">
                <li><a href="#about" className="text-gray-400 hover:text-white transition min-h-[44px] flex items-center">About Us</a></li>
                <li><a href="#trust" className="text-gray-400 hover:text-white transition min-h-[44px] flex items-center">Testimonials</a></li>
                <li><a href="#careers" className="text-gray-400 hover:text-white transition min-h-[44px] flex items-center">Careers</a></li>
                <li><a href="#privacy" className="text-gray-400 hover:text-white transition min-h-[44px] flex items-center">Privacy Policy</a></li>
              </ul>
            </div>
            
            {/* Services Col */}
            <div>
              <h4 className="font-bold text-lg mb-6 tracking-wide">Services</h4>
              <ul className="space-y-4">
                <li><a href="#services" className="text-gray-400 hover:text-white transition min-h-[44px] flex items-center">Boiler Installation</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition min-h-[44px] flex items-center">Boiler Servicing</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition min-h-[44px] flex items-center">Heat Pumps</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition min-h-[44px] flex items-center">Landlord Checks</a></li>
              </ul>
            </div>

            {/* Contact Col */}
            <div>
              <h4 className="font-bold text-lg mb-6 tracking-wide">Contact</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <Clock size={20} className="mt-1" />
                  <span>24/7 Emergency Response Available</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={20} className="mt-1" />
                  <a href="tel:0800123456" className="hover:text-white transition min-h-[44px] flex items-center -mt-3">0800 123 456</a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={20} className="mt-1" />
                  <a href="mailto:info@igniteplumbing.com" className="hover:text-white transition min-h-[44px] flex items-center -mt-3">info@igniteplumbing.com</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Ignite Plumbing & Heating. All rights reserved. Registered in Scotland.
          </div>
        </div>
      </footer>
    </div>
  );
}
