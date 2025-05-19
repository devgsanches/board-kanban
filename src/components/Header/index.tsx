import Logo from '../Logo'
import exitIcon from '../../assets/exit-icon.svg'
import { useAuth } from '../../contexts/auth/useAuth'

export const Header = () => {
  const { logOut } = useAuth()

  return (
    <header className="flex justify-between border-b border-[#DADADA] w-screen px-[9.4375rem] py-[1.25rem]">
      <div></div>
      <Logo />
      <button
        className="flex gap-1 items-center font-semibold cursor-pointer"
        onClick={logOut}
      >
        <img src={exitIcon} alt="Ícone de sair" />
        <span>sair</span>
      </button>
    </header>
  )
}
