export function Card({ children, className = '', title, description, action }) {
  return (
    <article className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}>
      {(title || description || action) && (
        <div className="flex items-start justify-between gap-4">
          <div>
            {title && <h3 className="text-lg font-bold text-slate-950">{title}</h3>}
            {description && <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>}
          </div>
          {action}
        </div>
      )}
      {children && <div className={title || description || action ? 'mt-5' : ''}>{children}</div>}
    </article>
  )
}
