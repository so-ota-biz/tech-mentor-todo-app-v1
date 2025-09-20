// import
import { memo, useCallback, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Stack, Flex, Input, Button, Field } from '@chakra-ui/react'
import { CustomCombobox } from '../molecules/CustomCombobox'
import { v4 as uuidv4 } from 'uuid'
import { useTodo } from '@/providers/TodoProvider'
import {
  TodoStatusEnum,
  TodoStatusLabels,
  TodoEditMode
} from '@/types/api/todo'
// types
import type { Todo } from '@/types/api/todo'
import type { TodoEditModeEnum } from '@/types/api/todo'
// hooks
import { useMessage } from '@/hooks/useMassage'

type TodoEditProps = {
  mode: TodoEditModeEnum
}

export const TodoEdit = memo(({ mode }: TodoEditProps) => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { todos, setTodos } = useTodo()
  const { showMessage } = useMessage()
  const [formData, setFormData] = useState<Todo>({
    id: '',
    title: '',
    detail: '',
    status: TodoStatusEnum.NotYetStarted
  })

  useEffect(() => {
    if (mode === TodoEditMode.Edit && id) {
      const currentTodo = todos.find((todo) => todo.id === id)
      if (currentTodo) {
        setFormData({
          id: currentTodo.id,
          title: currentTodo.title,
          detail: currentTodo.detail,
          status: currentTodo.status
        })
      }
    }
  }, [mode, id, todos])

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    }

  const handleStatusChange = (status: string) => {
    setFormData((prev) => ({ ...prev, status: status as TodoStatusEnum }))
  }

  const onSave = useCallback(() => {
    if (!formData.status) {
      showMessage({ title: 'ステータスを選択してください', type: 'error' })
      return
    }
    if (!formData.title || formData.title.trim() === '') {
      showMessage({ title: 'タイトルを入力してください', type: 'error' })
      return
    }
    if (mode === TodoEditMode.Create) {
      // 新規作成
      const newTodo = {
        ...formData,
        id: uuidv4()
      }
      setTodos([...todos, newTodo])
      showMessage({ title: '作成しました', type: 'success' })
    } else if (mode === TodoEditMode.Edit && id) {
      // 編集
      setTodos(
        todos.map((todo) => (todo.id === id ? { ...todo, ...formData } : todo))
      )
      showMessage({ title: '保存しました', type: 'success' })
    }
    navigate('/todos')
  }, [mode, todos, setTodos, formData, id, navigate, showMessage])

  const initialItems = (Object.values(TodoStatusEnum) as TodoStatusEnum[]).map(
    (status) => ({
      value: status,
      label: TodoStatusLabels[status]
    })
  )

  return (
    <Flex direction="column" align="center" justify="center" mt={10}>
      <Stack gap={4}>
        {mode === TodoEditMode.Edit && (
          <Field.Root>
            <Field.Label>ID</Field.Label>
            <Input readOnly value={id} bg="gray.300" />
          </Field.Root>
        )}
        <Field.Root>
          <Field.Label>タイトル</Field.Label>
          <Input
            placeholder="タイトルを入力"
            value={formData.title}
            onChange={handleChange('title')}
          />
        </Field.Root>
        <Field.Root>
          <Field.Label>詳細</Field.Label>
          <Input
            placeholder="詳細を入力"
            value={formData.detail}
            onChange={handleChange('detail')}
          />
        </Field.Root>
        <Field.Root>
          <CustomCombobox
            value={formData.status ? [formData.status] : []}
            initialItems={initialItems}
            placeholder="ステータスを選択"
            label="ステータス"
            onStatusChange={handleStatusChange}
          />
        </Field.Root>
        <Button
          bg="teal.400"
          color="white"
          _hover={{ opacity: 0.8 }}
          mt={4}
          onClick={onSave}
        >
          {mode === TodoEditMode.Create ? '作成' : '保存'}
        </Button>
      </Stack>
    </Flex>
  )
})
