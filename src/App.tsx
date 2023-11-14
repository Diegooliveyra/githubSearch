import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import User from './pages/User';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },

    {
      path: 'user/:id',
      element: <User />,
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
