// import
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
// theme
import { system } from './theme/theme.ts'
// components
import { LoginUserProvider } from './providers/LoginUserProvider.tsx'
import { Router } from './router/Router.tsx'

const App = () => {
  return (
    <>
      <ChakraProvider value={system}>
        <BrowserRouter>
          <LoginUserProvider>
            <Router />
          </LoginUserProvider>
        </BrowserRouter>
        <Toaster />
      </ChakraProvider>
    </>
  )
}

export default App
