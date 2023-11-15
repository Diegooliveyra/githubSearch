import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { renderWithTheme } from '@/utils/tests/helpers';
import Header from '.';

describe('<Header/>', () => {
  it('should render the header', () => {
    renderWithTheme(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('figure')).toBeInTheDocument();
  });

  it('should navigate to home on click back button', () => {
    renderWithTheme(<Header />, { wrapper: BrowserRouter });

    const backButton = screen.getByRole('button');
    expect(backButton).toBeInTheDocument();

    fireEvent.click(backButton);
  });
});
