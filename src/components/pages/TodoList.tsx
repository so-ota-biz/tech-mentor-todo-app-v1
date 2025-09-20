// import
import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import { memo, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DeleteConfirmDialog } from '../molecules/DeleteConfirmDialog'
// providers
import { useTodo } from '@/providers/TodoProvider'

// mock data
// const todos = [
//   { id: '1', title: '買い物', status: 'not_yet_started', detail: '' },
//   { id: '2', title: '掃除', status: 'in_progress', detail: '' },
//   { id: '3', title: '運動', status: 'done', detail: '' }
// ] as Todo[]

export const TodoList = memo(() => {
  const navigate = useNavigate()
  const { todos, setTodos } = useTodo()

  // add
  const onAdd = useCallback(() => {
    navigate('/todos/create')
  }, [navigate])

  // edit
  const onEdit = useCallback(
    (id: string) => {
      navigate(`/todos/${id}/edit`)
    },
    [navigate]
  )
  // delete
  const onDelete = useCallback((id: string) => {
    setSelectedTodoId(id)
    setIsDeleteDialogOpen(true)
  }, [])
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedTodoId, setSelectedTodoId] = useState<string>('')

  const handleDeleteTodo = useCallback(() => {
    if (selectedTodoId) {
      // Perform delete operation here
      setTodos(todos.filter((todo) => todo.id !== selectedTodoId))
      setIsDeleteDialogOpen(false)
    }
  }, [selectedTodoId, setTodos, todos])

  return (
    <>
      <Box
        width={'100%'}
        maxWidth="1200px"
        margin="10px auto"
        boxShadow="md"
        borderRadius="md"
      >
        <Flex
          as="header"
          bg="white"
          color="black"
          p={4}
          justifyContent="center"
          alignItems="flex-end"
          gap={10}
        >
          <Heading as="h1" size="md" color="teal.600">
            Todo一覧
          </Heading>
          <Button
            onClick={onAdd}
            bg="teal.400"
            color="white"
            _hover={{ opacity: 0.8 }}
          >
            Todoを追加
          </Button>
        </Flex>
        <Flex direction={'column'} p={4} gap={6} bg="white">
          {todos.map((todo) => {
            const getStatusColor = (status: string) => {
              switch (status) {
                case 'done':
                  return 'green.400'
                case 'in_progress':
                  return 'orange.400'
                case 'not_yet_started':
                  return 'gray.400'
                default:
                  return 'gray.400'
              }
            }

            return (
              <Box
                key={todo.id}
                height="60px"
                m={2}
                p={2}
                borderWidth="1px"
                bg={getStatusColor(todo.status)}
                color="gray.100"
                borderRadius={10}
              >
                <Flex justifyContent="space-between" alignItems="center">
                  <Box fontWeight="medium">{todo.title}</Box>
                  <Flex gap={4}>
                    <Button
                      bg="blue.400"
                      color="white"
                      _hover={{ opacity: 0.8 }}
                      onClick={() => onEdit(todo.id)}
                    >
                      編集
                    </Button>
                    <Button
                      bg="red.400"
                      color="white"
                      _hover={{ opacity: 0.8 }}
                      onClick={() => onDelete(todo.id)}
                    >
                      削除
                    </Button>
                  </Flex>
                </Flex>
              </Box>
            )
          })}
        </Flex>
      </Box>
      <DeleteConfirmDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onClickOk={handleDeleteTodo}
        id={selectedTodoId}
        title="このTodoを削除します。"
        description="よろしいですか？"
      />
    </>
  )
})
