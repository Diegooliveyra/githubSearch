import '@testing-library/jest-dom';
import { Repository } from '@/@types/repositories';
import { renderWithTheme } from '@/utils/tests/helpers';
import RepositoryCard from '.';
import { fireEvent } from '@testing-library/react';
import theme from '@/styles/theme';

describe('<RepositoryCard>', () => {
  it('should render the repository card', () => {
    const cardProps: Repository = {
      forks_count: 10,
      stargazers_count: 20,
      language: 'JavaScript',
      name: 'Meu Projeto',
      description: 'Uma descrição do meu projeto',
      html_url: 'https://github.com/seu-usuario/seu-projeto',
      homepage: 'https://meu-site.com',
    };

    const { getByText } = renderWithTheme(
      <RepositoryCard repository={cardProps} />
    );

    expect(getByText('Meu Projeto')).toBeInTheDocument();
    expect(getByText('Uma descrição do meu projeto')).toBeInTheDocument();
    expect(getByText('10')).toBeInTheDocument();
    expect(getByText('20')).toBeInTheDocument();
    expect(getByText('JavaScript')).toBeInTheDocument();
    expect(getByText('Repositorio')).toHaveAttribute(
      'href',
      cardProps.html_url
    );
    expect(getByText('Projeto')).toHaveAttribute('href', cardProps.homepage);
  });

  it('should render the card without anchor element for "Projeto"', () => {
    const cardProps: Repository = {
      forks_count: 10,
      stargazers_count: 20,
      language: 'JavaScript',
      name: 'Meu Projeto',
      description: 'Uma descrição do meu projeto',
      html_url: 'https://github.com/seu-usuario/seu-projeto',
    };

    const { queryByText } = renderWithTheme(
      <RepositoryCard repository={cardProps} />
    );

    expect(queryByText('Projeto')).not.toBeInTheDocument();
  });

  it('calls the click function when the card is clicked', () => {
    const cardProps: Repository = {
      forks_count: 10,
      stargazers_count: 20,
      language: 'JavaScript',
      name: 'Meu Projeto',
      description: 'Uma descrição do meu projeto',
      html_url: 'https://github.com/seu-usuario/seu-projeto',
      homepage: 'https://meu-site.com',
    };

    const handleClick = jest.fn();

    const { getByTestId } = renderWithTheme(
      <RepositoryCard repository={cardProps} onClick={handleClick} />
    );

    const cardComponent = getByTestId('card-component');
    fireEvent.click(cardComponent);
    expect(handleClick).toHaveBeenCalled();
  });

  it('should change the border color when hovering over the card', () => {
    const cardProps: Repository = {
      forks_count: 10,
      stargazers_count: 20,
      language: 'JavaScript',
      name: 'Meu Projeto',
      description: 'Uma descrição do meu projeto',
      html_url: 'https://github.com/seu-usuario/seu-projeto',
      homepage: 'https://meu-site.com',
    };

    const { getByTestId } = renderWithTheme(
      <RepositoryCard repository={cardProps} />
    );

    const cardComponent = getByTestId('card-component');
    expect(cardComponent).toHaveStyle({
      border: `1px solid ${theme.colors.black.secondary}`,
    });

    fireEvent.mouseEnter(cardComponent);
    expect(cardComponent).toHaveStyle({
      borderColor: theme.colors.purple,
    });

    fireEvent.mouseLeave(cardComponent);
    expect(cardComponent).toHaveStyle({
      border: `1px solid ${theme.colors.black.secondary}`,
    });
  });
});
