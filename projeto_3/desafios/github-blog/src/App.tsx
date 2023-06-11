import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { GithubProvider } from './contexts/GithubContext';
import { Header } from './components/Header';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <GithubProvider>
          <Header />
          <Router />
        </GithubProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
