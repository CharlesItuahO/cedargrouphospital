import Link from "next/link";
import { MapPin, Phone, Clock, Mail, Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                CG
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white leading-tight">Cedar Group</span>
                <span className="text-xs text-blue-400 font-semibold tracking-wider uppercase">Hospital</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              To show tremendous care for patients, rooted in the belief in the sanctity of human life.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="/testimonials" className="hover:text-blue-400 transition-colors">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link href="/admin" className="hover:text-blue-400 transition-colors">Admin Login</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Accidents & Emergency</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Intensive Care Unit</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Renal Dialysis</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Surgery</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Paediatrics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>Off 2nd Avenue, 208 D Close, Festac Town, Lagos 102102, Lagos</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>07045669178</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>info@cedargrouphospital.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Open 24 Hours, 7 Days a Week</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Cedar Group Hospital. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
