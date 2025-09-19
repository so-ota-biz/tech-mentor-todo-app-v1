export enum TodoStatusEnum {
  NotYetStarted = 'not_yet_started',
  InProgress = 'in_progress',
  Done = 'done'
}

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
