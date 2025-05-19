type TitleProps = {
  children: React.ReactNode
  description?: string
  sizeTitle?: string
} & React.ComponentProps<'h1'>

export default function Title({
  children,
  description,
  sizeTitle,
}: TitleProps) {
  return (
    <div className="flex flex-col justify-center">
      <h1
        className={`font-[Jaro] ${
          sizeTitle ? `${sizeTitle} text-center` : 'text-7xl'
        }  tracking-[.10em] font-normal`}
      >
        {children}
      </h1>
      {description ? (
        <span className="text-xl tracking-tight font-medium">
          {description}
        </span>
      ) : null}
    </div>
  )
}
