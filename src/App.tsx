// import
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
// theme
import { system } from './theme/theme.ts'
// components
import { Router } from './router/Router.tsx'

function App() {
  return (
    <>
      <ChakraProvider value={system}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <Toaster />
      </ChakraProvider>
    </>
  )
}

export default App
