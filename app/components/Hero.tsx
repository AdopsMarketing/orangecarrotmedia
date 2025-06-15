import React from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';

interface HeroProps {
  onGetAudit: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetAudit }) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-16 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <TrendingUp className="w-4 h-4 mr-2" />
            Exclusively for GMEC Attendees
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up">
            Unlock Growth with a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              FREE
            </span>{' '}
            Healthcare Marketing Audit
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Discover What's Holding Your Practice Back Online
          </p>
          
          <button
            onClick={onGetAudit}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-fade-in-up animation-delay-400"
          >
            Get My Free Audit
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          
          <p className="text-sm text-gray-500 mt-4 animate-fade-in-up animation-delay-600">
            No obligations • 100% confidential • Expert insights
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;