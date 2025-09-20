// import
import {
  Button,
  Drawer,
  Flex,
  IconButton,
  CloseButton,
  useDisclosure
} from '@chakra-ui/react'
import { memo } from 'react'
import { FaBars } from 'react-icons/fa'

type Props = {
  onClickHome: () => void
  onClickTodoList: () => void
  onClickAccountManagement: () => void
  onClickLogout: () => void
}

export const MenuDrawer = memo((props: Props) => {
  const {
    onClickHome,
    onClickTodoList,
    onClickAccountManagement,
    onClickLogout
  } = props
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
            border="none"
            borderColor="transparent"
            _hover={{ bg: 'transparent' }}
            _active={{ bg: 'transparent' }}
            _focus={{
              boxShadow: 'none',
              outline: 'none',
              border: 'none',
              borderColor: 'transparent'
            }}
            _focusVisible={{
              boxShadow: 'none',
              outline: 'none',
              border: 'none',
              borderColor: 'transparent'
            }}
          >
            <FaBars color="#319795" />
          </IconButton>
        </Drawer.Trigger>
        <Drawer.Positioner padding="4">
          <Drawer.Content rounded="md">
            <Drawer.CloseTrigger
              style={{
                background: 'transparent',
                outline: 'none',
                border: 'none',
                boxShadow: 'none',
                borderColor: 'transparent'
              }}
              tabIndex={0}
              onFocus={(e) => {
                e.currentTarget.style.outline = 'none'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = 'transparent'
              }}
            >
              <CloseButton
                size="sm"
                color="teal.500"
                bg="white"
                border="1px solid #319795"
                borderRadius="8px"
                _hover={{ bg: 'white', borderColor: '#319795' }}
                _active={{ bg: 'white', borderColor: '#319795' }}
                _focus={{
                  boxShadow: 'none',
                  outline: 'none',
                  borderColor: '#319795'
                }}
                _focusVisible={{
                  boxShadow: 'none',
                  outline: 'none',
                  borderColor: '#319795'
                }}
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
                <Button
                  color="teal.500"
                  backgroundColor="#fff"
                  onClick={handleClick(onClickLogout)}
                >
                  ログアウト
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
