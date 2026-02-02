import { Layout } from '../components/layout/Layout';
import { PageHeader } from '../components/layout/PageHeader';
import { ProviderCard } from '../components/providers/ProviderCard';
import { ComparisonTable } from '../components/providers/ComparisonTable';
import { providers } from '../data/providers';

export default function ProviderCategory({ title, description, filterType }) {
  // Simulating filtering based on props, in a real app this would filter by category
  // For demo purposes we just shuffle or slice the mock data
  const filteredProviders = filterType === 'all' 
    ? providers 
    : providers.filter(p => p.bestFor.toLowerCase().includes(filterType) || p.description.toLowerCase().includes(filterType)); // Simple mock filter

  // Fallback if filter matches nothing, just show all for demo
  const displayProviders = filteredProviders.length > 0 ? filteredProviders : providers;

  return (
    <Layout>
      <PageHeader title={title} description={description} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Comparison */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Comparison</h2>
          <ComparisonTable providers={displayProviders} />
        </div>

        {/* Detailed List */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Reviews</h2>
          <div className="space-y-8">
            {displayProviders.map((provider, index) => (
              <ProviderCard key={provider.id} provider={provider} featured={index === 0} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
