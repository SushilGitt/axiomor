import { Layout } from '../components/layout/Layout';
import { PageHeader } from '../components/layout/PageHeader';
import { Card } from '../components/ui/Card';
import { CheckCircle2, Users, Search, BarChart, Mail, Phone, MapPin, User } from 'lucide-react';

export default function About() {
  return (
    <Layout>
      <PageHeader 
        title="About Us" 
        description="We are an independent platform dedicated to helping you find the best digital tools for your business."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Who We Are */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Welcome to Axiomor. our mission is simple: to bring transparency to the often confusing world of web infrastructure. We are a team of developers, writers, and digital marketers who know how hard it can be to choose the right tools for a new project.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are not a hosting company. We are an educational resource that tests, reviews, and compares services to help you make an informed decision.
          </p>
        </section>

        {/* What We Do */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <Search className="w-8 h-8 text-brand-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">In-Depth Research</h3>
              <p className="text-gray-600">We dive deep into terms of service, pricing structures, and feature lists so you don't have to read the fine print.</p>
            </Card>
            <Card className="p-6">
              <BarChart className="w-8 h-8 text-brand-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Performance Testing</h3>
              <p className="text-gray-600">We monitor uptime, load speeds, and server response times to separate the fast hosts from the slow ones.</p>
            </Card>
          </div>
        </section>

        {/* Meet the Founder */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet the Founder</h2>
          <Card className="p-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Kishan Jangid</h3>
              <p className="text-brand-600 font-medium mb-4">Founder, Axiomor</p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With a deep background in web hosting, domain infrastructure, and website performance, I founded Axiomor to bring clarity to the hosting industry. My mission is to provide transparent, data-driven recommendations that help you build a stronger online presence—without the confusion.
              </p>
            </div>
          </Card>
        </section>

        {/* Editorial Standards */}
        <section className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Editorial Standards</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-gray-700"><strong>Independence:</strong> Our reviews are written by our editorial team, not by advertisers.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-gray-700"><strong>Transparency:</strong> We clearly disclose our affiliate relationships and how we make money.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-gray-700"><strong>Accuracy:</strong> We regularly update our data to reflect current pricing and features.</span>
            </li>
          </ul>
        </section>

        {/* Team */}
        <section>
          <div className="flex items-center mb-6">
            <Users className="w-8 h-8 text-gray-900 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Our Commitment</h2>
          </div>
          <p className="text-lg text-gray-600 mb-4">
            We believe that the best recommendation is an honest one. Whether you are launching a personal blog or scaling a SaaS startup, our goal is to point you toward the tools that will actually support your growth, not just the ones that pay the highest commission.
          </p>
        </section>

        {/* Contact Us */}
        <section className="mb-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <Mail className="w-8 h-8 text-brand-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email Support</h3>
              <a href="mailto:support@axiomor.com" className="text-gray-600 hover:text-brand-600">
                support@axiomor.com
              </a>
            </Card>
            
            <Card className="p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <Phone className="w-8 h-8 text-brand-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
              <a href="tel:+916378509541" className="text-gray-600 hover:text-brand-600">
                +91 63785 09541
              </a>
            </Card>
            
            <Card className="p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <MapPin className="w-8 h-8 text-brand-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">
                Jaipur, Rajasthan, India
              </p>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
}
