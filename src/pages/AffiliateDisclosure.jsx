import { Layout } from '../components/layout/Layout';
import { PageHeader } from '../components/layout/PageHeader';

export default function AffiliateDisclosure() {
  return (
    <Layout>
      <PageHeader 
        title="Affiliate Disclosure" 
        description="Transparency is important to us. Here is how we fund our work."
      />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-lg prose-blue text-gray-600">
        <p className="lead text-xl text-gray-800 mb-8">
          The short version: Axiomor participates in affiliate programs. If you purchase through our links, we may earn a commission. This comes at no extra cost to you.
        </p>

        <h3>Our Commitment to Honesty</h3>
        <p>
          Our goal is to provide helpful, unbiased content. The products and services we review are selected based on our research and testing. We do not accept payment to write positive reviews, and our editorial team operates independently of our potential commission earnings.
        </p>

        <h3>How Affiliate Links Work</h3>
        <p>
          When you click a link on our website to a provider (such as Bluehost or Namecheap), a special tracking code is used. This allows the provider to know that you came from our site.
        </p>
        <p>
          If you proceed to buy a domain or hosting plan, we may receive a referral fee. This helps cover the costs of running this website, including server costs, content creation, and tool subscriptions.
        </p>

        <h3>No Cost to You</h3>
        <p>
          Using an affiliate link <strong>never</strong> increases the price you pay. In fact, in many cases, our links unlock special discounts or introductory rates that are cheaper than the public price.
        </p>

        <h3>Limitation of Liability</h3>
        <p>
          While we strive to keep our information accurate and up-to-date, pricing and terms of service for the providers we list can change without notice. We cannot guarantee the performance or reliability of any third-party service provider. Your use of any service is subject to that provider's own terms and conditions.
        </p>

        <h3>Questions?</h3>
        <p>
          If you have any questions about our affiliate relationships or how we fund this site, please contact us at <a href="mailto:support@axiomor.online">support@axiomor.online</a>.
        </p>

        <p className="mt-8 pt-8 border-t border-gray-200 text-sm">
          Last updated: January 2026
        </p>
      </div>
    </Layout>
  );
}
