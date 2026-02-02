import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export function BlogCard({ post }) {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-all duration-300">
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4">
          <Badge variant="brand">{post.category}</Badge>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="mt-auto pt-4 flex items-center">
          <Link 
            to={`/blog/${post.id}`} 
            className="text-brand-600 font-semibold hover:text-brand-700 hover:underline text-sm inline-flex items-center"
          >
            Read More &rarr;
          </Link>
        </div>
      </div>
    </Card>
  );
}
