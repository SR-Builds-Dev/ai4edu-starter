import { useState } from 'react'
import { AIResponse } from '../components/AIResponse'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { LoadingState } from '../components/LoadingState'
import { SectionHeading } from '../components/SectionHeading'

export function Dashboard() {
  const [isLoading, setIsLoading] = useState(false)
  const [hasResponse, setHasResponse] = useState(false)

  function demonstrateResponse() {
    setIsLoading(true)
    setHasResponse(false)
    window.setTimeout(() => {
      setIsLoading(false)
      setHasResponse(true)
    }, 650)
  }

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <SectionHeading eyebrow="Component preview" title="A simple place to begin your core flow." description="This page demonstrates common states without locking you into a product direction." />
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <Card title="Try an interaction" description="Replace this action with your eventual prompt, form, or API call.">
          <Button onClick={demonstrateResponse}>Generate sample response</Button>
          <div className="mt-5">{isLoading && <LoadingState label="Preparing a sample response…" />}{hasResponse && <AIResponse>Use this component to present a concise, readable model output with the context your learner needs.</AIResponse>}{!isLoading && !hasResponse && <p className="text-sm text-slate-500">No response yet. Try the reusable loading and response states.</p>}</div>
        </Card>
        <Card title="Implementation checklist"><ul className="space-y-3 text-sm leading-6 text-slate-600"><li>• Keep API calls in <code className="rounded bg-slate-100 px-1 py-0.5 text-slate-800">services/api.js</code></li><li>• Put shared behavior in <code className="rounded bg-slate-100 px-1 py-0.5 text-slate-800">hooks/</code></li><li>• Keep small formatting helpers in <code className="rounded bg-slate-100 px-1 py-0.5 text-slate-800">lib/</code></li><li>• Protect secrets: browser variables are not private.</li></ul></Card>
      </div>
    </section>
  )
}
