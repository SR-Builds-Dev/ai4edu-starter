export function AIResponse({ children, label = 'AI response', status = 'ready' }) {
  const statusStyles = status === 'error' ? 'bg-rose-100 text-rose-700' : 'bg-indigo-100 text-indigo-700'

  return (
    <section className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-5" aria-label={label}>
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-slate-900">{label}</p>
        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles}`}>{status}</span>
      </div>
      <div className="mt-4 text-sm leading-6 text-slate-700">{children}</div>
    </section>
  )
}
