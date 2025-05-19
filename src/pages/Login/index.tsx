import { FormContainer } from '../../components'
import { FormLogin } from '../../components'
import { Logo } from '../../components'
import { Title } from '../../components'

export default function LoginPage() {
  return (
    <FormContainer>
      <Logo />
      <Title description="Possui uma conta?">
        Bem Vindo<span className="text-[#1988E9]">,</span>
      </Title>
      <FormLogin />
    </FormContainer>
  )
}
