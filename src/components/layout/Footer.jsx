import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-brand-600 p-1.5 rounded-lg">
                <Globe className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Axiomor</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              We compare the best domain registrars and hosting providers to help you make informed decisions for your online presence.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Comparisons</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/domains" className="text-base text-gray-400 hover:text-brand-400">Best Domain Registrars</Link></li>
              <li><Link to="/hosting" className="text-base text-gray-400 hover:text-brand-400">Best Web Hosting</Link></li>
              <li><Link to="/vps" className="text-base text-gray-400 hover:text-brand-400">Cheap VPS Hosting</Link></li>
              <li><Link to="/hosting" className="text-base text-gray-400 hover:text-brand-400">WordPress Hosting</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/contact" className="text-base text-gray-400 hover:text-brand-400">Contact Us</Link></li>
              <li><Link to="/about" className="text-base text-gray-400 hover:text-brand-400">About Us</Link></li>
              <li><Link to="/blog" className="text-base text-gray-400 hover:text-brand-400">Guides & Tutorials</Link></li>
              <li><a href="mailto:support@axiomor.com" className="text-base text-gray-400 hover:text-brand-400">support@axiomor.com</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/privacy" className="text-base text-gray-400 hover:text-brand-400">Privacy Policy</Link></li>
              <li><Link to="/cookies-policy" className="text-base text-gray-400 hover:text-brand-400">Cookies Policy</Link></li>
              <li><Link to="/terms" className="text-base text-gray-400 hover:text-brand-400">Terms of Service</Link></li>
              <li><Link to="/disclosure" className="text-base text-gray-400 hover:text-brand-400">Affiliate Disclosure</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-xs text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Axiomor. All rights reserved.
          </p>
          <p className="mt-4 text-xs text-gray-600 text-center max-w-2xl mx-auto">
            Disclosure: We may earn a commission when you purchase through links on our site. This comes at no extra cost to you and helps us maintain our high-quality content.
          </p>
        </div>
      </div>
    </footer>
  );
}
