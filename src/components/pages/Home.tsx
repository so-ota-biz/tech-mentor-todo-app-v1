// import
import { Flex } from '@chakra-ui/react'
import { memo } from 'react'
import { Link } from 'react-router-dom'

export const Home = memo(() => {
  return (
    <>
      <Flex direction={'column'} align="center" pt={10} gap={5}>
        <Link to="/todos">Todo一覧</Link>
        <Link to="/account_management">アカウント管理</Link>
      </Flex>
    </>
  )
})
