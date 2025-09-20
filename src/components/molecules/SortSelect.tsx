import React from 'react'
import { Select, Portal, createListCollection } from '@chakra-ui/react'

interface SortSelectProps {
  value: string[]
  onValueChange: (details: { value: string[] }) => void
}

const sortOptions = createListCollection({
  items: [
    { label: 'ID昇順', value: 'id_asc' },
    { label: 'ID降順', value: 'id_desc' },
    { label: 'ステータス昇順', value: 'status_asc' },
    { label: 'ステータス降順', value: 'status_desc' }
  ]
})

export const SortSelect: React.FC<SortSelectProps> = ({
  value,
  onValueChange
}) => {
  return (
    <Select.Root
      collection={sortOptions}
      value={value}
      onValueChange={onValueChange}
      size="sm"
      width="180px"
    >
      <Select.HiddenSelect />
      <Select.Label>並び替え</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="並び替え" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {sortOptions.items.map((option) => (
              <Select.Item item={option} key={option.value}>
                {option.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}
