// import
import { useCallback } from 'react'
import { toaster } from '@/components/ui/toaster'

type Props = {
  title: string
  description?: string
  type: 'info' | 'success' | 'warning' | 'error'
}

export const useMessage = () => {
  const showMessage = useCallback((props: Props) => {
    console.log(props)
    const { title, description, type } = props
    toaster.create({
      title,
      description,
      type,
      duration: 2000
    })
  }, [])
  return { showMessage }
}
