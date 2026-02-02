import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Cookie, X } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    
    if (!consent) {
      // Delay initial appearance for smooth UX
      const timer = setTimeout(() => {
        setShouldRender(true);
        // Small timeout to allow render before animating in
        requestAnimationFrame(() => setIsVisible(true));
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (choice) => {
    // Save preference
    localStorage.setItem('cookieConsent', choice);
    
    // Animate out
    setIsVisible(false);
    
    // Remove from DOM after animation completes
    setTimeout(() => {
      setShouldRender(false);
    }, 500); // Matches transition duration
  };

  if (!shouldRender) return null;

  return (
    <div 
      className={`
        fixed bottom-0 right-0 left-0 z-50 p-4 md:p-6 
        transition-all duration-500 ease-in-out transform
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
      `}
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 md:flex md:items-center md:justify-between gap-6">
          <div className="flex items-start gap-4 mb-6 md:mb-0">
            <div className="hidden sm:flex h-12 w-12 items-center justify-center flex-shrink-0 rounded-full bg-brand-50 text-brand-600">
              <Cookie className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">We value your privacy</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
                We use cookies to improve site performance, analyze traffic, and support affiliate referrals. 
                You can accept all cookies or decline non-essential ones.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Button 
              variant="outline" 
              onClick={() => handleConsent('essential')}
              className="whitespace-nowrap"
            >
              Decline
            </Button>
            <Button 
              onClick={() => handleConsent('all')}
              className="whitespace-nowrap"
            >
              Accept Cookies
            </Button>
            <Link 
              to="/cookies-policy" 
              className="text-sm font-medium text-gray-500 hover:text-gray-900 flex items-center justify-center sm:justify-start px-2"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
