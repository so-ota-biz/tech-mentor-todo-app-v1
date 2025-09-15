// import
import {
  Button,
  CloseButton,
  Drawer,
  Flex,
  IconButton,
  useDisclosure
} from '@chakra-ui/react'
import { memo } from 'react'
import { FaBars } from 'react-icons/fa'

type Props = {
  onClickHome: () => void
  onClickTodoList: () => void
  onClickAccountManagement: () => void
}

export const MenuDrawer = memo((props: Props) => {
  const { onClickHome, onClickTodoList, onClickAccountManagement } = props
  const { open, onOpen, setOpen } = useDisclosure()
  const handleClick = (cb: () => void) => () => {
    cb()
    setOpen(false)
  }
  return (
    <>
      <Drawer.Root
        open={open}
        onOpenChange={(details) => setOpen(details.open)}
      >
        <Drawer.Backdrop />
        <Drawer.Trigger asChild>
          <IconButton
            aria-label="Menu Button"
            style={{ backgroundColor: 'transparent' }}
            display={{ base: 'block', md: 'none' }}
            size="sm"
            onClick={onOpen}
            colorScheme="teal"
            variant="ghost"
            bg="transparent"
            _focus={{ boxShadow: 'none' }}
            _focusVisible={{ boxShadow: 'none' }}
          >
            <FaBars color="#319795" />
          </IconButton>
        </Drawer.Trigger>
        <Drawer.Positioner padding="4">
          <Drawer.Content rounded="md">
            <Drawer.CloseTrigger>
              <CloseButton
                size="sm"
                colorScheme="teal"
                variant="ghost"
                bg="transparent"
                color="teal.500"
                _focus={{ boxShadow: 'none' }}
                _focusVisible={{ boxShadow: 'none' }}
              />
            </Drawer.CloseTrigger>
            <Drawer.Header>
              <Drawer.Title />
            </Drawer.Header>
            <Drawer.Body>
              <Flex
                direction="column"
                gap={4}
                mt={4}
                mb={4}
                style={{
                  textAlign: 'center',
                  backgroundColor: '#fff',
                  color: '#000',
                  padding: '8px',
                  borderRadius: '8px'
                }}
              >
                <Button
                  color="teal.500"
                  backgroundColor="#fff"
                  onClick={handleClick(onClickHome)}
                >
                  ホーム
                </Button>
                <Button
                  color="teal.500"
                  backgroundColor="#fff"
                  onClick={handleClick(onClickTodoList)}
                >
                  Todo一覧
                </Button>
                <Button
                  color="teal.500"
                  backgroundColor="#fff"
                  onClick={handleClick(onClickAccountManagement)}
                >
                  アカウント管理
                </Button>
              </Flex>
            </Drawer.Body>
            <Drawer.Footer />
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </>
  )
})
