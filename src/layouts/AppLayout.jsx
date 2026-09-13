import { Button } from '../components/Button'

const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'dashboard', label: 'Dashboard' },
]

export function AppLayout({ activePage, children, onNavigate }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-10 border-b border-slate-200/80 bg-slate-50/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4" aria-label="Main navigation">
          <button className="text-lg font-bold tracking-tight text-slate-950" onClick={() => onNavigate('home')}>AI<span className="text-indigo-600">4</span>EDU</button>
          <div className="flex items-center gap-1 sm:gap-2">
            {navigation.map((item) => (
              <Button
                className="px-3 py-2 sm:px-4"
                key={item.id}
                onClick={() => onNavigate(item.id)}
                variant={activePage === item.id ? 'primary' : 'secondary'}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="border-t border-slate-200 px-5 py-8 text-center text-sm text-slate-500">AI4EDU hackathon foundation</footer>
    </div>
  )
}
