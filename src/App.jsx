import { useState } from 'react'
import { Button } from './components/Button'
import { SectionHeading } from './components/SectionHeading'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Impact', href: '#impact' },
]

const features = [
  ['Learner first', 'Start with a clear student pain point and one useful, testable flow.'],
  ['AI-ready', 'Drop in your model call, prompt, or backend endpoint in one focused place.'],
  ['Demo focused', 'A polished homepage, feedback states, and responsive layout are already in place.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [demoMessage, setDemoMessage] = useState('Ready when you are.')
  const startDemo = () => setDemoMessage('Demo started — replace this with your core learner experience.')

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-10 border-b border-slate-200/80 bg-slate-50/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4" aria-label="Main navigation">
          <a className="text-lg font-bold tracking-tight text-slate-950" href="#home">AI<span className="text-indigo-600">4</span>EDU</a>
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => <a key={item.href} className="text-sm font-medium text-slate-600 hover:text-indigo-600" href={item.href}>{item.label}</a>)}
            <Button onClick={startDemo}>Try the demo</Button>
          </div>
          <button className="rounded-lg p-2 text-slate-700 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">☰</button>
        </nav>
        {menuOpen && <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">{navItems.map((item) => <a key={item.href} className="block py-2 text-sm font-medium text-slate-700" href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}</div>}
      </header>

      <main>
        <section id="home" className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:py-28 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">AI for education, built to help</p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">Turn a learning challenge into a meaningful outcome.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">A clean starting point for your AI4EDU hackathon idea. Replace this copy, connect your AI flow, and ship a memorable demo.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Button onClick={startDemo}>Try the demo</Button><Button variant="secondary" onClick={() => document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>See how it works</Button></div>
            <p className="mt-5 text-sm text-slate-500" role="status">{demoMessage}</p>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-700 p-1 shadow-xl shadow-indigo-200"><div className="rounded-[22px] bg-white p-6 sm:p-8"><p className="text-sm font-semibold text-indigo-600">STUDENT SNAPSHOT</p><h2 className="mt-3 text-2xl font-bold">What should I learn next?</h2><div className="mt-6 space-y-3">{['Explain a concept', 'Practice with feedback', 'Plan my next step'].map((text, index) => <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4" key={text}><span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">{index + 1}</span><span className="font-medium text-slate-700">{text}</span></div>)}</div></div></div>
        </section>

        <section id="how-it-works" className="bg-white py-20"><div className="mx-auto max-w-6xl px-5"><SectionHeading eyebrow="Hackathon-ready" title="Built for a fast, strong demo." description="Keep the first version focused: one user, one problem, one outcome." /><div className="mt-12 grid gap-5 md:grid-cols-3">{features.map(([title, text], index) => <article className="rounded-2xl border border-slate-200 p-6" key={title}><span className="text-sm font-bold text-indigo-600">0{index + 1}</span><h3 className="mt-4 text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}</div></div></section>
        <section id="impact" className="mx-auto max-w-6xl px-5 py-20"><div className="rounded-3xl bg-slate-950 px-6 py-12 text-white sm:px-12"><p className="text-sm font-semibold uppercase tracking-widest text-indigo-300">Make it yours</p><h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Your solution begins here.</h2><p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">Swap in your story, add a single AI-powered workflow, and make the impact clear in under two minutes.</p><div className="mt-8"><Button onClick={startDemo}>Build your demo</Button></div></div></section>
      </main>
      <footer className="border-t border-slate-200 px-5 py-8 text-center text-sm text-slate-500">Built for AI4EDU hackathon teams.</footer>
    </div>
  )
}

export default App
