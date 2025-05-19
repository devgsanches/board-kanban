type FormContainerProps = {
  children: React.ReactNode
}

export default function FormContainer({ children }: FormContainerProps) {
  return (
    <div className="border border-[#1988E9] rounded-2xl py-[2.75rem] px-[2.28125rem] flex flex-col">
      {children}
    </div>
  )
}
