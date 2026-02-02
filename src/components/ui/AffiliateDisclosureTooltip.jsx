import { Info } from 'lucide-react';

export function AffiliateDisclosureTooltip({ mobile = false }) {
  if (mobile) {
    return (
      <div className="group relative block py-3 border-b border-gray-50 cursor-pointer">
        <div className="flex items-center justify-between text-base font-medium text-gray-500 hover:text-gray-900">
          <span>Affiliate Disclosure</span>
          <Info className="h-4 w-4" />
        </div>
        
        {/* Tooltip Content - Always visible on expand/click in mobile or handled via hover for simplicity in this pure CSS implementation if 'group-hover' works well on tap */}
        <div className="hidden group-active:block group-focus:block group-hover:block mt-2 p-3 bg-gray-50 rounded-lg text-sm text-gray-600 leading-relaxed border border-gray-100">
          Some links on this site are affiliate links. We may earn a commission at no extra cost to you. Our content remains independent and research-based.
        </div>
      </div>
    );
  }

  return (
    <div className="relative group inline-block">
      <button 
        type="button" 
        className="text-sm font-medium text-gray-500 cursor-default hover:text-gray-900 flex items-center gap-1 transition-colors outline-none focus:text-gray-900"
        aria-label="Affiliate Disclosure Information"
      >
        Affiliate Disclosure
      </button>

      {/* Tooltip Popup */}
      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 p-4 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50 transform origin-top">
        {/* Arrow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-2 border-8 border-transparent border-b-white drop-shadow-sm"></div>
        
        <div className="relative z-10">
          <p className="text-xs text-gray-600 leading-relaxed text-center">
            Some links on this site are affiliate links. We may earn a commission at no extra cost to you. Our content remains independent and research-based.
          </p>
        </div>
      </div>
    </div>
  );
}
