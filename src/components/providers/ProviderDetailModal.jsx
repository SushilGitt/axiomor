import { useEffect } from 'react';
import { X, ExternalLink, Check, Star, Shield, Zap } from 'lucide-react';
import { Button } from '../ui/Button';
import { ProviderLogo } from '../ui/ProviderLogo';
import { Badge } from '../ui/Badge';

export function ProviderDetailModal({ provider, isOpen, onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !provider) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
          <div className="flex items-center gap-4">
            <div className="h-12 w-24 flex items-center justify-center bg-white p-1 rounded border border-gray-200">
              <ProviderLogo providerId={provider.id} name={provider.name} className="max-h-full max-w-full" />
            </div>
            <div>
              <h2 id="modal-title" className="text-2xl font-bold text-gray-900">{provider.name}</h2>
              <div className="flex items-center gap-2 text-sm mt-1">
                <Badge variant="brand" className="text-xs">{provider.bestFor}</Badge>
                <div className="flex items-center text-yellow-500 font-bold">
                  <Star className="w-3.5 h-3.5 fill-current mr-1" />
                  {provider.rating} / 5
                </div>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-6 space-y-8">
          
          {/* Overview */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Overview</h3>
            <p className="text-gray-600 leading-relaxed">{provider.description}</p>
          </section>

          {/* Pricing & Guarantee */}
          <section className="bg-brand-50 rounded-xl p-5 border border-brand-100">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div>
                 <h4 className="text-sm font-medium text-brand-800 uppercase tracking-wide mb-2">Starting Price</h4>
                 <div className="flex items-baseline">
                   <span className="text-3xl font-bold text-brand-900">{provider.currency}{provider.startingPrice}</span>
                   <span className="text-brand-700 ml-1">{provider.period}</span>
                 </div>
               </div>
               <div>
                  <h4 className="text-sm font-medium text-brand-800 uppercase tracking-wide mb-2">Money Back Guarantee</h4>
                  <div className="flex items-center text-brand-900 font-semibold">
                    <Shield className="w-5 h-5 mr-2" />
                    30 Days Risk-Free
                  </div>
               </div>
             </div>
          </section>

          {/* Features */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-yellow-500" />
              Key Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {provider.features.map((feature, idx) => (
                <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <Check className="w-4 h-4 text-green-500 mr-2.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Pros & Cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3 border-b border-gray-100 pb-2">Advantages</h3>
              <ul className="space-y-3">
                {provider.pros.map((pro, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {pro}
                  </li>
                ))}
              </ul>
            </section>
            
            <section>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3 border-b border-gray-100 pb-2">Things to Consider</h3>
              <ul className="space-y-3">
                {provider.cons.map((con, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-2.5 mt-2 flex-shrink-0"></span>
                    {con}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Footer CTA */}
        {provider.affiliateLink && (
          <div className="p-6 border-t border-gray-100 bg-gray-50/80 backdrop-blur flex justify-end">
            <Button asChild size="lg" className="w-full sm:w-auto shadow-lg shadow-brand-500/20">
              <a href={provider.affiliateLink} target="_blank" rel="noopener noreferrer">
                Visit Official Website <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        )}

      </div>
    </div>
  );
}
