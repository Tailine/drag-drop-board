import { BoardItem } from '@/App'
import * as S from './Column.styles'
import { Item } from '@/components/Item'

export type ColumnType = 'todo' | 'in_progress' | 'done'

export const columnTitle: Record<ColumnType, string> = {
  todo: 'To Do',
  done: 'Done',
  in_progress: 'In Progress'
}

type Props = {
  colId: ColumnType
  items: BoardItem[]
  onColumnDrop(data: BoardItem, prevCol: ColumnType, currCol: ColumnType): void
}

export function Column({ colId, items, onColumnDrop }: Props) {
  return (
    <S.Wrapper
      className="dropzone"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault()
        const movedCard: BoardItem = JSON.parse(
          e.dataTransfer.getData('text/plain')
        )
        console.log({ movedCard })
        onColumnDrop(movedCard, movedCard.colId, colId)
      }}
    >
      <S.Title>{columnTitle[colId]}</S.Title>
      {items.map((item) => (
        <Item key={item.itemId} data={item} />
      ))}
    </S.Wrapper>
  )
}
