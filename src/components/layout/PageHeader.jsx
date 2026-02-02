export function PageHeader({ title, description }) {
  return (
    <div className="bg-gray-50 py-12 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
