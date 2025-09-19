// import
import { Router } from '@/router/Router'
import { Flex } from '@chakra-ui/react'
import { memo } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  children?: React.ReactNode
}

export const Home = memo((props: Props) => {
  return (
    <>
      <Flex direction={'column'} align="center" pt={10} gap={5}>
        <Link to="/todos">Todo一覧</Link>
        <Link to="/account_management">アカウント管理</Link>
      </Flex>

      <Router />
    </>
  )
})
