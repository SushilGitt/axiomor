import { Layout } from '../components/layout/Layout';
import { PageHeader } from '../components/layout/PageHeader';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <PageHeader 
        title="Privacy Policy" 
        description="We respect your privacy and are committed to protecting your personal data."
      />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-blue text-gray-600">
        <h3>1. Introduction</h3>
        <p>
          This Privacy Policy explains how Axiomor collects, uses, and protects your information when you visit our website. By using our site, you agree to the collection and use of information in accordance with this policy.
        </p>

        <h3>2. Information We Collect</h3>
        <p>
          <strong>Log Data:</strong> Like most websites, we collect information that your browser sends whenever you visit our site. This may include your computer's Internet Protocol ("IP") address, browser type, browser version, and the pages of our site that you visit.
        </p>
        <p>
          <strong>Cookies:</strong> We use cookies to improve your experience. Cookies are files with small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
        </p>

        <h3>3. How We Use Your Information</h3>
        <p>
          We use the collected data for various purposes:
        </p>
        <ul>
          <li>To provide and maintain our service</li>
          <li>To monitor the usage of our service</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>

        <h3>4. Third-Party Services & Affiliate Links</h3>
        <p>
          We may employ third-party companies and services (such as Google Analytics) to facilitate our service. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
        </p>
        <p>
          <strong>Affiliate Tracking:</strong> When you click on an affiliate link to a third-party website, that third party may place a cookie on your browser to track the referral. We do not control these third-party cookies.
        </p>

        <h3>5. Data Security</h3>
        <p>
          The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
        </p>

        <h3>6. Changes to This Policy</h3>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>

        <p className="mt-8 text-sm">
          If you have any questions about this Privacy Policy, please contact us.
        </p>
      </div>
    </Layout>
  );
}
