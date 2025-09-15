// ルーティング情報を管理
import { Home } from '@/components/pages/Home'
import { TodoList } from '@/components/pages/TodoList'
import { Page404 } from '@/components/pages/Page404'
import { UserManagement } from '@/components/pages/UserManagement'
import { PrivateRoute } from './PrivateRoute'
import { RootRedirect } from './RootRedirect'
import { LoginPageOrRedirect } from './LoginPageOrRedirect'

export const routes = [
  {
    path: '/',
    element: <RootRedirect />,
    withHeader: false
  },
  {
    path: '/login',
    element: <LoginPageOrRedirect />, // ログイン済みならリダイレクト、未ログインならログイン画面
    withHeader: false
  },
  {
    path: '/home',
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
    withHeader: true
  },
  {
    path: '/todos',
    element: (
      <PrivateRoute>
        <TodoList />
      </PrivateRoute>
    ),
    withHeader: true
  },
  {
    path: '/account_management',
    element: (
      <PrivateRoute>
        <UserManagement />
      </PrivateRoute>
    ),
    withHeader: true
  },
  { path: '*', element: <Page404 />, withHeader: true }
]
