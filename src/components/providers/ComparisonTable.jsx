import { useState } from 'react';
import { Check, X, Info } from 'lucide-react';
import { Button } from '../ui/Button';
import { ProviderLogo } from '../ui/ProviderLogo';
import { ProviderDetailModal } from './ProviderDetailModal';

export function ComparisonTable({ providers }) {
  const [selectedProvider, setSelectedProvider] = useState(null);

  return (
    <>
      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">Feature</th>
              {providers.slice(0, 3).map((provider) => (
                <th key={provider.id} scope="col" className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-8 w-20 flex items-center justify-center">
                      <ProviderLogo 
                        providerId={provider.id} 
                        name={provider.name} 
                        className="max-h-full max-w-full" 
                      />
                    </div>
                    <span>{provider.name}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Starting Price</td>
              {providers.slice(0, 3).map((provider) => (
                <td key={provider.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center font-bold">
                  {provider.currency}{provider.startingPrice}{provider.period}
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Rating</td>
              {providers.slice(0, 3).map((provider) => (
                <td key={provider.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <span className="font-bold">{provider.rating}</span>
                    <span className="text-gray-400">/ 5</span>
                  </div>
                </td>
              ))}
            </tr>
             <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Best For</td>
              {providers.slice(0, 3).map((provider) => (
                <td key={provider.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                  {provider.bestFor}
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Money Back Guarantee</td>
              {providers.slice(0, 3).map((provider) => (
                <td key={provider.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                  30 Days
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Link</td>
              {providers.slice(0, 3).map((provider) => (
                <td key={provider.id} className="px-6 py-4 whitespace-nowrap text-center">
                  <Button size="sm" variant="outline" onClick={() => setSelectedProvider(provider)}>
                    Details
                  </Button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <ProviderDetailModal 
        provider={selectedProvider} 
        isOpen={!!selectedProvider} 
        onClose={() => setSelectedProvider(null)} 
      />
    </>
  );
}
