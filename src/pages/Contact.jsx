import { Layout } from '../components/layout/Layout';
import { PageHeader } from '../components/layout/PageHeader';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Mail, MessageSquare, HelpCircle } from 'lucide-react';

export default function Contact() {
  return (
    <Layout>
      <PageHeader 
        title="Contact Us" 
        description="Have a question or feedback? We'd love to hear from you."
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info & Reasons */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We value your feedback. Whether you found a mistake in one of our reviews, want to suggest a new provider, or just want to say hello, please fill out the form.
              <br /><br />
              For fast inquiries, you can also email us directly at <a href="mailto:support@axiomor.online" className="text-brand-600 hover:text-brand-700 font-medium">support@axiomor.online</a>.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <MessageSquare className="w-6 h-6 text-brand-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-bold text-gray-900">Editorial Feedback</h3>
                  <p className="text-sm text-gray-500">Spot an error or have a suggestion for our content team?</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-brand-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-bold text-gray-900">Partnerships</h3>
                  <p className="text-sm text-gray-500">Interested in advertising or working with us?</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <div className="flex items-start">
                <HelpCircle className="w-6 h-6 text-yellow-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-bold text-yellow-800 mb-2">Important Note on Support</h3>
                  <p className="text-sm text-yellow-700 leading-relaxed">
                    We are an informational review site. <strong>We do not provide technical support</strong> for any of the hosting providers or registrars mentioned on this site.
                    <br /><br />
                    If you have a billing issue or technical problem with your service, please contact the provider (e.g., Bluehost, Namecheap) directly through their website.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                >
                  <option>General Inquiry</option>
                  <option>Feedback / Correction</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                  placeholder="How can we help?"
                ></textarea>
              </div>

              <Button size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
