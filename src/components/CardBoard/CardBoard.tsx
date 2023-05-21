import { BoardItem } from '@/App'
import * as S from './CardBoard.styles'
import { DragEvent } from 'react'
import { useRef } from 'react'
import { TrashIcon } from '@radix-ui/react-icons'
import { Card } from '@/components/Card'

type Props = {
  data: BoardItem
  onDelete(id: number): void
}

export function CardBoard({ data, onDelete }: Props) {
  const dragItem = useRef<HTMLDivElement>(null)

  function handleDragStart(e: DragEvent<HTMLDivElement>) {
    e.dataTransfer.setData('text/plain', JSON.stringify(data))
  }

  function handleDelete() {
    onDelete(data.itemId)
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
        <S.Button onClick={handleDelete}>
          <TrashIcon />
        </S.Button>
      </S.Content>
    </Card>
  )
}
