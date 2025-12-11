import React from 'react';
import { Facebook, Instagram, Youtube, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import LogoImg from "../../assets/header/logo.png";
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 place-items-center md:place-items-start " style={{ alignItems : 'flex-end'}}>
        {/* class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 place-items-center md:place-items-start" */}

          {/* Corporate Office */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4 text-center md:text-left">Corporate Office</h3>
            <div className="flex items-start text-gray-600 text-sm">
              {/* <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" /> */}
              <p>#200, 4th floor, 10th cross, CBI Main Road,<br />Ganganagar, Bangalore - 560032</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center w-[100%]">
            {/* Logo */}
            <div className="mb-2">
              <div className="inline-block">
                <div className="text-amber-600 text-sm mb-1">
                  <img src={LogoImg} alt="Logo" className="w-20  mx-auto" />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center text-gray-800 mb-0">
                {/* <Phone className="w-4 h-4 mr-2" /> */}
                <a href="tel:8550882882" className="hover:text-amber-600 transition-colors dm-serif-italic text-[26px]">
                  85508 82882
                </a>
              </div>
              <div className="flex items-center justify-center text-gray-800">
                {/* <Mail className="w-4 h-4 mr-2" /> */}
                <a href="mailto:info@vibezclub.com" className="dm-serif-italic text-[26px] hover:text-amber-600 transition-colors text-sm">
                  info@vibezclub.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center  md:text-right w-[100%]">
            <h3 className="text-gray-800 font-semibold mb-4">Follow us on</h3>
            <div className="flex  justify-center md:justify-end space-x-4">
              <a href="#" className="text-gray-800 hover:text-amber-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-800 hover:text-amber-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-800 hover:text-amber-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-800 hover:text-amber-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col  justify-between items-center text-sm text-gray-600 space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a href="#" className="hover:text-amber-600 transition-colors">Privacy Policies</a>
              <a href="#" className="hover:text-amber-600 transition-colors">Terms & Conditions</a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="m-5 text-center">Copyright © 2025 Vibez Estates</p>
              <p className="text-xs text-gray-500">
                *All images, renders and statistics are a concept stage exploration and subject to change as the project develops.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}