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

const CustomCombobox: React.FC<CustomComboboxProps> = ({
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

  return (
    <ChakraCombobox.Root
      {...props}
      value={value}
      onInputValueChange={(e) => filter(e.inputValue)}
      onValueChange={(details) => onStatusChange?.(details.value[0])}
      collection={collection}
    >
      <ChakraCombobox.Label>{label}</ChakraCombobox.Label>
      <ChakraCombobox.Control>
        <ChakraCombobox.Input
          placeholder={placeholder}
          value={(() => {
            if (value && value.length > 0) {
              const selected = initialItems.find(
                (item) => item.value === value[0]
              )
              return selected ? selected.label : ''
            }
            return ''
          })()}
        />
        <ChakraCombobox.IndicatorGroup>
          <ChakraCombobox.ClearTrigger bg="transparent" border="none" />
          <ChakraCombobox.Trigger bg="transparent" border="none" />
        </ChakraCombobox.IndicatorGroup>
      </ChakraCombobox.Control>
      <Portal>
        <ChakraCombobox.Positioner>
          <ChakraCombobox.Content>
            <ChakraCombobox.Empty>
              ステータスが見つかりません
            </ChakraCombobox.Empty>
            {collection.items.map((item) => (
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

export default CustomCombobox
