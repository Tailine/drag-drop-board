import { FormEvent, useState } from 'react'
import * as S from './FormNewCard.styles'
import { Card } from '@/components/Card'

type Props = {
  createNewCard(value: string): void
  onCancel(): void
}

export function FormNewCard({ createNewCard, onCancel }: Props) {
  const [value, setValue] = useState('')

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    createNewCard(value)
  }

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
          <S.SubmitButton>Create</S.SubmitButton>
        </S.ControlsArea>
      </S.Form>
    </Card>
  )
}
