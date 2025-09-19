// import
import { memo, useCallback, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Stack, Flex, Input, Button, Field } from '@chakra-ui/react'
import CustomCombobox from '../molecules/CustomCombobox'
// providers
import { useTodo } from '@/providers/TodoProvider'
import { TodoStatusEnum, TodoStatusLabels } from '@/types/api/todo'
// hooks
import { useMessage } from '@/hooks/useMassage'

type Params = {
  id: string
}

export const TodoEdit = memo(() => {
  const { id } = useParams<Params>()
  const navigate = useNavigate()
  const { todos, setTodos } = useTodo()
  const { showMessage } = useMessage()
  const [formData, setFormData] = useState({
    title: '',
    detail: '',
    status: TodoStatusEnum.NotYetStarted
  })

  useEffect(() => {
    const currentTodo = todos.find((todo) => todo.id === id)
    if (currentTodo) {
      setFormData({
        title: currentTodo.title,
        detail: currentTodo.detail,
        status: currentTodo.status
      })
    }
  }, [id, todos])

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    }

  const handleStatusChange = (status: string) => {
    setFormData((prev) => ({ ...prev, status: status as TodoStatusEnum }))
  }

  const onSave = useCallback(() => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, ...formData } : todo))
    )
    showMessage({
      title: '保存しました',
      type: 'success'
    })
    navigate('/todos')
  }, [todos, id, formData, setTodos, navigate, showMessage])

  const initialItems = (Object.values(TodoStatusEnum) as TodoStatusEnum[]).map(
    (status) => ({
      value: status,
      label: TodoStatusLabels[status]
    })
  )

  return (
    <>
      <Flex direction="column" align="center" justify="center" mt={10}>
        <Stack gap={4}>
          <Field.Root>
            <Field.Label>ID</Field.Label>
            <Input readOnly value={id} bg="gray.300" />
          </Field.Root>
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
            保存
          </Button>
        </Stack>
      </Flex>
    </>
  )
})
