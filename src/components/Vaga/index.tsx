import { Li, Ul, VagaLink, VagaLista, VagaTitulo } from './style'

type Props = {
  key: number
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <>
    <VagaLista>
      <VagaTitulo>{props.titulo}</VagaTitulo>
      <Ul>
        <Li>Localizacao: {props.localizacao}</Li>
        <Li>Senioridade: {props.nivel}</Li>
        <Li>Tipo de contratacao: {props.modalidade}</Li>
        <Li>
          Salário: {props.salarioMin} - {props.salarioMax}
        </Li>
        <Li>Requisitos: {props.requisitos.join(', ')}</Li>
      </Ul>
      <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
    </VagaLista>
  </>
)

export default Vaga
