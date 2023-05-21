import { BoardItem } from '@/App'
import * as S from './Column.styles'
import { CardBoard } from '@/components/CardBoard'
import { FormNewCard } from '../FormNewCard'
import { PlusIcon } from '@radix-ui/react-icons'

export type ColumnType = 'todo' | 'in_progress' | 'done'

export const columnTitle: Record<ColumnType, string> = {
  todo: 'to do',
  done: 'done',
  in_progress: 'in progress'
}

type Props = {
  colId: ColumnType
  items: BoardItem[]
  displayForm: boolean
  onColumnDrop(data: BoardItem, prevCol: ColumnType, currCol: ColumnType): void
  onAddNewCard(): void
  createNewCard(value: string): void
  hideForm(): void
  handleCardDelete(colId: ColumnType, itemId: number): void
}

export function Column({
  colId,
  items,
  displayForm,
  onColumnDrop,
  onAddNewCard,
  createNewCard,
  hideForm,
  handleCardDelete
}: Props) {
  const isTodoCol = colId === 'todo'

  function onDeleteCard(id: number) {
    handleCardDelete(colId, id)
  }

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
      <S.Header>
        <S.TitleContainer>
          <S.Title>{columnTitle[colId]}</S.Title>
          <S.TotalCards>{items.length}</S.TotalCards>
        </S.TitleContainer>
        {isTodoCol && (
          <S.AddButton onClick={onAddNewCard}>
            <PlusIcon />
          </S.AddButton>
        )}
      </S.Header>
      {isTodoCol && displayForm && (
        <FormNewCard onCancel={hideForm} createNewCard={createNewCard} />
      )}
      {items.map((item) => (
        <CardBoard key={item.itemId} data={item} onDelete={onDeleteCard} />
      ))}
    </S.Wrapper>
  )
}
