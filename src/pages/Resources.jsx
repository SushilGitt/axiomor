import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { PageHeader } from '../components/layout/PageHeader';
import { Card } from '../components/ui/Card';
import { BookOpen, Server, Shield, Globe } from 'lucide-react';

export default function Resources() {
  const resourceCategories = [
    {
      title: 'Domain Basics',
      icon: <Globe className="w-6 h-6 text-brand-600" />,
      description: 'Everything you need to know about buying, managing, and transferring domains.',
      links: [
        { title: 'How to Choose the Right Domain Name', href: '/blog/right-domain-name' },
        { title: 'Best Domain Extensions Explained', href: '/blog/domain-extensions-explained' },
        { title: 'How to Transfer a Domain', href: '/blog/transfer-domain' },
      ]
    },
    {
      title: 'Hosting Guides',
      icon: <Server className="w-6 h-6 text-brand-600" />,
      description: 'Learn the differences between shared, VPS, and cloud hosting.',
      links: [
        { title: 'How Web Hosting Works', href: '/blog/hosting-works-simple' },
        { title: 'Shared vs VPS vs Cloud Hosting', href: '/blog/shared-vps-cloud' },
        { title: 'Common Hosting Mistakes to Avoid', href: '/blog/hosting-mistakes' },
      ]
    },
    {
      title: 'Website Performance',
      icon: <BookOpen className="w-6 h-6 text-brand-600" />,
      description: 'Tips and tricks to make your website load faster and rank better.',
      links: [
        { title: 'How Website Speed Impacts SEO', href: '/blog/speed-impacts-seo' },
        { title: 'Top 10 SEO Tips for New Owners', href: '/blog/3' }, // Linking to existing ID 3 from blogPosts
      ]
    },
    {
      title: 'Security & Maintenance',
      icon: <Shield className="w-6 h-6 text-brand-600" />,
      description: 'Keep your website safe from hackers and data loss.',
      links: [
        { title: 'Why You Need SSL Certificates', href: '/blog' },
        { title: 'Importance of Regular Backups', href: '/blog' },
      ]
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Resources & Guides" 
        description="Educational content to help you build a better web presence. No sales pitches, just learning."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {resourceCategories.map((category, idx) => (
            <Card key={idx} className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-brand-50 p-3 rounded-lg mr-4">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{category.description}</p>
              <ul className="space-y-3">
                {category.links.map((link, i) => (
                  <li key={i}>
                    <Link to={link.href} className="text-brand-600 hover:text-brand-800 hover:underline font-medium">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
