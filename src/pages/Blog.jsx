import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { PageHeader } from '../components/layout/PageHeader';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { blogPosts } from '../data/blogPosts';
import { Calendar, Clock, User } from 'lucide-react';

export default function Blog() {
  return (
    <Layout>
      <PageHeader 
        title="Guides & Resources" 
        description="Tips, tutorials, and insights to help you build and grow your website." 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col h-full hover:shadow-lg transition-all duration-300">
              <div className="h-48 w-full overflow-hidden bg-gray-200">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center text-xs text-gray-500 mb-3 space-x-3">
                  <span className="text-brand-600 font-semibold bg-brand-50 px-2 py-0.5 rounded-full">{post.category}</span>
                  <div className="flex items-center">
                   <Clock className="w-3 h-3 mr-1" />
                   {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mb-4">
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="text-brand-600 font-semibold hover:text-brand-700 hover:underline text-sm inline-flex items-center"
                  >
                    Read More &rarr;
                  </Link>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                   <div className="flex items-center text-xs text-gray-500">
                     <User className="w-3 h-3 mr-1" />
                     {post.author}
                   </div>
                   <span className="text-xs text-gray-400">
                     {post.date}
                   </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
