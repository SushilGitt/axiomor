import { cn } from '../../lib/utils';

export function Badge({ className, variant = 'default', children, ...props }) {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    brand: 'bg-brand-50 text-brand-700',
    success: 'bg-green-50 text-green-700',
    warning: 'bg-yellow-50 text-yellow-700',
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
