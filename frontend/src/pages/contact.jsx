import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <p className="text-gray-600 text-center max-w-2xl mb-8">
        Need help? Our support team is available 24/7 to assist you with any inquiries. 
        Fill out the form below, or reach out to us via email or phone.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {/* Contact Form */}
        <div className="p-6 bg-white shadow-lg rounded-2xl">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="p-6 bg-white shadow-lg rounded-2xl flex flex-col space-y-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Contact Information</h2>
          <p className="text-gray-600 mb-4">
            You can also reach us through our support email, phone number, or visit our office.
          </p>
          <div className="flex items-center space-x-3">
            <Mail className="text-blue-600" />
            <p className="text-gray-700">support@elearning.com</p>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="text-blue-600" />
            <p className="text-gray-700">+1 234 567 890</p>
          </div>
          {/* <div className="flex items-center space-x-3">
            <MapPin className="text-blue-600" />
            <p className="text-gray-700">123 E-Learning St, Tech City</p>
          </div> */}
          <h3 className="text-lg font-semibold text-gray-700 mt-4">Support Hours:</h3>
          <p className="text-gray-600">Monday - Friday: 9 AM - 6 PM (EST)</p>
          <p className="text-gray-600">Saturday - Sunday: 10 AM - 4 PM (EST)</p>
        </div>
      </div>
    </div>
  );
}
