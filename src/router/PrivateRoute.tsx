// import
import { Navigate } from 'react-router-dom'
import type { FC } from 'react'
// providers
import { useLoginUser } from '@/providers/LoginUserProvider'

export const PrivateRoute: FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const { loginUser } = useLoginUser()
  return loginUser ? children : <Navigate to="/login" replace />
}
