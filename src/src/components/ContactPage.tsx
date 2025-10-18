import { useEffect, useState, FormEvent } from 'react';
import Header from './Header';
import Footer from './Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { Toaster } from './ui/sonner';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      company: formData.get('company') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      service: formData.get('service') as string,
      quantity: formData.get('quantity') as string,
      timeline: formData.get('timeline') as string,
      message: formData.get('message') as string,
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

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" richColors />
      <Header onNavigate={onNavigate} />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Ready to get started? We're here to help bring your printing projects to life. Contact us today for a free consultation and quote.
            </p>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Quote Request Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl text-gray-900">Request a Quote</h2>
                </div>
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="firstName" className="block text-sm text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all duration-300"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="full-color-printing">Full-Color Printing</option>
                      <option value="direct-mail">Direct Mail Programs</option>
                      <option value="graphic-design">Graphic Design</option>
                      <option value="fulfillment">Fulfillment Services</option>
                      <option value="labels">Labels & Packaging</option>
                      <option value="banners">Posters & Banners</option>
                      <option value="promotional">Promotional Products</option>
                      <option value="online-ordering">Online Ordering</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="quantity" className="block text-sm text-gray-700 mb-2">
                      Estimated Quantity
                    </label>
                    <select
                      id="quantity"
                      name="quantity"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all duration-300"
                    >
                      <option value="">Select quantity range</option>
                      <option value="1-100">1 - 100</option>
                      <option value="100-500">100 - 500</option>
                      <option value="500-1000">500 - 1,000</option>
                      <option value="1000-5000">1,000 - 5,000</option>
                      <option value="5000+">5,000+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm text-gray-700 mb-2">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      <option value="rush">Rush (1-3 days)</option>
                      <option value="standard">Standard (1-2 weeks)</option>
                      <option value="flexible">Flexible (2+ weeks)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-gray-50 hover:bg-white transition-all duration-300 resize-none"
                      placeholder="Please describe your project, including size, colors, paper type, and any special requirements..."
                      required
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Thank you! We've received your request and will respond within 24 hours.</span>
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                      <span>Sorry, there was an error submitting your request. Please try again or call us at (949) 749-4024.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-4 px-6 rounded-lg hover:from-cyan-700 hover:to-teal-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        SENDING...
                      </span>
                    ) : 'REQUEST A QUOTE'}
                  </button>

                  <div className="text-sm text-gray-500 space-y-1 pt-2 border-t border-gray-100">
                    <p className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-0.5">✓</span>
                      <span>Required fields marked with *. We'll respond within 24 hours.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-0.5">✓</span>
                      <span>Your information is secure and will never be shared.</span>
                    </p>
                  </div>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <h2 className="text-3xl text-gray-900 mb-8">Get in Touch</h2>
                  <div className="space-y-6">
                    <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-cyan-50 hover:to-teal-50 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl text-gray-900 mb-2">Visit Our Location</h3>
                        <p className="text-gray-600">
                          1600 N Kraemer Blvd<br />
                          Anaheim, CA 92806
                        </p>
                        <a
                          href="https://maps.google.com?q=1600+N+Kraemer+Blvd+Anaheim+CA+92806"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-600 hover:text-cyan-700 inline-flex items-center gap-1 mt-2"
                        >
                          Get Directions →
                        </a>
                      </div>
                    </div>

                    <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-cyan-50 hover:to-teal-50 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl text-gray-900 mb-2">Call Us</h3>
                        <p className="text-gray-600">
                          <a href="tel:949-749-4024" className="text-cyan-600 hover:text-cyan-700 transition-colors">
                            (949) 749-4024
                          </a>
                        </p>
                        <p className="text-sm text-gray-500 mt-1">Available Mon-Fri, 8AM-5PM</p>
                      </div>
                    </div>

                    <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-cyan-50 hover:to-teal-50 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl text-gray-900 mb-2">Email Us</h3>
                        <p className="text-gray-600">
                          <a href="mailto:customercare@westprint.com" className="text-cyan-600 hover:text-cyan-700 break-all transition-colors">
                            customercare@westprint.com
                          </a>
                        </p>
                        <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-cyan-50 hover:to-teal-50 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl text-gray-900 mb-2">Business Hours</h3>
                        <div className="text-gray-600 space-y-1">
                          <p className="flex justify-between gap-4">
                            <span>Monday - Friday:</span>
                            <span className="text-cyan-600">8:00 AM - 5:00 PM</span>
                          </p>
                          <p className="flex justify-between gap-4">
                            <span>Saturday:</span>
                            <span className="text-gray-400">Closed</span>
                          </p>
                          <p className="flex justify-between gap-4">
                            <span>Sunday:</span>
                            <span className="text-gray-400">Closed</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl shadow-lg p-8 border border-cyan-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl text-gray-900 mb-2">Upload Your Files</h3>
                      <p className="text-gray-600 mb-4">Have files ready? Upload them for a more accurate quote.</p>
                      <a
                        href="https://westprint.wetransfer.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:from-cyan-700 hover:to-teal-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                      >
                        Upload Files
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}


        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl text-gray-900 mb-3">What file formats do you accept?</h3>
                <p className="text-gray-600 mb-6">
                  We accept all major file formats including PDF, AI, EPS, PSD, INDD, JPG, PNG, and TIFF. For best results, we recommend high-resolution PDFs.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-gray-900 mb-3">What are your turnaround times?</h3>
                <p className="text-gray-600 mb-6">
                  Standard turnaround is 5-7 business days. Rush orders can be completed in 1-3 days for an additional fee. Contact us for specific project timelines.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-gray-900 mb-3">Do you offer design services?</h3>
                <p className="text-gray-600 mb-6">
                  Yes! Our in-house design team can help create or modify designs to meet your needs. We offer everything from simple layout adjustments to complete design packages.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-gray-900 mb-3">What payment methods do you accept?</h3>
                <p className="text-gray-600 mb-6">
                  We accept cash, check, and all major credit cards. We also offer NET 30 terms for qualified business accounts.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
