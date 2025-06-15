import React from 'react';
import { ArrowRight, Clock, Users } from 'lucide-react';

interface CTAProps {
  onGetAudit: () => void;
}

const CTA: React.FC<CTAProps> = ({ onGetAudit }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Discover Your Growth Opportunities?
        </h2>
        <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
          This FREE audit is only available for GMEC Trade Show attendees. Limited spots available!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <div className="flex items-center text-orange-100">
            <Clock className="w-5 h-5 mr-2" />
            <span>48-hour turnaround</span>
          </div>
          <div className="flex items-center text-orange-100">
            <Users className="w-5 h-5 mr-2" />
            <span>GMEC exclusive offer</span>
          </div>
        </div>
        
        <button
          onClick={onGetAudit}
          className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
        >
          Claim My Free Audit
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
        
        <p className="text-orange-100 mt-4 text-sm">
          No credit card required • 100% confidential • HIPAA compliant
        </p>
      </div>
    </section>
  );
};

export default CTA;