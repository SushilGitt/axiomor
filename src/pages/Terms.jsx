import { Layout } from '../components/layout/Layout';
import { PageHeader } from '../components/layout/PageHeader';

export default function Terms() {
  return (
    <Layout>
      <PageHeader 
        title="Terms of Service" 
        description="Please read these terms and conditions carefully before using our website."
      />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-blue text-gray-600">
        <h3>1. Acceptance of Terms</h3>
        <p>
          By accessing and using Axiomor, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this websites particular services, you shall be subject to any posted guidelines or rules applicable to such services.
        </p>

        <h3>2. Educational & Informational Purpose</h3>
        <p>
          This website is for informational and educational purposes only. The information provided does not constitute professional advice. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
        </p>

        <h3>3. External Links</h3>
        <p>
          This website contains links to other websites which are not under our control. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
        </p>

        <h3>4. Limitation of Liability</h3>
        <p>
          In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
        </p>

        <h3>5. Intellectual Property</h3>
        <p>
          The content, layout, design, data, databases and graphics on this website are protected by intellectual property laws. You may not reproduce, download, transmit or retransmit content from this website, in whole or in part, without prior written permission.
        </p>

        <h3>6. Governing Law</h3>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
        </p>

        <p className="mt-8 pt-8 border-t border-gray-200 text-sm">
          Last updated: January 2026
        </p>
      </div>
    </Layout>
  );
}
