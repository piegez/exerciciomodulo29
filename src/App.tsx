import { ThemeProvider } from 'styled-components'
import EstiloGlobal, { Container } from './style'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import temaColor from './themes/colors'

function App() {
  return (
    <ThemeProvider theme={temaColor}>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
