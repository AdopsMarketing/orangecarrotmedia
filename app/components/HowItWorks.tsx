import React from 'react';
import { BarChart, Search, Facebook, Database, Shield, Clock } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const requirements = [
    {
      icon: BarChart,
      title: 'Google Analytics 4',
      description: 'View access to analyze your website traffic and user behavior patterns'
    },
    {
      icon: Search,
      title: 'Google Search Console',
      description: 'Access to review your search performance and technical SEO health'
    },
    {
      icon: Facebook,
      title: 'Facebook/Meta Ads Account',
      description: 'Review your social media advertising performance (if applicable)'
    },
    {
      icon: Database,
      title: 'CRM or Additional Platforms',
      description: 'Optional access to other marketing tools you use for comprehensive analysis'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            To conduct your comprehensive audit, we'll need temporary access to your key marketing platforms
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {requirements.map((requirement, index) => {
            const IconComponent = requirement.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {requirement.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {requirement.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Your Data is 100% Secure
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We treat all information with strict confidentiality. All access is temporary and removed immediately after the audit is complete.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>48-hour delivery</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                <span>HIPAA compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;