import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import User from './pages/User';
import { GithubProvider } from './context/user';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },

    {
      path: 'user/:username',
      element: <User />,
    },
  ]);
  return (
    <ThemeProvider theme={theme}>
      <GithubProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </GithubProvider>
    </ThemeProvider>
  );
}

export default App;
