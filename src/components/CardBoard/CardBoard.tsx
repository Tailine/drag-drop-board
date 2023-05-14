import { BoardItem } from '@/App'
import * as S from './CardBoard.styles'
import { DragEvent } from 'react'
import { useRef } from 'react'
import { Card } from '@/components/Card'

type Props = {
  data: BoardItem
}

export function CardBoard({ data }: Props) {
  const dragItem = useRef<HTMLDivElement>(null)

  function handleDragStart(e: DragEvent<HTMLDivElement>) {
    e.dataTransfer.setData('text/plain', JSON.stringify(data))
  }

  return (
    <Card
      ref={dragItem}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={(e) => console.log('End', e)}
    >
      <S.Paragraph>{data.value}</S.Paragraph>
    </Card>
  )
}
