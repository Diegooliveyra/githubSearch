import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
  ]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
