// import
import { memo } from 'react'
import { Button, CloseButton, Dialog } from '@chakra-ui/react'

type Props = {
  mdDown?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  md?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  title?: string
  description?: string
  isOpen?: boolean
  id: string
  onClickOk: (id: string) => void
  onClose?: () => void
}

export const DeleteConfirmDialog = memo((props: Props) => {
  const { md, mdDown, title, description, isOpen, onClose, onClickOk, id } =
    props
  return (
    <>
      <Dialog.Root
        size={{ mdDown: mdDown ?? 'full', md: md ?? 'md' }}
        open={isOpen}
        onOpenChange={onClose}
      >
        <Dialog.Trigger asChild />
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
            <Dialog.Header>
              <Dialog.Title>{title}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>{description}</Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button colorScheme="teal" variant="outline" onClick={onClose}>
                  キャンセル
                </Button>
              </Dialog.ActionTrigger>
              <Dialog.ActionTrigger asChild>
                <Button
                  bg="red.400"
                  color="white"
                  onClick={() => onClickOk(id)}
                >
                  実行
                </Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </>
  )
})
