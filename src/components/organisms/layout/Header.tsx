// import
import { Box, Flex, Heading, Link } from '@chakra-ui/react'
import { memo, useCallback, type FC } from 'react'
import { useNavigate } from 'react-router-dom'
// components
import { MenuDrawer } from '@/components/molecules/MenuDrawer'

export const Header: FC = memo(() => {
  const navigate = useNavigate()
  const onClickAccountManagement = useCallback(() => {
    navigate('/account_management')
  }, [navigate])
  const onClickTodoList = useCallback(() => {
    navigate('/todos')
  }, [navigate])
  const onClickHome = useCallback(() => {
    navigate('/')
  }, [navigate])

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          as="a"
          align="center"
          mr={8}
          _hover={{ cursor: 'pointer', opacity: 0.8 }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
            Todo App
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: 'none', md: 'flex' }}
        >
          <Box pr={4}>
            <Link onClick={onClickHome}>ホーム</Link>
          </Box>
          <Box pr={4}>
            <Link onClick={onClickTodoList}>Todo一覧</Link>
          </Box>
          <Box pr={4}>
            <Link onClick={onClickAccountManagement}>アカウント管理</Link>
          </Box>
        </Flex>
        <MenuDrawer
          onClickHome={onClickHome}
          onClickTodoList={onClickTodoList}
          onClickAccountManagement={onClickAccountManagement}
        />
      </Flex>
    </>
  )
})
