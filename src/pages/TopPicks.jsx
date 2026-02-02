import { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { PageHeader } from '../components/layout/PageHeader';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ProviderLogo } from '../components/ui/ProviderLogo';
import { ProviderDetailModal } from '../components/providers/ProviderDetailModal';
import { providers } from '../data/providers';
import { Check, Trophy, Info, Globe, Server, Cloud } from 'lucide-react';

export default function TopPicks() {
  const [selectedProvider, setSelectedProvider] = useState(null);

  // Top Domain Registrar Picks
  const domainPicks = [
    {
      title: 'Best Overall Domain Registrar',
      description: 'Namecheap is our top choice for domain registration. With free WhoisGuard privacy protection, transparent pricing, and an intuitive dashboard, it makes managing domains effortless.',
      providerId: 1 // Namecheap
    },
    {
      title: 'Best for Domain Investors',
      description: 'Porkbun offers some of the lowest renewal rates in the industry with quirky branding and honest pricing. Perfect for managing a large domain portfolio.',
      providerId: 4 // Porkbun
    },
    {
      title: 'Best for Large Marketplace',
      description: 'GoDaddy has the largest domain marketplace with frequent promotional discounts. Excellent phone support and bundle deals for those who want everything in one place.',
      providerId: 2 // GoDaddy
    },
    {
      title: 'Best No-Nonsense Registrar',
      description: 'Hover focuses purely on domains with zero upsells, free privacy protection, and human-powered support. The cleanest registration experience available.',
      providerId: 8 // Hover
    }
  ];

  // Top Hosting Provider Picks
  const hostingPicks = [
    {
      title: 'Best Premium WordPress Hosting',
      description: 'Kinsta delivers enterprise-grade performance powered by Google Cloud Platform. With 24/7 expert support, free Cloudflare CDN, and automatic daily backups, it is the gold standard for serious WordPress sites.',
      providerId: 17 // Kinsta
    },
    {
      title: 'Best Budget Web Hosting',
      description: 'Hostinger offers unbeatable value with their custom hPanel and LiteSpeed servers. Get fast loading speeds at the lowest price point in the industry.',
      providerId: 10 // Hostinger
    },
    {
      title: 'Best for Beginners',
      description: 'Bluehost provides the most seamless "from zero to launch" experience. Officially recommended by WordPress.org with 1-click installation and 24/7 support.',
      providerId: 9 // Bluehost
    },
    {
      title: 'Best Support Quality',
      description: 'SiteGround is renowned for having the best customer support in the industry. Built on Google Cloud with daily backups and top-tier security features.',
      providerId: 11 // SiteGround
    }
  ];

  // Top VPS/Cloud Picks
  const vpsPicks = [
    {
      title: 'Best Managed Cloud Hosting',
      description: 'Cloudways simplifies cloud hosting by managing DigitalOcean, AWS, or Google Cloud for you. Perfect balance of power and ease of use without needing sysadmin skills.',
      providerId: 16 // Cloudways
    },
    {
      title: 'Best for Speed',
      description: 'A2 Hosting Turbo Servers deliver up to 20x faster page loads. Great for developers with SSH access, staging environments, and a generous money-back guarantee.',
      providerId: 12 // A2 Hosting
    }
  ];

  const getProvider = (id) => providers.find(p => p.id === id) || providers[0];

  const renderPickCard = (pick, idx) => {
    const provider = getProvider(pick.providerId);
    return (
      <Card key={idx} className="p-8 border-l-4 border-l-brand-600">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/4 flex flex-col items-center text-center">
            <ProviderLogo
              providerId={provider.id}
              name={provider.name}
              className="max-h-16 mb-4"
            />
            <Badge variant="brand" className="mb-2">{provider.rating} / 5</Badge>
            <p className="text-lg font-bold text-gray-900">{provider.currency}{provider.startingPrice}{provider.period}</p>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
               <Trophy className="w-5 h-5 text-yellow-500" />
               <h3 className="text-xl font-bold text-gray-900">{pick.title}</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {pick.description}
            </p>

            <div className="grid grid-cols-2 gap-2 mb-6">
              {provider.features.slice(0, 4).map((f, i) => (
                 <div key={i} className="flex items-center text-sm text-gray-500">
                   <Check className="w-3 h-3 text-green-500 mr-2" />
                   {f}
                 </div>
              ))}
            </div>

            <Button onClick={() => setSelectedProvider(provider)}>
              Know More Details <Info className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <Layout>
      <PageHeader
        title="Our Top Picks"
        description="Editorial recommendations based on rigorous testing and specific user needs."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-12 text-sm text-yellow-800">
          <strong>Disclaimer:</strong> These picks are based on our own research and editorial criteria. We may earn a commission if you purchase through our links.
        </div>

        {/* Domain Registrars Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-brand-100 rounded-lg">
              <Globe className="w-6 h-6 text-brand-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Top Domain Registrars</h2>
              <p className="text-gray-600">Best places to buy and manage your domain names</p>
            </div>
          </div>
          <div className="space-y-8">
            {domainPicks.map((pick, idx) => renderPickCard(pick, idx))}
          </div>
        </div>

        {/* Web Hosting Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-green-100 rounded-lg">
              <Server className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Top Web Hosting Providers</h2>
              <p className="text-gray-600">Best hosting solutions for websites of all sizes</p>
            </div>
          </div>
          <div className="space-y-8">
            {hostingPicks.map((pick, idx) => renderPickCard(pick, idx))}
          </div>
        </div>

        {/* VPS/Cloud Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Cloud className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Top VPS & Cloud Hosting</h2>
              <p className="text-gray-600">Scalable solutions for growing businesses and developers</p>
            </div>
          </div>
          <div className="space-y-8">
            {vpsPicks.map((pick, idx) => renderPickCard(pick, idx))}
          </div>
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
