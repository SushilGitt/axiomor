import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { PageHeader } from '../components/layout/PageHeader';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { ProviderLogo } from '../components/ui/ProviderLogo';
import { ProviderDetailModal } from '../components/providers/ProviderDetailModal';
import { providers } from '../data/providers';
import { Check, Star, ArrowRight, Info } from 'lucide-react';

export default function Reviews() {
  const [selectedProvider, setSelectedProvider] = useState(null);

  // Filter for specific providers requested for the reviews page
  const reviewProviders = providers.filter(p => 
    ['Namecheap', 'GoDaddy', 'Hostinger', 'Bluehost', 'SiteGround', 'Cloudways'].includes(p.name)
  );

  return (
    <Layout>
      <PageHeader 
        title="In-Depth Provider Reviews" 
        description="Our honest, unbiased evaluations of the top domain registrars and web hosting companies."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewProviders.map((provider) => (
            <div key={provider.id} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <div className="h-10 w-24 flex items-center">
                   <ProviderLogo 
                     providerId={provider.id} 
                     name={provider.name} 
                     className="max-h-full max-w-full" 
                   />
                </div>
                <div className="flex items-center text-yellow-400 font-bold text-sm">
                  <Star className="w-4 h-4 fill-current mr-1" />
                  {provider.rating}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <Badge variant="brand" className="w-fit mb-3">{provider.bestFor}</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{provider.name} Review</h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">{provider.description}</p>
                
                <div className="space-y-2 mb-6">
                  {provider.pros.slice(0, 3).map((pro, idx) => (
                    <div key={idx} className="flex items-start text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{pro}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                   <div className="text-sm">
                     <span className="text-gray-500">Starting at </span>
                     <span className="font-bold text-gray-900">{provider.currency}{provider.startingPrice}</span>
                   </div>
                   <Button size="sm" variant="ghost" onClick={() => setSelectedProvider(provider)}>
                     Know More <Info className="ml-1 w-3 h-3" />
                   </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProviderDetailModal 
        provider={selectedProvider} 
        isOpen={!!selectedProvider} 
        onClose={() => setSelectedProvider(null)} 
      />
    </Layout>
  );
}
