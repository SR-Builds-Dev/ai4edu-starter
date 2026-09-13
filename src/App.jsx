import { useState } from 'react'
import { AppLayout } from './layouts/AppLayout'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'

function App() {
  const [activePage, setActivePage] = useState('home')

  return <AppLayout activePage={activePage} onNavigate={setActivePage}>{activePage === 'home' ? <Home onNavigate={setActivePage} /> : <Dashboard />}</AppLayout>
}

export default App
