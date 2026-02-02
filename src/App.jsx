import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AffiliateDisclosure from './pages/AffiliateDisclosure';
import Terms from './pages/Terms';
import ProviderCategory from './pages/ProviderCategory';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Reviews from './pages/Reviews';
import Resources from './pages/Resources';
import TopPicks from './pages/TopPicks';
import CookiesPolicy from './pages/CookiesPolicy';
import { CookieConsent } from './components/layout/CookieConsent';
import { ScrollToTop } from './components/layout/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
        <Route path="/disclosure" element={<AffiliateDisclosure />} />
        <Route path="/terms" element={<Terms />} />
        
        {/* New Content Pages */}
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/top-picks" element={<TopPicks />} />

        {/* Blog Routes */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        
        {/* Domain Comparison Routes */}
        <Route 
          path="/domains" 
          element={
            <ProviderCategory 
              title="All Domain Registrars" 
              description="Compare top domain registrars to find your perfect match."
              filterType="domain"
            />
          } 
        />
        <Route 
          path="/best-domain-registrars" 
          element={
            <ProviderCategory 
              title="Best Domain Registrars 2026" 
              description="Top-rated registrars for security, ease of use, and support."
              filterType="domain"
            />
          } 
        />
        <Route 
          path="/cheapest-domain-providers" 
          element={
            <ProviderCategory 
              title="Cheapest Domain Providers" 
              description="Save money on your domain registration and renewals."
              filterType="domain"
            />
          } 
        />

        {/* Hosting Comparison Routes */}
        <Route 
          path="/hosting" 
          element={
            <ProviderCategory 
              title="All Web Hosting Providers" 
              description="Complete list of reliable web hosting companies."
              filterType="hosting"
            />
          } 
        />
        <Route 
          path="/best-web-hosting" 
          element={
            <ProviderCategory 
              title="Best Web Hosting 2026" 
              description="Performance-tested hosting for businesses and blogs."
              filterType="hosting"
            />
          } 
        />
        <Route 
          path="/vps" 
          element={
            <ProviderCategory 
              title="VPS & Cloud Hosting" 
              description="High-performance servers for growing applications."
              filterType="vps"
            />
          } 
        />
        <Route 
          path="/best-vps-hosting" 
          element={
            <ProviderCategory 
              title="Best VPS Hosting Providers" 
              description="Top-tier virtual private servers compared."
              filterType="vps"
            />
          } 
        />
        <Route 
          path="/domain-hosting-bundles" 
          element={
            <ProviderCategory 
              title="Best Domain & Hosting Bundles" 
              description="Get a free domain when you buy hosting from these providers."
              filterType="hosting"
            />
          } 
        />

        {/* Fallback */}
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center text-center p-4">
            <div>
               <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
               <a href="/" className="text-brand-600 hover:underline mt-4 inline-block">Return Home</a>
            </div>
          </div>
        } />
      </Routes>
      <CookieConsent />
    </>
  );
}

export default App;
