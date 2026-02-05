import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ComparisonTable } from '../components/providers/ComparisonTable';
import { ProviderCard } from '../components/providers/ProviderCard';
import { BlogCard } from '../components/blog/BlogCard';
import { providers } from '../data/providers';
import { blogPosts } from '../data/blogPosts';
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function Home() {
  const topProviders = providers.slice(0, 3);
  const location = useLocation();

  // Featured providers for detailed reviews (mix of domains and hosting including Kinsta)
  const kinsta = providers.find(p => p.name === 'Kinsta');
  const featuredReviewProviders = [
    providers[0],  // Namecheap (domain)
    providers[8],  // Bluehost (hosting)
    providers[10], // SiteGround (hosting)
    kinsta,        // Kinsta (hosting)
  ].filter(Boolean);

  useEffect(() => {
    if (location.state?.scrollTo === 'compare-providers') {
      const section = document.getElementById('compare-providers');
      if (section) {
        // Short timeout to ensure render completion
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-600 bg-brand-50 mb-6 border border-brand-100">
            Updated for 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Best Domain & Hosting <br className="hidden md:block" />
            <span className="text-brand-600">Providers Compared</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 mb-10">
            Axiomor tests and reviews the top domain registrars and web hosting companies so you can build your online presence with confidence.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#compare-providers">Compare Now</a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/about">How We Review</Link>
            </Button>
          </div>
        </div>

        {/* Background Decorative Blob */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      </section>

      {/* Comparison Table Section */}
      <section id="compare-providers" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Top 3 Hosting Providers</h2>
            <p className="mt-4 text-lg text-gray-600">Quick side-by-side comparison of our top rated choices.</p>
          </div>
          <ComparisonTable providers={providers} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Detailed Provider Reviews</h2>
            <p className="mt-4 text-lg text-gray-600">In-depth look at features, pricing, and performance.</p>
          </div>
          
          <div className="space-y-8">
            {featuredReviewProviders.map((provider, index) => (
              <ProviderCard key={provider.id} provider={provider} featured={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Highlights Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Latest Guides & Resources</h2>
            <p className="mt-4 text-lg text-gray-600">
              Expert advice to help you build, grow, and manage your online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/blog">View All Guides</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features / How We Compare Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-900 mb-6">
                <ShieldCheck className="h-8 w-8 text-brand-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Unbiased Reviews</h3>
              <p className="text-gray-400">
                We purchase and test every hosting plan anonymously to ensure our data is accurate and impartial.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-900 mb-6">
                <Zap className="h-8 w-8 text-brand-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Performance Testing</h3>
              <p className="text-gray-400">
                We monitor uptime and speed 24/7 using industry-standard tools to give you real-world performance metrics.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-900 mb-6">
                <CheckCircle2 className="h-8 w-8 text-brand-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Expert Analysis</h3>
              <p className="text-gray-400">
                Our team of web experts evaluates support quality, feature sets, and ease of use for every provider.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to start your website?</h2>
          <p className="text-xl text-brand-100 mb-10">
            Choose a provider that fits your needs and budget. We've done the research so you don't have to.
          </p>
          <Button size="lg" variant="secondary" className="text-brand-700 font-bold">
             See All Recommendations
          </Button>
        </div>
      </section>
    </Layout>
  );
}
