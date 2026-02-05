import { Layout } from '../components/layout/Layout';

export default function CookiesPolicy() {
  return (
    <Layout>
      <div className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-4">
              Cookies Policy
            </h1>
            <p className="text-xl text-gray-500">
              Last updated: {new Date().getFullYear()}
            </p>
          </div>

          <div className="prose prose-lg prose-brand mx-auto text-gray-600">
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">1. What Are Cookies</h2>
            <p>
              Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit certain websites. They identify your device for subsequent visits but do not typically identify you personally. We use cookies to improve website functionality, performance, and your overall user experience.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. How We Use Cookies</h2>
            <p>
              At Axiomor, we use cookies to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 mb-8">
              <li>Ensure the basic functionality of our website works correctly.</li>
              <li>Understand how visitors interact with our site so we can improve it.</li>
              <li>Measure the performance of our content and pages.</li>
              <li>Support affiliate tracking when you click links to third-party domain and hosting providers. This ensures we are credited for referrals, which allows us to keep our reviews free for you.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. Types of Cookies We Use</h2>
            
            <div className="space-y-8 mt-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Essential Cookies</h3>
                <p>
                  These cookies are strictly necessary for the website to function properly. Without them, certain features (like navigation or secure areas) may not work. They do not store any personally identifiable information.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Analytics Cookies</h3>
                <p>
                  We use these to collect anonymous data on how visitors use our site. This helps us count visits and traffic sources so we can measure and improve the performance of our site. All information these cookies collect is aggregated and therefore anonymous.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Affiliate & Marketing Cookies</h3>
                <p>
                  Our business model relies on affiliate marketing. When you click on a link to a provider (like Bluehost or Namecheap), a tracking cookie is placed on your device to let the provider know you came from our site. These cookies typically last for 30-90 days and do not collect your personal data.
                </p>
              </div>
            </div>

            <div className="bg-brand-50 border-l-4 border-brand-600 p-6 mt-10 rounded-r-lg">
              <p className="text-brand-800 font-medium">
                <strong>Important Note:</strong> We never store sensitive personal information like passwords or credit card data in cookies.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">4. Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-parties to report usage statistics of the Service, deliver advertisements on and through the Service, and so on. These third parties may set cookies when you interact with their content or links on our site. We do not control these cookies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">5. Managing Your Cookies</h2>
            <p>
              You have the right to accept or reject cookies. You can manage your cookie preferences at any time by changing your browser settings. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer.
            </p>
            <p className="mt-4">
              Please note that if you choose to disable cookies, some parts of our website may not function properly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at privacy@axiomor.online or visit our <a href="/contact" className="text-brand-600 hover:text-brand-700 underline">Contact page</a>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
