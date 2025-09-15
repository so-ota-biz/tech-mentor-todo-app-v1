// import
import { memo } from 'react'
import { Header } from '../organisms/layout/Header'

type Props = {
  children?: React.ReactNode
}

export const HeaderLayout = memo<Props>(({ children }) => (
  <>
    <Header />
    {children}
  </>
))
