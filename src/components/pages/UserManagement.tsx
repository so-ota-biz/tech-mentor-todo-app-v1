// import
import { memo, type FC } from 'react'

type Props = {
  children?: React.ReactNode
}

export const UserManagement: FC = memo((props: Props) => {
  return (
    <>
      <div>アカウント管理画面（工事中）</div>
      {props.children}
    </>
  )
})
