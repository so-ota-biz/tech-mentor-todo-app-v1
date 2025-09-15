import { Button } from '@chakra-ui/react'
import { memo } from 'react'

type Props = {
  children?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
}

export const PrimaryButton = memo((props: Props) => {
  const { children, onClick, disabled = false, loading = false } = props
  return (
    <>
      <Button
        bg="teal.400"
        color="white"
        _hover={{ opacity: 0.8 }}
        loading={loading}
        disabled={disabled || loading}
        onClick={onClick}
      >
        {children}
      </Button>
    </>
  )
})
