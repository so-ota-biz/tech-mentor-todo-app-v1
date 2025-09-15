// import
import { memo, type FC } from 'react'

type Props = {
  children?: React.ReactNode
}

export const UserManagement: FC = memo((props: Props) => {
  return (
    <>
      <div>UserManagement</div>
      {props.children}
    </>
  )
})
