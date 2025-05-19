import { FormContainer } from '../../components'
import { FormRegister } from '../../components'
import { Logo } from '../../components'
import { Title } from '../../components'

export default function RegisterPage() {
  return (
    <FormContainer>
      <Logo />
      <Title sizeTitle="text-[2.5rem]">CADASTRE-SE</Title>
      <FormRegister />
    </FormContainer>
  )
}
