import React from 'react'
import {
  Combobox as ChakraCombobox,
  Portal,
  useFilter,
  useListCollection
} from '@chakra-ui/react'

interface CollectionItem {
  value: string
  label: string
}

interface CustomComboboxProps
  extends Omit<ChakraCombobox.RootProps, 'collection'> {
  initialItems: CollectionItem[]
  placeholder: string
  label: string
  value?: string[]
  onStatusChange?: (status: string) => void
}

export const CustomCombobox: React.FC<CustomComboboxProps> = ({
  initialItems,
  placeholder,
  label,
  value,
  onStatusChange,
  ...props
}) => {
  const { contains } = useFilter({ sensitivity: 'base' })

  const { collection, filter } = useListCollection({
    initialItems,
    filter: contains
  })

  const [inputValue, setInputValue] = React.useState<string>(() => {
    if (value && value.length > 0) {
      const selected = initialItems.find((item) => item.value === value[0])
      return selected ? selected.label : ''
    }
    return ''
  })

  // valueが変わったらinputValueも更新
  React.useEffect(() => {
    if (value && value.length > 0) {
      const selected = initialItems.find((item) => item.value === value[0])
      setInputValue(selected ? selected.label : '')
    }
  }, [value, initialItems])

  return (
    <ChakraCombobox.Root
      {...props}
      value={value}
      onInputValueChange={(e) => {
        filter(e.inputValue)
        setInputValue(e.inputValue)
      }}
      onValueChange={(details) => {
        const selected = initialItems.find(
          (item) => item.value === details.value[0]
        )
        setInputValue(selected ? selected.label : '')
        onStatusChange?.(details.value[0])
      }}
      collection={collection}
    >
      <ChakraCombobox.Label>{label}</ChakraCombobox.Label>
      <ChakraCombobox.Control>
        <ChakraCombobox.Input placeholder={placeholder} value={inputValue} />
        <ChakraCombobox.IndicatorGroup>
          {value && value.length > 0 && (
            <ChakraCombobox.ClearTrigger bg="transparent" border="none" />
          )}
          <ChakraCombobox.Trigger bg="transparent" border="none" />
        </ChakraCombobox.IndicatorGroup>
      </ChakraCombobox.Control>
      <Portal>
        <ChakraCombobox.Positioner>
          <ChakraCombobox.Content>
            <ChakraCombobox.Empty>
              ステータスが見つかりません
            </ChakraCombobox.Empty>
            {collection.items.map((item: CollectionItem) => (
              <ChakraCombobox.Item item={item} key={item.value}>
                {item.label}
                <ChakraCombobox.ItemIndicator />
              </ChakraCombobox.Item>
            ))}
          </ChakraCombobox.Content>
        </ChakraCombobox.Positioner>
      </Portal>
    </ChakraCombobox.Root>
  )
}
