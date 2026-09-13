import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { SectionHeading } from '../components/SectionHeading'

const foundations = [
  ['Start focused', 'One audience, one learning challenge, and one clear outcome make the strongest first demo.'],
  ['Connect quickly', 'Add your model, prompt, or backend call through the API service when the brief is known.'],
  ['Show the value', 'Use responsive, polished screens to make your solution easy for judges to understand.'],
]

export function Home({ onNavigate }) {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:py-28 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <div>
          <p className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">Reusable AI-in-Education foundation</p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">Build the right learning experience when the brief arrives.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">A fast, flexible starting point for teams who want to spend hackathon time on the problem—not repetitive setup.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Button onClick={() => onNavigate('dashboard')}>Open foundation</Button><Button variant="secondary" onClick={() => document.querySelector('#building-blocks')?.scrollIntoView({ behavior: 'smooth' })}>Explore blocks</Button></div>
        </div>
        <Card className="border-indigo-100 shadow-xl shadow-indigo-100/60" title="Your project canvas" description="Replace these placeholders with the workflow your team discovers.">
          <div className="space-y-3">{['Define a learner need', 'Build one useful AI-assisted flow', 'Demonstrate a measurable outcome'].map((item, index) => <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4" key={item}><span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">{index + 1}</span><span className="font-medium text-slate-700">{item}</span></div>)}</div>
        </Card>
      </section>
      <section id="building-blocks" className="bg-white py-20"><div className="mx-auto max-w-6xl px-5"><SectionHeading eyebrow="Building blocks" title="A foundation, not a pre-decided product." description="These components are intentionally generic so your eventual solution can take the lead." /><div className="mt-12 grid gap-5 md:grid-cols-3">{foundations.map(([title, description]) => <Card key={title} title={title} description={description} />)}</div></div></section>
    </>
  )
}
