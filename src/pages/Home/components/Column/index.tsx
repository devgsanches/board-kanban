import { ColumnStatus } from '../../columnStatus'
import { Card, type CardProps } from '../Card'
import { CardCreator } from '../CardCreator'
import { CardDelete } from '../CardDelete'
import { StatusBall } from '../StatusBall'

type ColumnProps = {
  status: ColumnStatus
  title: string
  cards: CardProps[]
  setCards: React.Dispatch<React.SetStateAction<CardProps[]>>
  onDragStart: (e: React.DragEvent<HTMLDivElement>, cardId: string) => void
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void
  onDrop: (e: React.DragEvent<HTMLDivElement>, newState: ColumnStatus) => void
}

export const Column = ({
  status,
  title,
  cards,
  onDragStart,
  onDragOver,
  onDrop,
}: ColumnProps) => {
  return (
    <div
      className="flex flex-col gap-2 items-center"
      onDragOver={onDragOver}
      onDrop={e => onDrop(e, status)}
    >
      <div className="flex gap-1 items-center font-semibold">
        <StatusBall status={status} />
        <h2>{title}</h2>
      </div>
      <div className="flex flex-col gap-4">
        {cards
          .filter(card => card.state === status)
          .map(card => (
            <Card key={card.id} {...card} onDragStart={onDragStart} />
          ))}
        {status === ColumnStatus.BACKLOG ? <CardCreator /> : null}
        {status === ColumnStatus.BACKLOG ? <CardDelete /> : null}
      </div>
    </div>
  )
}
