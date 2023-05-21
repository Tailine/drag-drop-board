import { BoardItem } from '@/App'
import * as S from './CardBoard.styles'
import { DragEvent } from 'react'
import { useRef } from 'react'
import { TrashIcon, Pencil1Icon } from '@radix-ui/react-icons'
import { Card } from '@/components/Card'

type Props = {
  data: BoardItem
  onDelete(id: number): void
  onEdit(cardData: BoardItem): void
}

export function CardBoard({ data, onDelete, onEdit }: Props) {
  const dragItem = useRef<HTMLDivElement>(null)

  function handleDragStart(e: DragEvent<HTMLDivElement>) {
    e.dataTransfer.setData('text/plain', JSON.stringify(data))
  }

  function handleDelete() {
    onDelete(data.itemId)
  }

  function handleEdit() {
    onEdit(data)
  }

  return (
    <Card
      ref={dragItem}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={(e) => console.log('End', e)}
    >
      <S.Content>
        <S.Paragraph>{data.value}</S.Paragraph>
        <S.Actions>
          <S.Button onClick={handleDelete}>
            <TrashIcon />
          </S.Button>
          <S.Button onClick={handleEdit}>
            <Pencil1Icon />
          </S.Button>
        </S.Actions>
      </S.Content>
    </Card>
  )
}
