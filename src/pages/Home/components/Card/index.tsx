import type { ColumnStatus } from '../../columnStatus'

export type CardProps = {
  id: string
  title: string
  description: string
  state: ColumnStatus
  onDragStart?: (e: React.DragEvent<HTMLDivElement>, cardId: string) => void
  userId: string
}

export const Card = ({ id, title, description, onDragStart }: CardProps) => {
  return (
    <div
      className="w-[12.8rem] py-[1.65625rem] border border-[#A7A7A7] rounded-2xl flex flex-col justify-center items-center font-semibold gap-2 cursor-grab"
      draggable
      onDragStart={e => onDragStart?.(e, id)}
    >
      <span className="text-xl text-center">{title}</span>
      <p className="text-xs text-[#1988E9] text-center">{description}</p>
    </div>
  )
}
