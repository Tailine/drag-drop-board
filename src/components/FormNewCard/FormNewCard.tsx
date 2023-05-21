import { FormEvent, useState } from 'react'
import * as S from './FormNewCard.styles'
import { Card } from '@/components/Card'
import { BoardItem } from '@/App'

type Props = {
  initialValue?: BoardItem
  onCancel(): void
  createNewCard(value: string): void
  editCard?(cardData: BoardItem): void
}

export function FormNewCard({
  initialValue,
  createNewCard,
  onCancel,
  editCard
}: Props) {
  const [value, setValue] = useState(initialValue?.value ?? '')

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (initialValue && editCard) {
      return editCard({ ...initialValue, value })
    }
    createNewCard(value)
  }

  const submitButtonLabel = initialValue ? 'Edit' : 'Create'

  return (
    <Card>
      <S.Form onSubmit={onSubmit}>
        <S.Textarea
          autoFocus
          placeholder="Enter card title"
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
        />
        <S.ControlsArea>
          <S.CancelButton type="button" onClick={onCancel}>
            Cancel
          </S.CancelButton>
          <S.SubmitButton>{submitButtonLabel}</S.SubmitButton>
        </S.ControlsArea>
      </S.Form>
    </Card>
  )
}
