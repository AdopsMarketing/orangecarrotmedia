import React from 'react';
import { Stethoscope, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Orange Carrot Media</h3>
                <p className="text-gray-400 text-sm">Healthcare Marketing Specialists</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Helping healthcare practices and hospitals grow their patient base through data-driven digital marketing strategies.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <span className="text-sm">hello@orangecarrotmedia.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <span className="text-sm">1-800-CARROT-1</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span className="text-sm">Serving healthcare practices nationwide</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">GMEC Exclusive</h4>
            <p className="text-gray-300 text-sm mb-4">
              This special offer is exclusively available to GMEC Trade Show attendees.
            </p>
            <div className="bg-orange-900 bg-opacity-50 p-4 rounded-lg">
              <p className="text-orange-200 text-sm font-medium">
                Limited time offer - Claim your free audit today!
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Orange Carrot Media. All rights reserved. | HIPAA Compliant | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;