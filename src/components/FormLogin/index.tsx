import { NavLink, useNavigate } from 'react-router'
import Input from '../Input'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAuth } from '../../contexts/auth/useAuth'
import { useState } from 'react'

export type LoginForm = {
  email: string
  password: string
}

export default function FormLogin() {
  const [invalidCredentials, setInvalidCredentials] = useState<boolean>(false)

  const schema = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(6, { message: 'Password must contain 6 or more characters.' }),
  })

  const { login } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(schema),
  })
  const redirect = useNavigate()

  const onSubmit: SubmitHandler<LoginForm> = async data => {
    try {
      await login(data.email, data.password)
      setInvalidCredentials(false)
      redirect('/board')
    } catch {
      setInvalidCredentials(true)
    }
  }

  return (
    <>
      <form
        className="flex flex-col mt-4 gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium">
            Login
          </label>
          <Input type="text" register={register} name="email" id="email" />
          {errors.email && (
            <p className="text-red-600">{errors.email?.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="font-medium">
            Senha
          </label>
          <Input
            type="password"
            register={register}
            name="password"
            id="password"
          />
          {errors.password && (
            <p className="text-red-600">{errors.password?.message}</p>
          )}
          {invalidCredentials && (
            <p className="text-red-600 mt-2 font-semibold">
              Credenciais inválidas.
            </p>
          )}
        </div>
        <div className="flex justify-between mt-6 relative font-semibold items-center">
          <NavLink
            className="text-[#1988E9] cursor-pointer underline decoration-2"
            to={'/auth/register'}
          >
            Cadastrar-se
          </NavLink>
          <button
            className="bg-[#1988E9] py-2.5 px-13 text-white  cursor-pointer"
            type="submit"
          >
            Entrar
          </button>
        </div>
      </form>
    </>
  )
}
