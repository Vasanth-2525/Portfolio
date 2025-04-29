import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-white">Jenni</h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ex.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white">Quick Link</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#fdc448] transition-colors">Service</a></li>
            <li><a href="#" className="hover:text-[#fdc448] transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-[#fdc448] transition-colors">Blog Post</a></li>
            <li><a href="#" className="hover:text-[#fdc448] transition-colors">Pricing</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white">Contact</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <FaPhone className="mt-1 text-[#fdc448]" />
              <span>-9138755643210</span>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-[#fdc448]" />
              <span>95684 Ronzhniew dr.Rudhol.comon</span>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className="mt-1 text-[#fdc448]" />
              <span>Junnil@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white">Newsletter</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="mt-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Your Email
            </label>
            <div className="flex">
              <input
                type="email"
                id="email"
                className="flex-grow px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#fdc448]"
                placeholder="Enter your email"
              />
              <button className="bg-[#fdc448] text-gray-900 px-4 py-2 rounded-r-lg font-medium hover:bg-[#e6b340] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Jenni. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;