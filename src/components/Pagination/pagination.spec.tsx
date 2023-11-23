import '@testing-library/jest-dom';
import { renderWithTheme } from '@/utils/tests/helpers';
import Pagination from '.';
import { fireEvent } from '@testing-library/react';

describe('<Pagination>', () => {
  it('should render pagination component', () => {
    const props = {
      totalRegister: 100,
      totalPage: 10,
      paginaAtual: 1,
      setPaginaAtual: jest.fn(),
    };
    const { getByText, getByTestId } = renderWithTheme(
      <Pagination
        paginaAtual={props.paginaAtual}
        totalPage={props.totalPage}
        totalRegister={props.totalRegister}
        setPaginaAtual={props.setPaginaAtual}
      />
    );

    expect(getByText(/Next/i)).toBeInTheDocument();
    expect(getByText(/Preview/i)).toBeInTheDocument();
    expect(getByTestId('arrow-left')).toBeInTheDocument();
    expect(getByTestId('arrow-rigth')).toBeInTheDocument();
  });

  it('Returns to the previous page by clicking "Previous"', () => {
    const props = {
      totalRegister: 100,
      totalPage: 10,
      paginaAtual: 2,
      setPaginaAtual: jest.fn(),
    };
    const { getByRole } = renderWithTheme(
      <Pagination
        paginaAtual={props.paginaAtual}
        totalPage={props.totalPage}
        totalRegister={props.totalRegister}
        setPaginaAtual={props.setPaginaAtual}
      />
    );

    const previewButton = getByRole('button', { name: 'Preview' });
    fireEvent.click(previewButton);

    expect(props.setPaginaAtual).toHaveBeenCalledWith(1);
  });

  it('advances to the next page when clicking "Next"', () => {
    const props = {
      totalRegister: 100,
      totalPage: 10,
      paginaAtual: 1,
      setPaginaAtual: jest.fn(),
    };
    const { getByRole } = renderWithTheme(
      <Pagination
        paginaAtual={props.paginaAtual}
        totalPage={props.totalPage}
        totalRegister={props.totalRegister}
        setPaginaAtual={props.setPaginaAtual}
      />
    );

    const previewButton = getByRole('button', { name: 'Next' });
    fireEvent.click(previewButton);

    expect(props.setPaginaAtual).toHaveBeenCalledWith(2);
  });

  it('must disable the Preview button when the current page is the same as the first page', () => {
    const props = {
      totalRegister: 100,
      totalPage: 10,
      paginaAtual: 1,
      setPaginaAtual: jest.fn(),
    };
    const { getByRole } = renderWithTheme(
      <Pagination
        paginaAtual={props.paginaAtual}
        totalPage={props.totalPage}
        totalRegister={props.totalRegister}
        setPaginaAtual={props.setPaginaAtual}
      />
    );
    const previewButton = getByRole('button', { name: 'Preview' });
    expect(previewButton).toHaveStyle({
      cursor: 'not-allowed',
      opacity: '0.5',
    });
  });

  it('must disable the Next button when the current page is the same as the last page', () => {
    const props = {
      totalRegister: 100,
      totalPage: 10,
      paginaAtual: 10,
      setPaginaAtual: jest.fn(),
    };
    const { getByRole } = renderWithTheme(
      <Pagination
        paginaAtual={props.paginaAtual}
        totalPage={props.totalPage}
        totalRegister={props.totalRegister}
        setPaginaAtual={props.setPaginaAtual}
      />
    );
    const previewButton = getByRole('button', { name: 'Next' });
    expect(previewButton).toHaveStyle({
      cursor: 'not-allowed',
      opacity: '0.5',
    });
  });
});
