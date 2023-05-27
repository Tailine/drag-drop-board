import { Column } from '@/components/Column'
import { ColumnType } from '@/components/Column/Column'
import * as S from './App.styles'
import { useState } from 'react'

export type BoardItem = {
  itemId: string
  colId: ColumnType
  value: string
}

type Board = Record<ColumnType, Map<string, BoardItem>>

const initialBoard: Board = {
  todo: new Map(), // [[1, { itemId: 1, colId: 'todo', value: 'Build Dashboard' }]]
  in_progress: new Map(),
  done: new Map()
}

function App() {
  const [board, setBoard] = useState<Board>(initialBoard)
  const [colDisplayForm, setColDisplayForm] = useState<ColumnType>()
  const [editCardData, setEditCardData] = useState<BoardItem>()

  function createNewCard(colId: ColumnType, value: string) {
    const copyBoard = { ...board }
    const colArray = Array.from(copyBoard[colId])
    const lastItem = colArray[copyBoard[colId].size - 1]
    const numFromId = lastItem ? Number(lastItem[0].split('-')[1]) : 0
    const itemIdNum = numFromId + 1
    const itemId = `${colId}-${itemIdNum}`

    copyBoard[colId].set(itemId, { colId, itemId, value })
    setBoard(copyBoard)
    setColDisplayForm(undefined)
  }

  function handleCardDrop(
    data: BoardItem,
    prevCol: ColumnType,
    currCol: ColumnType
  ) {
    if (prevCol === currCol) return

    const copyBoard = { ...board }
    const item = copyBoard[prevCol].get(data.itemId)
    if (item) {
      copyBoard[currCol].set(item.itemId, { ...data, colId: currCol })
      copyBoard[prevCol].delete(data.itemId)
      setBoard(copyBoard)
    }
  }

  function handleCardDelete(colId: ColumnType, itemId: string) {
    const copyBoard = { ...board }
    copyBoard[colId].delete(itemId)
    setBoard(copyBoard)
  }

  function editCard(newCardData: BoardItem) {
    const copyBoard = { ...board }
    copyBoard[newCardData.colId].set(newCardData.itemId, newCardData)
    setBoard(copyBoard)
    setColDisplayForm(undefined)
    setEditCardData(undefined)
  }

  function handleEditCard(cardData: BoardItem) {
    setEditCardData(cardData)
    setColDisplayForm(cardData.colId)
  }

  function displayForm(colId: ColumnType) {
    setColDisplayForm(colId)
  }

  const columns = Object.entries(board).map(([colId, items]) => {
    const listItems = Array.from(items.values())

    return (
      <Column
        key={colId}
        colId={colId as ColumnType}
        editCardData={editCardData}
        onEditCard={handleEditCard}
        editCard={editCard}
        items={listItems}
        displayedFormId={colDisplayForm}
        onColumnDrop={handleCardDrop}
        onAddNewCard={displayForm}
        createNewCard={createNewCard}
        hideForm={() => setColDisplayForm(undefined)}
        onDeleteCard={handleCardDelete}
      />
    )
  })

  return (
    <S.Main>
      <S.Wrapper>{columns}</S.Wrapper>
    </S.Main>
  )
}

export default App
