import { useParams, Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { blogPosts } from '../data/blogPosts';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <Layout>
        <div className="min-h-[50vh] flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <Button asChild><Link to="/blog">Back to Blog</Link></Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-brand-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
        
        <header className="text-center mb-12">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {post.readTime}
            </div>
          </div>
        </header>

        <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 shadow-lg">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        <div 
          className="prose prose-lg prose-blue max-w-none text-gray-600"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <div className="mt-16 pt-8 border-t border-gray-100">
          <h3 className="text-xl font-bold mb-4">Recommended Reads</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map(related => (
                <Link key={related.id} to={`/blog/${related.id}`} className="group block bg-gray-50 rounded-xl p-6 hover:bg-brand-50 transition-colors">
                  <h4 className="font-bold text-gray-900 group-hover:text-brand-700 mb-2">{related.title}</h4>
                  <p className="text-sm text-gray-500 line-clamp-2">{related.excerpt}</p>
                </Link>
            ))}
          </div>
        </div>
      </article>
    </Layout>
  );
}
