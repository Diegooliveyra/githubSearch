import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      Hello World
    </ThemeProvider>
  );
}

export default App;