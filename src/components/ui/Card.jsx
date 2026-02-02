import { cn } from '../../lib/utils';

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
