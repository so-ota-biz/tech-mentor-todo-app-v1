// import
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
// theme
import { system } from './theme/theme.ts'
// others
import { LoginUserProvider } from './providers/LoginUserProvider.tsx'
import { TodoProvider } from './providers/TodoProvider.tsx'
import { Router } from './router/Router.tsx'

const App = () => {
  return (
    <>
      <ChakraProvider value={system}>
        <BrowserRouter>
          <LoginUserProvider>
            <TodoProvider>
              <Router />
            </TodoProvider>
          </LoginUserProvider>
        </BrowserRouter>
        <Toaster />
      </ChakraProvider>
    </>
  )
}

export default App
