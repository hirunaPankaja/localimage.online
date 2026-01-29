interface SEOContentProps {
  title: string;
  children: React.ReactNode;
  variant?: 'default' | 'featured';
}

export function SEOContent({ title, children, variant = 'default' }: SEOContentProps) {
  if (variant === 'featured') {
    return (
      <article className="relative overflow-hidden">
        {/* Decorative gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl" />

        <div className="relative p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-8">
            {title}
          </h2>
          <div className="prose prose-slate prose-lg max-w-none 
            prose-headings:font-bold prose-headings:text-slate-900
            prose-p:text-slate-600 prose-p:leading-relaxed
            prose-li:text-slate-600 prose-li:marker:text-blue-500
            prose-strong:text-slate-900 prose-strong:font-semibold
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
            {children}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">
          {title}
        </h2>
        <div className="prose prose-slate max-w-none lg:prose-lg
          prose-headings:font-semibold prose-headings:text-slate-800 prose-headings:mt-8 prose-headings:mb-4
          prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-4
          prose-li:text-slate-600
          prose-strong:text-slate-800
          prose-ul:my-4 prose-ol:my-4
          prose-a:text-blue-600 prose-a:font-medium">
          {children}
        </div>
      </div>
    </article>
  );
}