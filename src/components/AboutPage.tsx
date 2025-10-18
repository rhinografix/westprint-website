import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Target, Handshake, Rocket, Users, Palette, Wrench, Factory, Trophy, Star, Leaf, Award, Clock } from 'lucide-react';

// Using a professional image URL for the Westprint sign
const westprintSignImage = "https://advantageinc-ca.com/uploads/westprint-bg2.jpg";

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={onNavigate} />

      <main>
        {/* Hero Section */}
        <section 
          className="text-white py-20 bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: 'url(https://advantageinc-ca.com/uploads/westprint-bg2.jpg)' }}
        >
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="backdrop-blur-xl bg-white/20 rounded-2xl py-12 px-8 border border-white/30 shadow-2xl">
              <h1 className="text-5xl mb-6 text-gray-900">About Westprint</h1>
              <p className="text-xl max-w-3xl mx-auto text-gray-800">
                Since 1981, we've been helping businesses make lasting impressions through exceptional printing services and unwavering commitment to quality.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-50 to-teal-50 px-4 py-2 rounded-full border border-cyan-100">
                  <Clock className="w-5 h-5 text-cyan-600" />
                  <span className="text-cyan-700">40+ Years of Excellence</span>
                </div>
                <h2 className="text-4xl text-gray-900">Our Story</h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Founded in 1981, Westprint began as a small printing shop with a big vision: to provide businesses with exceptional printing services that help them succeed. Over four decades later, we've grown to become one of Southern California's most trusted printing partners.
                  </p>
                  <p>
                    What started as a family-owned business has evolved into a comprehensive printing and marketing solutions company, serving over 30,000 clients across diverse industries. Despite our growth, we've never lost sight of our core values: quality, reliability, and personalized service.
                  </p>
                  <p>
                    Today, Westprint continues to innovate and adapt to the changing needs of our clients, incorporating the latest printing technologies while maintaining the personal touch that has defined us for over 40 years.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                    <div className="text-3xl text-cyan-600 mb-1">40+</div>
                    <div className="text-sm text-gray-600">Years</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                    <div className="text-3xl text-cyan-600 mb-1">30K+</div>
                    <div className="text-sm text-gray-600">Clients</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                    <div className="text-3xl text-cyan-600 mb-1">50K</div>
                    <div className="text-sm text-gray-600">Sq. Ft.</div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl h-[500px] overflow-hidden shadow-2xl border border-gray-200 hover:shadow-3xl transition-shadow duration-500">
                <ImageWithFallback
                  src={westprintSignImage}
                  alt="Westprint Billboard - Quality Printing Services Since 1981"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl text-gray-900 mb-4">Our Mission & Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're driven by a simple mission: to help businesses communicate effectively through high-quality printing solutions and exceptional service.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: 'Quality Excellence',
                  description: "We're committed to delivering the highest quality printing services, using state-of-the-art equipment and premium materials.",
                  gradient: 'from-cyan-500 to-teal-500'
                },
                {
                  icon: Handshake,
                  title: 'Personal Service',
                  description: 'Every client receives personalized attention and dedicated support to ensure their projects exceed expectations.',
                  gradient: 'from-teal-500 to-cyan-500'
                },
                {
                  icon: Rocket,
                  title: 'Innovation',
                  description: 'We continuously invest in new technologies and processes to provide cutting-edge solutions for our clients.',
                  gradient: 'from-cyan-600 to-teal-600'
                }
              ].map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${value.gradient} opacity-5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}></div>
                    <div className="relative">
                      <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <IconComponent className="text-white w-8 h-8" />
                      </div>
                      <h3 className="text-2xl text-gray-900 mb-4">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our experienced professionals are the heart of Westprint. With decades of combined experience, they're dedicated to bringing your vision to life.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: 'Leadership Team',
                  subtitle: 'Experienced executives guiding our strategic vision',
                  description: 'Our leadership team brings decades of industry experience and a commitment to excellence in every project.',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: Palette,
                  title: 'Design Professionals',
                  subtitle: 'Creative experts bringing your ideas to life',
                  description: 'Our talented designers work closely with clients to create compelling visuals that communicate effectively and drive results.',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: Wrench,
                  title: 'Production Specialists',
                  subtitle: 'Skilled technicians ensuring perfect execution',
                  description: 'Our production team combines technical expertise with attention to detail to deliver flawless results on every project.',
                  color: 'from-orange-500 to-red-500'
                }
              ].map((team, index) => {
                const IconComponent = team.icon;
                return (
                  <div key={index} className="group bg-gradient-to-b from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    <div className={`w-32 h-32 bg-gradient-to-br ${team.color} rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-2xl text-gray-900 mb-2 text-center">{team.title}</h3>
                    <p className="text-cyan-600 mb-4 text-center">{team.subtitle}</p>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {team.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Capabilities Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl h-[500px] overflow-hidden shadow-2xl border border-gray-200 order-2 lg:order-1 hover:shadow-3xl transition-shadow duration-500">
                <ImageWithFallback
                  src="https://advantageinc-ca.com/uploads/A7C06168.jpg"
                  alt="Westprint State-of-the-Art Printing Facility"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-50 to-teal-50 px-4 py-2 rounded-full border border-cyan-100 mb-6">
                  <Factory className="w-5 h-5 text-cyan-600" />
                  <span className="text-cyan-700">50,000 Sq. Ft. Facility</span>
                </div>
                <h2 className="text-4xl text-gray-900 mb-6">Our Capabilities</h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Our 50,000 square foot facility in Anaheim houses the latest printing equipment and technology. From digital and offset printing to large format and specialty printing, we have the capabilities to handle projects of any size.
                  </p>
                  <p className="text-gray-900">We've invested in state-of-the-art equipment including:</p>
                  <div className="space-y-3">
                    {[
                      'High-speed digital printing presses',
                      'Multi-color offset printing equipment',
                      'Large format printers for banners and signage',
                      'Automated finishing and binding equipment',
                      'Full-service fulfillment and mailing center'
                    ].map((capability, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:border-cyan-200 hover:shadow-md transition-all duration-300">
                        <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Recognition Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl text-gray-900 mb-4">Awards & Recognition</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Honored to be recognized for our commitment to excellence, innovation, and customer satisfaction.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Trophy,
                  title: 'Industry Leader',
                  description: 'Recognized for excellence in printing services',
                  gradient: 'from-yellow-400 to-orange-500',
                  bgGradient: 'from-yellow-50 to-orange-50'
                },
                {
                  icon: Star,
                  title: 'Customer Choice',
                  description: '4.5-star rating from satisfied customers',
                  gradient: 'from-blue-500 to-cyan-500',
                  bgGradient: 'from-blue-50 to-cyan-50'
                },
                {
                  icon: Leaf,
                  title: 'Environmental Leader',
                  description: 'Committed to sustainable printing practices',
                  gradient: 'from-green-500 to-emerald-500',
                  bgGradient: 'from-green-50 to-emerald-50'
                },
                {
                  icon: Rocket,
                  title: 'Innovation Award',
                  description: 'Leading the industry in new technologies',
                  gradient: 'from-purple-500 to-pink-500',
                  bgGradient: 'from-purple-50 to-pink-50'
                }
              ].map((award, index) => {
                const IconComponent = award.icon;
                return (
                  <div key={index} className={`group relative bg-gradient-to-br ${award.bgGradient} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${award.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    <div className="relative">
                      <div className={`w-16 h-16 bg-gradient-to-br ${award.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <IconComponent className="text-white w-8 h-8" />
                      </div>
                      <h3 className="text-xl text-gray-900 mb-2 text-center">{award.title}</h3>
                      <p className="text-gray-600 text-center text-sm leading-relaxed">{award.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-600 to-teal-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the Westprint difference. Let us help you make a lasting impression with professional printing services tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Started Today
              </button>
              <button 
                onClick={() => onNavigate('services')}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                View Our Services
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
