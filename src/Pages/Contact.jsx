import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1d1b18ab]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Contact Info */}
        <div className="space-y-8">
          <h1 className="text-3xl font-bold text-[#fdc448] mt-8">Get Ready to Create Great</h1>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 ">
                <FaEnvelope className="text-4xl p-2 rounded-full border-[1px]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold ">E-Mail:</h3>
                <p className="">Jomr@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1 ">
                <FaMapMarkerAlt className="text-4xl p-2 rounded-full border-[1px]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold ">Location:</h3>
                <p className="">39884 Ronchview dr.RoPhu.com.au</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1 ">
                <FaPhone className="text-4xl p-2 rounded-full border-[1px]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold ">Contact:</h3>
                <p className="">+91 9876543210</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className=" p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-[#fdc448]  mb-8">Get in Touch</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-transparent border-[1px]  rounded-lg focus:ring-1 focus:ring-[#fdc448] focus:border-[#fdc448] outline-none transition"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
            
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-transparent border-[1px] rounded-lg focus:ring-1 focus:ring-[#fdc448] focus:border-[#fdc448] outline-none transition"
                  placeholder="Enter your phone"
                />
              </div>
            </div>
            
            <div>
              
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-transparent border-[1px] rounded-lg focus:ring-1 focus:ring-[#fdc448] focus:border-[#fdc448] outline-none transition"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-transparent border-[1px] rounded-lg focus:ring-1 focus:ring-[#fdc448] focus:border-[#fdc448] outline-none transition"
                placeholder="Enter subject"
              />
            </div>
            
            <div>
              
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-transparent border-[1px] rounded-lg focus:ring-1 focus:ring-[#fdc448] focus:border-[#fdc448] outline-none transition"
                placeholder="Enter your message"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#fdc448] text-gray-900 font-medium py-3 px-6 rounded-lg hover:bg-[#e6b340] transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;