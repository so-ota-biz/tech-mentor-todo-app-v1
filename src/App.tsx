// import
import { Toaster } from '@/components/ui/toaster'
import { AppProviders } from './providers/AppProviders'
import { Router } from './router/Router'

const App = () => {
  return (
    <AppProviders>
      <Router />
      <Toaster />
    </AppProviders>
  )
}

export default App
