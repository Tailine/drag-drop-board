import { BoardItem } from '@/App'
import * as S from './Item.styles'
import { DragEvent } from 'react'
import { useRef } from 'react'

type Props = {
  data: BoardItem
}

export function Item({ data }: Props) {
  const dragItem = useRef<HTMLDivElement>(null)

  function handleDragStart(e: DragEvent<HTMLDivElement>) {
    e.dataTransfer.setData('text/plain', JSON.stringify(data))
  }

  // function handleDrop(e: DragEvent<HTMLDivElement>) {
  //   e.
  // }

  return (
    <S.Wrapper
      ref={dragItem}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={(e) => console.log('End', e)}
    >
      {data.value}
    </S.Wrapper>
  )
}
