import React from 'react';
import { AlertTriangle, TrendingDown, Clock } from 'lucide-react';

const WhyItMatters: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why It's Critical
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Your digital presence is your front door. Inconsistent traffic, poor conversions, or missed opportunities can limit your growth. This audit will pinpoint the gaps and show how to fix them — fast.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-red-50 to-red-100 border border-red-200">
            <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingDown className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Missed Opportunities</h3>
            <p className="text-gray-600">
              Every day without optimization means potential patients are choosing competitors instead.
            </p>
          </div>
          
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200">
            <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Time is Money</h3>
            <p className="text-gray-600">
              Inefficient marketing spend and poor conversion rates directly impact your bottom line.
            </p>
          </div>
          
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
            <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Hidden Issues</h3>
            <p className="text-gray-600">
              Technical problems and strategy gaps often go unnoticed until it's too late.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;