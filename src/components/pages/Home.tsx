// import
import { memo } from 'react'

type Props = {
  children?: React.ReactNode
}

export const Home = memo((props: Props) => {
  return (
    <>
      <div>Home</div>
      {props.children}
    </>
  )
})
