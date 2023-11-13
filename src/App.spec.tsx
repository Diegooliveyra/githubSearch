import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

it('sum', () => {
  const { getByText } = render(<App />);
  expect(getByText('Hello World')).toHaveAttribute('class', 'app');
  expect(screen.getByText('Hello World')).toHaveAttribute('class', 'app');
});
