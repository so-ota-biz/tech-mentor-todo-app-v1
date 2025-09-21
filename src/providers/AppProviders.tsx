import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { system } from '@/theme/theme'
import { LoginUserProvider } from './LoginUserProvider'
import { TodoProvider } from './TodoProvider'

interface AppProvidersProps {
  children: React.ReactNode
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <ChakraProvider value={system}>
      <BrowserRouter>
        <LoginUserProvider>
          <TodoProvider>{children}</TodoProvider>
        </LoginUserProvider>
      </BrowserRouter>
    </ChakraProvider>
  )
}
