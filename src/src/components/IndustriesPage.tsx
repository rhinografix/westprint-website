import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Activity, Home, Briefcase, Scale, GraduationCap, Heart, Factory, ShoppingBag, Monitor, Lock, Zap, Gem } from 'lucide-react';

interface IndustriesPageProps {
  onNavigate: (page: string) => void;
}

export default function IndustriesPage({ onNavigate }: IndustriesPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const industries = [
    {
      icon: Activity,
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      title: 'Healthcare',
      description: 'HIPAA-compliant printing solutions for medical practices, hospitals, and healthcare organizations.',
      services: [
        'Patient forms and records',
        'Medical brochures and education materials',
        'Prescription pads and labels',
        'HIPAA-compliant direct mail'
      ]
    },
    {
      icon: Home,
      bgColor: 'bg-green-100',
      textColor: 'text-green-600',
      title: 'Real Estate',
      description: 'Marketing materials that help real estate professionals showcase properties and build their brand.',
      services: [
        'Property brochures and flyers',
        'Business cards and stationery',
        'For sale signs and banners',
        'Direct mail campaigns'
      ]
    },
    {
      icon: Briefcase,
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-600',
      title: 'Financial Services',
      description: 'Secure, professional printing for banks, credit unions, and financial institutions.',
      services: [
        'Annual reports and statements',
        'Forms and applications',
        'Marketing materials',
        'Secure document printing'
      ]
    },
    {
      icon: Scale,
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600',
      title: 'Legal',
      description: 'Confidential and professional printing services for law firms and legal professionals.',
      services: [
        'Legal briefs and documents',
        'Court forms and pleadings',
        'Client presentations',
        'Confidential document handling'
      ]
    },
    {
      icon: GraduationCap,
      bgColor: 'bg-red-100',
      textColor: 'text-red-600',
      title: 'Education',
      description: 'Educational materials and administrative printing for schools, colleges, and universities.',
      services: [
        'Textbooks and course materials',
        'Admission packets and forms',
        'Event programs and newsletters',
        'Student handbooks'
      ]
    },
    {
      icon: Heart,
      bgColor: 'bg-pink-100',
      textColor: 'text-pink-600',
      title: 'Non-Profit',
      description: 'Cost-effective printing solutions for non-profit organizations and charitable foundations.',
      services: [
        'Fundraising materials',
        'Event programs and tickets',
        'Donor communications',
        'Annual reports'
      ]
    },
    {
      icon: Factory,
      bgColor: 'bg-gray-100',
      textColor: 'text-gray-600',
      title: 'Manufacturing',
      description: 'Industrial printing solutions for manufacturing companies and distribution centers.',
      services: [
        'Safety manuals and guides',
        'Product catalogs',
        'Labels and packaging',
        'Technical documentation'
      ]
    },
    {
      icon: ShoppingBag,
      bgColor: 'bg-indigo-100',
      textColor: 'text-indigo-600',
      title: 'Retail',
      description: 'Point-of-sale materials and marketing collateral for retail businesses and franchises.',
      services: [
        'Point-of-sale displays',
        'Product labels and tags',
        'Store signage',
        'Promotional materials'
      ]
    },
    {
      icon: Monitor,
      bgColor: 'bg-teal-100',
      textColor: 'text-teal-600',
      title: 'Technology',
      description: 'High-tech printing solutions for software companies and technology startups.',
      services: [
        'User manuals and guides',
        'Product documentation',
        'Conference materials',
        'Marketing collateral'
      ]
    }
  ];

  const benefits = [
    {
      icon: Lock,
      title: 'Security & Compliance',
      description: 'We understand industry regulations and maintain strict security protocols for sensitive documents.'
    },
    {
      icon: Zap,
      title: 'Fast Turnaround',
      description: 'Quick delivery times to meet your business deadlines and urgent printing needs.'
    },
    {
      icon: Gem,
      title: 'Premium Quality',
      description: 'Professional-grade printing that reflects the quality and standards of your industry.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header onNavigate={onNavigate} />
      
      {/* Hero Section */}
      <section 
        className="text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://advantageinc-ca.com/uploads/westprint-bg3.jpg)' }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center backdrop-blur-md bg-white/20 rounded-2xl py-12 border border-white/30 shadow-xl">
          <h1 className="text-5xl mb-6 text-gray-900">Industries We Serve</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-800">
            Trusted by businesses across diverse industries. We understand your unique needs and deliver tailored printing solutions that drive results.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 ${industry.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                    <IconComponent className={`${industry.textColor} w-8 h-8`} />
                  </div>
                  <h3 className="text-2xl text-gray-900 mb-4">{industry.title}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <ul className="text-gray-600 space-y-2">
                    {industry.services.map((service, idx) => (
                      <li key={idx}>• {service}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Westprint */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl text-gray-900 mb-8">Why Industries Choose Westprint</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index}>
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-xl text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl mb-6">Don't See Your Industry?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We work with businesses of all types and sizes. Contact us to discuss your specific industry needs.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-block bg-white text-cyan-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
