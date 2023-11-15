import { renderWithTheme } from '@/utils/tests/helpers';
import Input from '.';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('<Input/>', () => {
  it('should render with label', () => {
    renderWithTheme(<Input label="Field" name="label" />);
    expect(screen.getByLabelText(/Field/i)).toBeInTheDocument();
  });

  it('should render without label', () => {
    renderWithTheme(<Input name="Field" />);
    expect(screen.queryByLabelText(/Field/i)).not.toBeInTheDocument();
  });

  it('should render with placeholder', () => {
    renderWithTheme(<Input placeholder="placeholder" />);
    expect(screen.getByPlaceholderText(/Placeholder/i)).toBeInTheDocument();
  });

  it('Changes its value when typing ', () => {
    renderWithTheme(<Input placeholder="placeholder" />);

    const input: HTMLInputElement = screen.getByPlaceholderText(/Placeholder/i);

    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });

  it('Is not accessible by tab when disabled', () => {
    renderWithTheme(<Input name="field" label="Field" disabled />);

    const input = screen.getByLabelText(/Field/i);
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).not.toHaveFocus();
  });
});
