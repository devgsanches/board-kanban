import { NavLink, useNavigate } from 'react-router'
import Input from '../Input'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAuth } from '../../contexts/auth/useAuth'
import { useState } from 'react'

export type RegisterForm = {
  email: string
  password: string
  confirmPassword: string
}

export default function FormRegister() {
  const [emailInUse, setEmailInUse] = useState<boolean>(false)
  const [sucess, setSucess] = useState<boolean>(false)
  const schema = z
    .object({
      email: z.string().email(),
      password: z
        .string()
        .min(6, { message: 'Password must contain 6 or more characters.' }),
      confirmPassword: z
        .string()
        .min(6, { message: 'Password must contain 6 or more characters.' }),
    })
    .refine(data => data.password === data.confirmPassword, {
      message: 'Passwords do not match!',
      path: ['confirmPassword'],
    })

  const { register: registerFirebase } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterForm>({ resolver: zodResolver(schema) })

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<RegisterForm> = async data => {
    try {
      await registerFirebase(data.email, data.password)
      setEmailInUse(false)
      reset()
      setSucess(true)
      setTimeout(() => {
        navigate('/auth/login')
      }, 2000)
    } catch {
      setEmailInUse(true)
      reset()
    }
  }

  return (
    <form
      className="flex flex-col mt-4 gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col">
        <label htmlFor="email" className="font-medium">
          Login
        </label>
        <Input<RegisterForm>
          type="email"
          register={register}
          name="email"
          id="email"
          className={
            emailInUse ? 'outline-2 outline-red-400 bg-red-100' : undefined
          }
        />
        {errors.email && (
          <p className="text-red-600">{errors.email?.message}</p>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="font-medium">
          Senha
        </label>
        <Input<RegisterForm>
          type="password"
          register={register}
          name="password"
          id="password"
        />
        {errors.password && (
          <p className="text-red-600">{errors.password?.message}</p>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="confirmPassword" className="font-medium">
          Confirmar senha
        </label>
        <Input<RegisterForm>
          type="password"
          register={register}
          name="confirmPassword"
          id="confirmPassword"
        />
        {errors.confirmPassword && (
          <p className="text-red-600">{errors.confirmPassword?.message}</p>
        )}
        {emailInUse && (
          <p className="text-red-600 mt-2 font-semibold">
            This email already has an account.
          </p>
        )}
        {sucess && (
          <p className="text-green-600 mt-2 font-semibold">
            User registered successfully.
          </p>
        )}
        <div className="flex justify-between mt-6 relative font-semibold items-center">
          <NavLink
            className="text-[#1988E9] cursor-pointer w-[5.75rem] underline decoration-2"
            to={'/auth/login'}
          >
            Já possuo uma conta
          </NavLink>
          <button className="bg-[#1988E9] py-2.5 px-13 text-white  cursor-pointer">
            Cadastrar-se
          </button>
        </div>{' '}
      </div>
    </form>
  )
}
