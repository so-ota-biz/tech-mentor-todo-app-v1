import { Navigate } from 'react-router-dom'
import { useLoginUser } from '@/providers/LoginUserProvider'

export const RootRedirect = () => {
  const { loginUser } = useLoginUser()
  if (loginUser) {
    return <Navigate to="/home" replace />
  } else {
    return <Navigate to="/login" replace />
  }
}
