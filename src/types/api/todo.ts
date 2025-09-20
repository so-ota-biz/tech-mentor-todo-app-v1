export const TodoEditMode = {
  Create: 'create',
  Edit: 'edit'
} as const

export type TodoEditModeEnum = (typeof TodoEditMode)[keyof typeof TodoEditMode]

export const TodoStatusEnum = {
  NotYetStarted: 'not_yet_started',
  InProgress: 'in_progress',
  Done: 'done'
} as const

export type TodoStatusEnum =
  (typeof TodoStatusEnum)[keyof typeof TodoStatusEnum]

export const TodoStatusLabels: Record<TodoStatusEnum, string> = {
  [TodoStatusEnum.NotYetStarted]: '未着手',
  [TodoStatusEnum.InProgress]: '進行中',
  [TodoStatusEnum.Done]: '完了'
}

export type Todo = {
  id: string
  title: string
  status: TodoStatusEnum
  detail: string
  createdAt?: string
  updatedAt?: string
}
