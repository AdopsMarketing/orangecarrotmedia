import React from 'react';
import { CheckCircle, Globe, BarChart3, Users, Search, Target } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'Website & SEO Performance Analysis',
      description: 'Complete technical audit of your site\'s performance and search visibility'
    },
    {
      icon: Target,
      title: 'Google Ads & Meta Ads Campaign Review',
      description: 'In-depth analysis of your current advertising performance and ROI'
    },
    {
      icon: Users,
      title: 'Patient Journey & Funnel Evaluation',
      description: 'Map your patient acquisition process and identify conversion bottlenecks'
    },
    {
      icon: BarChart3,
      title: 'Google Analytics 4 & Search Console Insights',
      description: 'Deep dive into your data to uncover hidden opportunities'
    },
    {
      icon: Search,
      title: 'Competitor Benchmarking',
      description: 'See how you stack up against other practices in your market'
    },
    {
      icon: CheckCircle,
      title: 'Clear, Actionable Recommendations',
      description: 'Specific steps you can take immediately to improve your results'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What You'll Get (100% Free)
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            <em>No strings attached. Just expert insights to help you grow.</em>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-lg">
            <CheckCircle className="w-5 h-5 mr-2" />
            <span className="font-medium">Complete audit delivered within 48 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;