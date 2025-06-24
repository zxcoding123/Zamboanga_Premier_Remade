import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-blue-950 text-white pt-10 pb-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Premier Medical Center</h2>
          <p className="text-sm text-blue-100">
            Providing compassionate, state-of-the-art healthcare for the Zamboanga region and beyond.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm text-blue-200">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
          <ul className="space-y-2 text-sm text-blue-200">
            <li className="flex items-center gap-2"><MapPin size={16} /> Zamboanga City, Philippines</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +63 900 123 4567</li>
            <li className="flex items-center gap-2"><Mail size={16} /> info@pmcz.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"><Facebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"><Twitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"><Instagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 border-t border-blue-800 pt-6 text-center text-sm text-blue-300">
        © {new Date().getFullYear()} Premier Medical Center Zamboanga. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
