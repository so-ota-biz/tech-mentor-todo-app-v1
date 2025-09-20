/* eslint-disable react-refresh/only-export-components */
// import
import { createContext, useContext, useState } from 'react'

// types
import type { Todo } from '@/types/api/todo'

type Props = {
  children: React.ReactNode
}

export type TodoContextType = {
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
}

export const TodoContext = createContext<TodoContextType>({} as TodoContextType)

export const TodoProvider = (props: Props) => {
  const { children } = props
  const [todos, setTodos] = useState<Todo[]>([])
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  )
}

export const useTodo = () => {
  const context = useContext(TodoContext)
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider')
  }
  return context
}
