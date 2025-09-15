// ルーティング情報を管理
import { TodoList } from '@/components/pages/TodoList'
import { Page404 } from '@/components/pages/Page404'
import { Login } from '@/components/pages/Login'
import { UserManagement } from '@/components/pages/UserManagement'
import { Home } from '@/components/pages/Home'

export const routes = [
  { path: '/login', component: Login, withHeader: false },
  { path: '/', component: Home, withHeader: true },
  { path: '/account_management', component: UserManagement, withHeader: true },
  { path: '/todos', component: TodoList, withHeader: true },
  { path: '*', component: Page404, withHeader: true }
]
