export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>}
    </div>
  )
}
