import { useEffect } from 'react';
import { Mail, Printer, Palette, Package, Tag, Image, Gift, Monitor, Settings } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={onNavigate} />

      <main>
        {/* Hero Section */}
        <section 
          className="bg-gradient-to-br from-cyan-600 via-teal-600 to-cyan-700 text-white py-20 relative"
        >
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <div className="bg-white/20 backdrop-blur-xl p-8 md:p-12 border border-white/30 shadow-2xl mx-auto max-w-4xl rounded-2xl">
              <h1 className="text-5xl mb-6 text-white">Our Services</h1>
              <p className="text-xl text-white">
                Comprehensive printing solutions designed to meet all your business needs. From concept to completion, we deliver exceptional quality and service.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Full-Color Printing */}
              <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-cyan-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Printer className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-3">Full-Color Printing</h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">
                    State-of-the-art digital and offset printing services for vibrant, high-quality prints. Perfect for brochures, flyers, business cards, and marketing materials.
                  </p>
                  <ul className="text-gray-600 space-y-2.5">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Digital printing for quick turnaround</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Offset printing for large quantities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Color matching and proofing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Various paper stocks available</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Direct Mail Programs */}
              <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-cyan-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-3">Direct Mail Programs</h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">
                    Comprehensive direct mail solutions from design to delivery. Target your audience effectively with personalized campaigns.
                  </p>
                  <ul className="text-gray-600 space-y-2.5">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>List management and targeting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Variable data printing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Postal optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Campaign tracking and analytics</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Graphic Design */}
              <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-cyan-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Palette className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-3">Graphic Design</h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">
                    Professional design services to bring your vision to life. Our talented designers create compelling visuals that drive results.
                  </p>
                  <ul className="text-gray-600 space-y-2.5">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Logo and brand identity design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Marketing material design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Web and digital graphics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Layout and typesetting</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Fulfillment Services */}
              <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-cyan-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Package className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-3">Fulfillment Services</h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">
                    Complete warehousing and fulfillment solutions. From inventory management to shipping, we handle it all.
                  </p>
                  <ul className="text-gray-600 space-y-2.5">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Inventory management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Pick, pack, and ship services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Online order integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Custom packaging solutions</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Labels & Packaging */}
              <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-cyan-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Tag className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-3">Labels & Packaging</h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">
                    High-quality labels for all applications. From product labels to shipping labels, we provide durable, professional solutions.
                  </p>
                  <ul className="text-gray-600 space-y-2.5">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Product and packaging labels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Waterproof and durable materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Custom shapes and sizes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Barcode and QR code printing</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Posters & Banners */}
              <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-cyan-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Image className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-3">Posters & Banners</h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">
                    Large format printing for maximum impact. Perfect for trade shows, events, and storefront displays.
                  </p>
                  <ul className="text-gray-600 space-y-2.5">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Indoor and outdoor banners</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Trade show displays</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Window graphics and decals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Custom sizing available</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Promotional Products */}
              <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-cyan-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Gift className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-3">Promotional Products</h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">
                    Branded merchandise that makes lasting impressions. From pens to apparel, we help you promote your brand effectively.
                  </p>
                  <ul className="text-gray-600 space-y-2.5">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Custom branded merchandise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Corporate gifts and awards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Trade show giveaways</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Employee recognition items</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Online Ordering & Marketing */}
              <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-cyan-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Monitor className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-3">Online Ordering & Marketing</h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">
                    Streamlined online ordering systems and digital marketing solutions. Simplify your print procurement process.
                  </p>
                  <ul className="text-gray-600 space-y-2.5">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Custom online storefronts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Automated reordering systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Digital marketing integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Real-time order tracking</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Additional Services */}
              <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-cyan-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Settings className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-3">Additional Services</h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">
                    Specialized printing and finishing services to complete your projects with professional touches.
                  </p>
                  <ul className="text-gray-600 space-y-2.5">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Binding and finishing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Lamination and coating</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Die cutting and embossing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span>Variable data printing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-600 to-teal-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us help you bring your vision to life with our comprehensive printing services.
            </p>
            <button onClick={() => onNavigate('contact')} className="inline-block bg-white text-cyan-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Request a Quote
            </button>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
