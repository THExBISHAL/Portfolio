import { TfiEmail } from "react-icons/tfi";
import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { Send } from "lucide-react";

function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full bg-blue-950 py-16 px-4 cursor-default"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-300">
            <span className="text-yellow-700">Contact </span>Me
          </h2>
          <p className="mt-2 text-gray-300 font-medium">
            Looking to connect? I'm just a message away.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Contact Info */}
          <div className="bg-blue-900 rounded-lg p-6 space-y-8 text-gray-300 shadow-md border border-blue-950">
            <h3 className="text-2xl font-semibold text-center">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <TfiEmail className="text-yellow-600 text-xl mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:iambishalchakraborty1304@gmail.com"
                    className="text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    iambishalchakraborty1304@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <IoCallSharp className="text-yellow-600 text-xl mt-1" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+919564652895"
                    className="text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    +91 95646 52895
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaLocationDot className="text-yellow-600 text-xl mt-1" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-300">Kolkata, WB, India</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h4 className="font-medium mb-4 text-gray-300">
                  Connect with Me
                </h4>
                <div className="flex space-x-4 mt-5 gap-3">
                  <a
                    href="https://www.linkedin.com/in/bishal-chakraborty-6081342a6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href="https://x.com/THExBISHAL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/thebishalchakraborty/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500"
                  >
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="bg-blue-900 rounded-lg p-6  shadow-md border border-blue-950 text-gray-300">
            <h3 className="text-2xl font-semibold text-center mb-6">
              Send a Message
            </h3>
            <form
              className="space-y-6"
              action="https://formsubmit.co/iambishalchakraborty1304@gmail.com"
              method="POST"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 text-sm font-medium"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="Name"
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-700 bg-blue-950 text-gray-300 focus:ring-2 focus:ring-yellow-500"
                  placeholder="John Doe..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="Email"
                  id="email"
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-700 bg-blue-950 text-gray-300 focus:ring-2 focus:ring-yellow-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-1 text-sm font-medium"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  name="Msg"
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-700 bg-blue-950 text-gray-300 focus:ring-2 focus:ring-yellow-500 resize-none"
                  placeholder="Hello, I'd like to discuss..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-700 hover:bg-yellow-800 transition-colors text-gray-300 px-4 py-2 rounded-md flex justify-center items-center gap-2"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
