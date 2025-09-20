/* eslint-disable react-refresh/only-export-components */
// import
import type { User } from '@/types/api/user'
import { createContext, useState, useContext } from 'react'

type Props = {
  children: React.ReactNode
}

export type LoginUser = User & { isLoggedIn: boolean }

export type LoginUserContextType = {
  loginUser: LoginUser | null
  login: (user: LoginUser) => void
  logout: () => void
}

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
)

export const LoginUserProvider = (props: Props) => {
  const { children } = props
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null)

  const login = (user: LoginUser) => {
    setLoginUser(user)
  }
  const logout = () => {
    setLoginUser(null)
  }

  return (
    <>
      <LoginUserContext.Provider value={{ loginUser, login, logout }}>
        {children}
      </LoginUserContext.Provider>
    </>
  )
}

export const useLoginUser = () => {
  const context = useContext(LoginUserContext)
  if (!context) {
    throw new Error('useLoginUser must be used within a LoginUserProvider')
  }
  return context
}
