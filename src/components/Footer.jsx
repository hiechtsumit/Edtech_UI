import React from 'react';
import { Phone, MapPin, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h3 className="font-bold text-black-blue text-lg mb-4">Company Info</h3>
            <ul className="space-y-2">
              <li><a href="#" className=" font-semibold">About Us</a></li>
              <li><a href="#" className=" font-semibold">Carrier</a></li>
              <li><a href="#" className=" font-semibold">We are hiring</a></li>
              <li><a href="#" className=" font-semibold">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-black-blue text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className=" font-semibold">About Us</a></li>
              <li><a href="#" className=" font-semibold">Carrier</a></li>
              <li><a href="#" className=" font-semibold">We are hiring</a></li>
              <li><a href="#" className=" font-semibold">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-black-blue text-lg mb-4">Features</h3>
            <ul className="space-y-2">
              <li><a href="#" className=" font-semibold">Business Marketing</a></li>
              <li><a href="#" className=" font-semibold">User Analytic</a></li>
              <li><a href="#" className=" font-semibold">Live Chat</a></li>
              <li><a href="#" className=" font-semibold">Unlimited Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-black-blue text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className=" font-semibold">IOS & Android</a></li>
              <li><a href="#" className=" font-semibold">Watch a Demo</a></li>
              <li><a href="#" className=" font-semibold">Customers</a></li>
              <li><a href="#" className=" font-semibold">API</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-black-blue text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-green-white" />
                <span className=" font-semibold">(480) 555-0103</span>
              </li>
              <li className="flex items-center">
                <MapPin size={36} className="mr-2 text-green-white" />
                <span className=" font-semibold">4517 Washington Ave. Manchester, Kentucky 39495</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-green-white" />
                <span className=" font-semibold">debra.holt@example.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="font-semibold ">Made With Love By Figmaland All Right Reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-green-white"><Facebook size={24} /></a>
            <a href="#" className="text-green-white"><Instagram size={24} /></a>
            <a href="#" className="text-green-white"><Twitter size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;