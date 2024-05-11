import { FormEvent, useState } from 'react'
import { VagasBtn, VagasForm, VagasInput } from './style'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <VagasForm onSubmit={aoEnviarForm}>
      <VagasInput
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <VagasBtn type="submit">Pesquisar</VagasBtn>
    </VagasForm>
  )
}
export default FormVagas
