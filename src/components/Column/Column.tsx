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
  editCardData?: BoardItem
  onColumnDrop(data: BoardItem, prevCol: ColumnType, currCol: ColumnType): void
  onAddNewCard(): void
  createNewCard(value: string): void
  hideForm(): void
  onDeleteCard(colId: ColumnType, itemId: number): void
  onEditCard(cardData: BoardItem): void
  editCard(cardData: BoardItem): void
}

export function Column({
  colId,
  items,
  displayForm,
  editCardData,
  onColumnDrop,
  onAddNewCard,
  createNewCard,
  hideForm,
  onDeleteCard,
  onEditCard,
  editCard
}: Props) {
  const isTodoCol = colId === 'todo'

  function handleDelete(id: number) {
    onDeleteCard(colId, id)
  }

  const cards = items.map((item) => {
    if (editCardData?.itemId === item.itemId) {
      return (
        <FormNewCard
          key="edit-form"
          initialValue={editCardData}
          createNewCard={createNewCard}
          editCard={editCard}
          onCancel={hideForm}
        />
      )
    }
    return (
      <CardBoard
        key={item.itemId}
        data={item}
        onDelete={handleDelete}
        onEdit={onEditCard}
      />
    )
  })

  return (
    <S.Wrapper
      className="dropzone"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault()
        const movedCard: BoardItem = JSON.parse(
          e.dataTransfer.getData('text/plain')
        )
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
      {!editCardData && isTodoCol && displayForm && (
        <FormNewCard onCancel={hideForm} createNewCard={createNewCard} />
      )}
      {cards}
    </S.Wrapper>
  )
}
