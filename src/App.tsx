import { Column } from '@/components/Column'
import { ColumnType } from '@/components/Column/Column'
import * as S from './App.styles'
import { useState } from 'react'

export type BoardItem = {
  itemId: number
  colId: ColumnType
  value: string
}

type Board = Record<ColumnType, Map<number, BoardItem>>

const initialBoard: Board = {
  todo: new Map([[1, { itemId: 1, colId: 'todo', value: 'Build Dashboard' }]]), // [[1, { itemId: 1, colId: 'todo', value: 'Build Dashboard' }]]
  in_progress: new Map(),
  done: new Map()
}

function App() {
  const [board, setBoard] = useState<Board>(initialBoard)
  const [isFormDisplayed, setIsFormDisplayed] = useState(false)

  function createNewCard(value: string) {
    const copyBoard = { ...board }
    const lastItemId = Array.from(copyBoard.todo)[copyBoard.todo.size - 1][0]
    const itemId = lastItemId + 1

    copyBoard.todo.set(itemId, { colId: 'todo', itemId, value })
    setBoard(copyBoard)
    setIsFormDisplayed(false)
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

  function handleCardDelete(colId: ColumnType, itemId: number) {
    const copyBoard = { ...board }
    copyBoard[colId].delete(itemId)
    setBoard(copyBoard)
  }

  const columns = Object.entries(board).map(([colId, items]) => {
    const listItems = Array.from(items.values())
    console.log({ listItems })
    return (
      <Column
        key={colId}
        colId={colId as ColumnType}
        items={listItems}
        displayForm={displayForm}
        onColumnDrop={handleCardDrop}
        onAddNewCard={() => setDisplayForm(true)}
        createNewCard={createNewCard}
        hideForm={() => setDisplayForm(false)}
        handleCardDelete={handleCardDelete}
      />
    )
  })

  return <S.Wrapper>{columns}</S.Wrapper>
}

export default App
