export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl mb-6 flex items-center">
              <div className="w-8 h-8 bg-teal-500 rounded mr-3 flex items-center justify-center">📍</div>
              VISIT US
            </h3>
            <div className="text-gray-300">
              <p>1600 N Kraemer Blvd</p>
              <p>Anaheim, CA 92806</p>
              <a 
                href="https://maps.google.com/?q=1600+N+Kraemer+Blvd+Anaheim+CA+92806" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-teal-400 hover:text-teal-300 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl mb-6 flex items-center">
              <div className="w-8 h-8 bg-teal-500 rounded mr-3 flex items-center justify-center">🕒</div>
              HOURS
            </h3>
            <div className="text-gray-300">
              <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
              <p>Sat: Closed</p>
              <p>Sun: Closed</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl mb-6 flex items-center">
              <div className="w-8 h-8 bg-teal-500 rounded mr-3 flex items-center justify-center">📞</div>
              CONTACT US
            </h3>
            <div className="text-gray-300">
              <p>Phone: (949) 749-4024</p>
              <a 
                href="mailto:customercare@westprint.com" 
                className="text-teal-400 hover:text-teal-300 transition-colors"
              >
                customercare@westprint.com
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© 2026 The content on this website is owned by us and our licensors. Do not copy any content (including images) without our consent.</p>
        </div>
      </div>
    </footer>
  );
}
