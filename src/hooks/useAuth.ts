// import
import { useCallback, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useMessage } from './useMassage'
// types
import type { User } from '../types/api/user'

export const useAuth = () => {
  const navigate = useNavigate()
  const { showMessage } = useMessage()
  const [loading, setLoading] = useState(false)
  const API_URL = 'https://jsonplaceholder.typicode.com/users'
  const login = useCallback(
    (id: string) => {
      setLoading(true)
      axios
        .get<User>(`${API_URL}/${id}`)
        .then((res) => {
          if (res.data) {
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
    [navigate, showMessage]
  )
  return { login, loading }
}
