// import
import { useCallback, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// hooks
import { useMessage } from './useMassage'
// providers
import { useLoginUser } from '@/providers/LoginUserProvider'
// types
import type { User } from '../types/api/user'

export const useAuth = () => {
  const navigate = useNavigate()
  const { login } = useLoginUser()
  const { showMessage } = useMessage()
  const [loading, setLoading] = useState(false)
  const API_URL = 'https://jsonplaceholder.typicode.com/users'
  const handleLogin = useCallback(
    (id: string) => {
      setLoading(true)
      axios
        .get<User>(`${API_URL}/${id}`)
        .then((res) => {
          if (res.data) {
            login({ ...res.data, isLoggedIn: true })
            showMessage({ title: 'ログインしました', type: 'success' })
            navigate('/')
          } else {
            showMessage({ title: 'ユーザーが見つかりません', type: 'error' })
          }
        })
        .catch(() => {
          showMessage({ title: 'ログインに失敗しました', type: 'error' })
        })
        .finally(() => setLoading(false))
    },
    [navigate, showMessage, login]
  )
  return { handleLogin, loading }
}
