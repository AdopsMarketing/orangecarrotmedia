import React from 'react';
import { Users, Target, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            You Scanned the Code — Now Let's Accelerate Your Growth
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We're <strong className="text-orange-600">Orange Carrot Media</strong> — a healthcare-specialized marketing agency helping hospitals and private practices grow their patient base with proven, data-driven digital strategies.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              You've taken the first step. Let us show you where your digital strategy can go further — completely free.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Healthcare Specialized</h3>
            <p className="text-gray-600">Deep expertise in healthcare marketing, patient acquisition, and compliance requirements.</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Data-Driven Approach</h3>
            <p className="text-gray-600">Every strategy is backed by comprehensive analytics and measurable results.</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Growth</h3>
            <p className="text-gray-600">Track record of helping healthcare practices scale their patient base effectively.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;