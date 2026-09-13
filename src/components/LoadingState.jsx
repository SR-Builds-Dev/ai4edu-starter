export function LoadingState({ label = 'Loading…' }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 text-sm font-medium text-slate-600" role="status">
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-indigo-200 border-t-indigo-600" aria-hidden="true" />
      {label}
    </div>
  )
}
