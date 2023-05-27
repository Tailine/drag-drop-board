import { BoardItem } from '@/App'
import * as S from './Column.styles'
import { CardBoard } from '@/components/CardBoard'
import { FormNewCard } from '../FormNewCard'
import { PlusIcon } from '@radix-ui/react-icons'
import { useState } from 'react'

export type ColumnType = 'todo' | 'in_progress' | 'done'

export const columnTitle: Record<ColumnType, string> = {
  todo: 'to do',
  done: 'done',
  in_progress: 'in progress'
}

type Props = {
  colId: ColumnType
  items: BoardItem[]
  displayedFormId: ColumnType | undefined
  editCardData?: BoardItem
  onAddNewCard(colId: ColumnType): void
  onColumnDrop(data: BoardItem, prevCol: ColumnType, currCol: ColumnType): void
  createNewCard(colId: ColumnType, value: string): void
  hideForm(): void
  onDeleteCard(colId: ColumnType, itemId: string): void
  onEditCard(cardData: BoardItem): void
  editCard(cardData: BoardItem): void
}

export function Column({
  colId,
  items,
  editCardData,
  displayedFormId,
  onColumnDrop,
  onAddNewCard,
  createNewCard,
  hideForm,
  onDeleteCard,
  onEditCard,
  editCard
}: Props) {
  const [isItemOverColumn, setIsItemOverColumn] = useState(false)

  function handleDelete(id: string) {
    onDeleteCard(colId, id)
  }

  function handleCreateNewCard(value: string) {
    createNewCard(colId, value)
  }

  const cards = items.map((item) => {
    if (editCardData?.itemId === item.itemId) {
      return (
        <FormNewCard
          key="edit-form"
          initialValue={editCardData}
          createNewCard={handleCreateNewCard}
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

  const border = isItemOverColumn ? 'active' : 'default'

  return (
    <S.Wrapper
      className="dropzone"
      borderStyles={border}
      onDragLeave={() => {
        setIsItemOverColumn(false)
      }}
      onDragEnter={() => {
        setIsItemOverColumn(true)
      }}
      onDragOver={(e) => {
        e.preventDefault()
      }}
      onDrop={(e) => {
        e.preventDefault()
        setIsItemOverColumn(false)
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
        <S.AddButton onClick={() => onAddNewCard(colId)}>
          <PlusIcon />
        </S.AddButton>
      </S.Header>
      {!editCardData && displayedFormId === colId && (
        <FormNewCard onCancel={hideForm} createNewCard={handleCreateNewCard} />
      )}
      {cards}
    </S.Wrapper>
  )
}
