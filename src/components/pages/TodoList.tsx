// import
import { memo } from 'react'

type Props = {
  children?: React.ReactNode
}

export const TodoList = memo((props: Props) => {
  return (
    <>
      <div>TodoList</div>
      {props.children}
    </>
  )
})
