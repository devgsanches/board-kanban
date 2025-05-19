import type { ColumnStatus } from '../../columnStatus'

export type StatusBallProps = {
  status: ColumnStatus
}

export const StatusBall = ({ status }: StatusBallProps) => {
  const statusColorClass = {
    BACKLOG: 'bg-[#E9E62E]',
    DOING: 'bg-[#EC931F]',
    READY: 'bg-[#3CE018]',
    IN_TEST: 'bg-[#9F03E1]',
    APPROVED: 'bg-[#1988E9]',
  }

  return (
    <div
      className={`w-[0.875rem] h-[0.875rem] rounded-full ${
        statusColorClass[status] ?? 'bg-[#1988E9]'
      }`}
    ></div>
  )
}
