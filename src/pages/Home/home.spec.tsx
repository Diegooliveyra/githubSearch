import '@testing-library/jest-dom';
import { renderWithTheme } from '@/utils/tests/helpers';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, screen } from '@testing-library/react';
import Home from '.';

const renderHome = () =>
  renderWithTheme(<Home />, {
    wrapper: BrowserRouter,
  });

describe('<Home/>', () => {
  it('should render with logo image ', () => {
    renderHome();
    expect(screen.getByRole('figure')).toBeInTheDocument();
  });

  it('should render input ', () => {
    renderHome();
    expect(screen.getByPlaceholderText('Enter user name')).toBeInTheDocument();
  });

  it('should render button when typing input', () => {
    renderHome();
    const input = screen.getByPlaceholderText('Enter user name');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  it('should not render button when input is empy', () => {
    renderHome();
    expect(
      screen.queryByRole('button', { name: 'Search' })
    ).not.toBeInTheDocument();

    const input = screen.getByPlaceholderText('Enter user name');
    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.change(input, { target: { value: '' } });
    expect(
      screen.queryByRole('button', { name: 'Search' })
    ).not.toBeInTheDocument();
  });
});
