// import
import { Flex, Box, Heading, Input, Separator, Stack } from '@chakra-ui/react'
import { memo, useState, type FC } from 'react'
// components
import { PrimaryButton } from '../atoms/button/PrimaryButton'
// hooks
import { useAuth } from '../../hooks/useAuth'

export const Login: FC = memo(() => {
  const { login, loading } = useAuth()
  const [userId, setUserId] = useState<string>('')
  const onChangeUserId = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value)
  const onClickLogin = () => {
    // ログイン処理
    login(userId)
  }

  return (
    <>
      <Flex align="center" justify="center" height="100vh">
        <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
          <Heading as="h1" size="lg" textAlign="center">
            Todo App
          </Heading>
          <Separator my={4} />
          <Stack py={4} px={10} gap={4}>
            <Input
              placeholder="ユーザーID"
              value={userId}
              onChange={onChangeUserId}
            />
            <PrimaryButton
              onClick={onClickLogin}
              loading={loading}
              disabled={userId === '' || loading}
            >
              ログイン
            </PrimaryButton>
          </Stack>
        </Box>
      </Flex>
    </>
  )
})
