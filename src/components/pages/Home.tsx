// import
import { Router } from '@/router/Router'
import { memo } from 'react'

type Props = {
  children?: React.ReactNode
}

export const Home = memo((props: Props) => {
  return (
    <>
      <Router />
    </>
  )
})
