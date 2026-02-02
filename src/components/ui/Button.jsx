import { forwardRef } from 'react';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

const Button = forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  isLoading, 
  children, 
  disabled, 
  ...props 
}, ref) => {
  const variants = {
    primary: 'bg-brand-600 text-white hover:bg-brand-700 shadow-sm',
    secondary: 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 shadow-sm',
    outline: 'border-2 border-brand-600 text-brand-600 hover:bg-brand-50',
    ghost: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
    link: 'text-brand-600 hover:underline p-0 h-auto font-normal',
  };

  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-12 px-6 text-lg',
    icon: 'h-10 w-10 p-0 flex items-center justify-center',
  };

  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };
