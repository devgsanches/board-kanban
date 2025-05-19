import type { FieldValues, Path, UseFormRegister } from 'react-hook-form'

type InputProps<T extends FieldValues> = {
  className?: string | undefined
  register: UseFormRegister<T>
  name: Path<T>
} & React.ComponentProps<'input'>

export default function Input<T extends FieldValues>({
  className,
  register,
  name,
  ...rest
}: InputProps<T>) {
  return (
    <input
      {...register(name)}
      {...rest}
      className={`${
        className ? className : 'outline-none'
      } bg-[#E1E1E1] p-2 w-[23rem] rounded text-lg font-sans `}
    />
  )
}
