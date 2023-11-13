import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';
import Button from '.';

describe('<Button/>', () => {
  it('should render an icon left ', () => {
    renderWithTheme(
      <Button iconLeft="src/assets/icons/ic-search.svg">Search</Button>
    );

    expect(screen.getByText(/search/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render an icon right ', () => {
    renderWithTheme(
      <Button iconRight="src/assets/icons/ic-search.svg">Search</Button>
    );

    expect(screen.getByText(/search/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render a disabled button', () => {
    renderWithTheme(<Button disabled>Search</Button>);

    expect(screen.getByRole('button', { name: /search/i })).toHaveStyle({
      cursor: 'not-allowed',
    });
  });

  it('calls onClick prop when clicked', () => {
    const handleSubmit = jest.fn();
    renderWithTheme(<Button onclick={handleSubmit}>Click Me</Button>);
    fireEvent.click(screen.getByText(/click me/i));
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
