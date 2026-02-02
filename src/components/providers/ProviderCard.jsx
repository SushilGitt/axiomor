import { useState } from 'react';
import { Star, Check, X, ExternalLink, Info } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ProviderLogo } from '../ui/ProviderLogo';
import { ProviderDetailModal } from './ProviderDetailModal';

export function ProviderCard({ provider, featured }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className={`flex flex-col md:flex-row p-6 gap-6 relative ${featured ? 'border-brand-200 ring-4 ring-brand-50' : ''}`}>
        {featured && (
          <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            Best Choice
          </div>
        )}
        
        {/* Logo & Rating Section */}
        <div className="flex-shrink-0 w-full md:w-48 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-6">
          <div className="h-16 w-32 flex items-center justify-center mb-4">
            <ProviderLogo 
              providerId={provider.id} 
              name={provider.name} 
              className="max-h-full max-w-full"
            />
          </div>
          <div className="flex items-center space-x-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(provider.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
            <span className="text-sm font-semibold text-gray-700 ml-2">{provider.rating}</span>
          </div>
          <Badge variant="brand">{provider.bestFor}</Badge>
        </div>

        {/* Details Section */}
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{provider.name}</h3>
          <p className="text-gray-600 text-sm mb-4">{provider.description}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {provider.features.slice(0, 4).map((feature, idx) => (
              <div key={idx} className="flex items-center text-gray-700">
                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & CTA Section */}
        <div className="flex-shrink-0 w-full md:w-48 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-6">
          <div className="text-center mb-4">
            <span className="text-gray-500 text-sm">Starting at</span>
            <div className="flex items-baseline justify-center">
              <span className="text-lg text-gray-900 font-bold">{provider.currency}</span>
              <span className="text-3xl text-gray-900 font-bold tracking-tight">{provider.startingPrice}</span>
              <span className="text-gray-500 text-sm">{provider.period}</span>
            </div>
          </div>
          
          <Button className="w-full mb-2" onClick={() => setIsModalOpen(true)}>
            Know More Details <Info className="ml-2 w-4 h-4" />
          </Button>
          <span className="text-xs text-gray-400 text-center block">
            30-day money-back guarantee
          </span>
        </div>
      </Card>

      <ProviderDetailModal 
        provider={provider} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
