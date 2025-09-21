import React from 'react'
import { Select, Portal, createListCollection } from '@chakra-ui/react'
import { TodoStatusFilterEnum, TodoStatusFilterLabels } from '@/types/api/todo'

interface StatusFilterSelectProps {
  value: string[]
  onValueChange: (details: { value: string[] }) => void
}

const statusFilterOptions = createListCollection({
  items: Object.values(TodoStatusFilterEnum).map((value) => ({
    value,
    label: TodoStatusFilterLabels[value]
  }))
})

export const StatusFilterSelect: React.FC<StatusFilterSelectProps> = ({
  value,
  onValueChange
}) => {
  return (
    <Select.Root
      collection={statusFilterOptions}
      value={value}
      onValueChange={onValueChange}
      size="sm"
      width="200px"
    >
      <Select.HiddenSelect />
      <Select.Label>ステータスで絞り込み</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="ステータスを選択" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {statusFilterOptions.items.map((option) => (
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
