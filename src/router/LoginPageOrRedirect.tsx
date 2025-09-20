import { useLoginUser } from '@/providers/LoginUserProvider'
import { Navigate } from 'react-router-dom'
import { Login } from '@/components/pages/Login'

export const LoginPageOrRedirect = () => {
  const { loginUser } = useLoginUser()
  if (loginUser) {
    return <Navigate to="/home" replace />
  }
  return <Login />
}
