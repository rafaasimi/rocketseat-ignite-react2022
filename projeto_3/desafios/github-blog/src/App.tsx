import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
     <p>Hello world</p>
    </ThemeProvider>
  )
}

export default App
