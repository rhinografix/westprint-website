import React, { useState, useEffect } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Phone, Mail, MapPin, Clock, Check, Award, Users, Shield, TrendingUp, DollarSign } from 'lucide-react';
import logo from 'figma:asset/fcb7f2317bb54ddde4974ba13fc628b2eea0c16c.png';
import ServicesPage from './components/ServicesPage';
import IndustriesPage from './components/IndustriesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import heroBackgroundImage from 'figma:asset/6dd79b988793c6233bafb2c67e4749bef9ca27d8.png';
import HeroAnimationOverlay from './components/HeroAnimationOverlay';
import ScrollControlledFeatures from './components/ScrollControlledFeatures';
import Header from './components/Header';
import { toast } from 'sonner@2.0.3';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      projectDetails: formData.get('projectDetails') as string,
    };

    try {
      const response = await fetch(
        'https://hdcqpvezfqfrieuvtdkv.supabase.co/functions/v1/make-server-a887b54b/send-email',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkY3FwdmV6ZnFmcmlldXZ0ZGt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3MTQ2MzEsImV4cCI6MjA3NjI5MDYzMX0.66TzzhiOhSyobSqSa1TJpzRwxbwyCk6O1DmDl6R_QrM',
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        e.currentTarget.reset();
        toast.success('Quote request sent!', {
          description: 'We\'ll get back to you within 24 hours.',
        });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        toast.error('Failed to send request', {
          description: 'Please try again or call us at (949) 749-4024',
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      toast.error('Connection error', {
        description: 'Please call us at (949) 749-4024',
      });
    } finally {
      setIsSubmitting(false);
    }
  };



  useEffect(() => {
    // Scroll to top when page changes
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.fade-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [currentPage]);

  // If services page is active, render it
  if (currentPage === 'services') {
    return <ServicesPage onNavigate={setCurrentPage} />;
  }

  // If industries page is active, render it
  if (currentPage === 'industries') {
    return <IndustriesPage onNavigate={setCurrentPage} />;
  }

  // If about page is active, render it
  if (currentPage === 'about') {
    return <AboutPage onNavigate={setCurrentPage} />;
  }

  // If contact page is active, render it
  if (currentPage === 'contact') {
    return (
      <>
        <ContactPage onNavigate={setCurrentPage} />
        <Toaster position="top-right" richColors />
      </>
    );
  }

  const services = [
    'Annual Reports', 'Banners', 'Booklets', 'Brochures', 'Business Cards',
    'Business Forms', 'Calendars', 'Catalogs', 'Coupons', 'Door Hangers',
    'Envelopes', 'Flyers', 'Gift Cards', 'Graphic Design', 'Greeting Cards',
    'Hang Tags', 'Labels', 'Letters', 'Magazines', 'Media Kits',
    'Manuals', 'NCR Forms', 'Newsletters', 'Newspapers', 'Order Forms',
    'Packaging', 'Personalized Letters', 'POP Displays', 'Postcards', 'Posters',
    'Presentation Folders', 'Promotional Products', 'Self-Mailers', 'Sell Sheets', 'Signs'
  ];

  const features = [
    { icon: DollarSign, title: 'Affordable Rates', description: 'Competitive pricing for all budgets' },
    { icon: Check, title: 'Quality Guarantee', description: 'Customer satisfaction assured' },
    { icon: Users, title: 'Personal Service', description: 'Dedicated one-on-one support' },
    { icon: Award, title: 'Since 1981', description: '40+ years of excellence' },
    { icon: Shield, title: 'Trusted Partner', description: '30,000+ satisfied clients' },
    { icon: TrendingUp, title: 'Fast Turnaround', description: 'Quick delivery on all projects' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" richColors />
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          
          .fade-on-scroll {
            opacity: 0;
            transform: translateY(30px);
          }
        `}
      </style>

      {/* Header */}
      <Header onNavigate={setCurrentPage} />

      <main>
        {/* Hero Section */}
        <section 
          className="relative py-20 lg:py-28 overflow-hidden"
          style={{
            backgroundImage: `url(${heroBackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Animated Overlay */}
          <HeroAnimationOverlay />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="fade-on-scroll bg-white/20 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/30">
                <div className="inline-block px-4 py-2 bg-cyan-100 text-gray-900 rounded-full mb-6">
                  Trusted by 30,000+ Clients Since 1981
                </div>
                <h1 className="text-4xl lg:text-5xl text-gray-900 mb-6">
                  Your Complete Solution for <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Printing Excellence</span>
                </h1>
                <p className="text-xl text-[#ffffff] mb-8">
                  Full-color printing, direct mail, and promotional products delivered with exceptional service.
                </p>
                <div className="space-y-3 text-[#ffffff]">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                    <span>1600 N Kraemer Blvd, Anaheim, CA 92806</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                    <span className="text-xl text-[#ffffff]">(949) 749-4024</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                    <span>Mon-Fri: 8:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-xl shadow-xl fade-on-scroll">
                <h3 className="text-2xl text-gray-900 mb-2">Get a Free Quote</h3>
                <p className="text-gray-600 mb-6">We'll respond within 24 hours</p>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                    required
                  />
                  <textarea
                    name="projectDetails"
                    placeholder="Tell us about your project (service needed, quantity, timeline)"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all resize-none"
                    required
                  />
                  
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Thank you! We'll respond within 24 hours.</span>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                      <span>Sorry, there was an error. Please call us at (949) 749-4024.</span>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-8 py-3 rounded-lg hover:from-cyan-700 hover:to-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : 'Request a Quote'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="bg-gradient-to-b from-white via-gray-50 to-white" id="about">
          <div className="pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20 fade-on-scroll">
                <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">
                  Why Choose Westprint?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Looking for a trusted business printing needs? Look no further than Westprint. Established in 1981, our one-stop printing offers outstanding and affordable rates to the Southern California areas. We also provide one-on-one service, online ordering, and marketing solutions designed to help engage and convert more consumers into your customers. Our experienced professionals are always working to find the best solution that fits your needs. Contact Westprint today for a FREE quote.
                </p>
              </div>
            </div>
          </div>
          
          {/* Scroll-Controlled Features */}
          <ScrollControlledFeatures features={features} />
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Service 1: Full-Color Printing */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="order-2 lg:order-1 fade-on-scroll">
                <ImageWithFallback
                  src="https://advantageinc-ca.com/uploads/westprint-hero-full-color-printing-1920w.jpg"
                  alt="Full-Color Printing"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
              </div>
              <div className="order-1 lg:order-2 fade-on-scroll">
                <h3 className="text-3xl text-gray-900 mb-4">Full-Color Printing</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our on-demand digital printing service accommodates your specific timing, quantity, and delivery needs while minimizing waste from outdated materials.
                </p>
                <button onClick={() => setCurrentPage('services')} className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-lg hover:from-cyan-700 hover:to-teal-700 transition-all">
                  Learn More
                </button>
              </div>
            </div>

            {/* Service 2: Direct Mail Programs */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="fade-on-scroll">
                <h3 className="text-3xl text-gray-900 mb-4">Direct Mail Programs</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Customized direct mail campaigns with cutting-edge technology to efficiently reach your target market with the fastest turnaround times.
                </p>
                <button onClick={() => setCurrentPage('services')} className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-lg hover:from-cyan-700 hover:to-teal-700 transition-all">
                  Learn More
                </button>
              </div>
              <div className="fade-on-scroll">
                <ImageWithFallback
                  src="https://advantageinc-ca.com/uploads/westprint-hero-direct-mail-programs-ef89acbf-1920w.webp"
                  alt="Direct Mail Programs"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* Service 3: Graphic Design */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="order-2 lg:order-1 fade-on-scroll">
                <ImageWithFallback
                  src="https://advantageinc-ca.com/uploads/westprint-hero-graphic-design-1920w.jpg"
                  alt="Graphic Design"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
              </div>
              <div className="order-1 lg:order-2 fade-on-scroll">
                <h3 className="text-3xl text-gray-900 mb-4">Graphic Design</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Allow us to support your business growth with exemplary design. Let outstanding design convert potential leads into valued clients. The proficient graphic designers at Westprint are fully prepared to collaborate with you on your upcoming project.
                </p>
                <button onClick={() => setCurrentPage('services')} className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-lg hover:from-cyan-700 hover:to-teal-700 transition-all">
                  Learn More
                </button>
              </div>
            </div>

            {/* Service 4: Fulfillment */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="fade-on-scroll">
                <h3 className="text-3xl text-gray-900 mb-4">Fulfillment</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our comprehensive fulfillment services facilitate efficient data management, personalized printing, streamlined employee workflow, and adherence to budgetary constraints.
                </p>
                <button onClick={() => setCurrentPage('services')} className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-lg hover:from-cyan-700 hover:to-teal-700 transition-all">
                  Learn More
                </button>
              </div>
              <div className="fade-on-scroll">
                <ImageWithFallback
                  src="https://advantageinc-ca.com/uploads/westprint-hero-fulfillment-1920w.webp"
                  alt="Fulfillment"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* Service 5: Labels */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="order-2 lg:order-1 fade-on-scroll">
                <ImageWithFallback
                  src="https://advantageinc-ca.com/uploads/westprint-hero-labels-cdd719d4-1920w.jpg"
                  alt="Labels"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
              </div>
              <div className="order-1 lg:order-2 fade-on-scroll">
                <h3 className="text-3xl text-gray-900 mb-4">Labels</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  The professionals at Westprint have successfully met a wide range of packaging and label printing needs over the last three decades. We firmly acknowledge that the packaging or label often serves as a client's primary interaction with your company, its offerings, and its products.
                </p>
                <button onClick={() => setCurrentPage('services')} className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-lg hover:from-cyan-700 hover:to-teal-700 transition-all">
                  Learn More
                </button>
              </div>
            </div>

            {/* Service 6: Posters & Banners */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="fade-on-scroll">
                <h3 className="text-3xl text-gray-900 mb-4">Posters & Banners</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Westprint recognizes the significance of upholding your company's image with precision. Our extensive range of banner sizes, shapes, and materials caters to the requirements of one-time promotional signage, banners, and recurring trade show needs.
                </p>
                <button onClick={() => setCurrentPage('services')} className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-lg hover:from-cyan-700 hover:to-teal-700 transition-all">
                  Learn More
                </button>
              </div>
              <div className="fade-on-scroll">
                <ImageWithFallback
                  src="https://advantageinc-ca.com/uploads/westprint-hero-posters-and-banners-1920w.webp"
                  alt="Posters & Banners"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* Service 7: Promotional Products */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="order-2 lg:order-1 fade-on-scroll">
                <ImageWithFallback
                  src="https://advantageinc-ca.com/uploads/westprint-hero-promotional-products-02-1920w.webp"
                  alt="Promotional Products"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
              </div>
              <div className="order-1 lg:order-2 fade-on-scroll">
                <h3 className="text-3xl text-gray-900 mb-4">Promotional Products</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  The skilled design team at Westprint can tailor products to highlight your brand. These items can be effectively utilized for promoting your business or as thoughtful gifts.
                </p>
                <button onClick={() => setCurrentPage('services')} className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-lg hover:from-cyan-700 hover:to-teal-700 transition-all">
                  Learn More
                </button>
              </div>
            </div>

            {/* Service 8: Online Ordering & Marketing */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="fade-on-scroll">
                <h3 className="text-3xl text-gray-900 mb-4">Online Ordering & Marketing</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We are pleased to introduce the launch of trigger-based direct mail campaigns that are equally as impactful as your digital advertising initiatives. For additional details, kindly contact us or complete our contact form, and we will promptly respond to your inquiry.
                </p>
                <button onClick={() => setCurrentPage('services')} className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-lg hover:from-cyan-700 hover:to-teal-700 transition-all">
                  Learn More
                </button>
              </div>
              <div className="fade-on-scroll">
                <ImageWithFallback
                  src="https://advantageinc-ca.com/uploads/westprint-hero-online-ordering-and-marketing-1920w.jpg"
                  alt="Online Ordering & Marketing"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 fade-on-scroll">
              <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600">
                Professional printing solutions for every business need
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 fade-on-scroll">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-cyan-50 transition-colors">
                  <Check className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
              <div className="flex items-center space-x-3 p-4 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-lg">
                <Check className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                <span className="text-gray-900">And much more...</span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-600 to-teal-600 text-white" id="reviews">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 fade-on-scroll">
              <h2 className="text-3xl lg:text-4xl mb-4">What Our Clients Say</h2>
              <p className="text-xl text-cyan-100">Trusted by thousands of satisfied customers</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl fade-on-scroll">
                <div className="flex text-yellow-300 mb-4">
                  {'★'.repeat(5)}
                </div>
                <p className="text-lg mb-4 leading-relaxed">
                  "The signage you created for this year's Corporate Conference was OUTSTANDING! I gave you this year's Gala theme and you ran with it, with no instruction from me. The quality and creativity exceeded all expectations."
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-cyan-100">Celeste T.</div>
                  </div>
                  <div className="text-sm text-cyan-200">June 2025</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl fade-on-scroll">
                <div className="flex text-yellow-300 mb-4">
                  {'★'.repeat(5)}
                </div>
                <p className="text-lg mb-4 leading-relaxed">
                  "I've been using Westprint for decades - same great team I've trusted all these years! Even after moving my business, I still come back because the quality and service are unmatched."
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-cyan-100">Robin Preiss G.</div>
                  </div>
                  <div className="text-sm text-cyan-200">January 2025</div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12 fade-on-scroll">
              <button onClick={() => setCurrentPage('contact')} className="inline-block px-8 py-4 bg-white text-cyan-600 rounded-lg hover:bg-gray-100 transition-all">
                Get Started Today
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl">Visit Us</h3>
              </div>
              <div className="text-gray-300 space-y-1">
                <p>1600 N Kraemer Blvd</p>
                <p>Anaheim, CA 92806</p>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors inline-block mt-2">
                  Get Directions →
                </a>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl">Business Hours</h3>
              </div>
              <div className="text-gray-300 space-y-1">
                <p>Monday - Friday</p>
                <p>8:00 AM - 5:00 PM</p>
                <p className="pt-2">Saturday - Sunday: Closed</p>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Phone className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl">Contact Us</h3>
              </div>
              <div className="text-gray-300 space-y-2">
                <p className="text-xl text-white">(949) 749-4024</p>
                <a href="mailto:estimating@westprint.com" className="text-cyan-400 hover:text-cyan-300 transition-colors block">
                  estimating@westprint.com
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Westprint. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
