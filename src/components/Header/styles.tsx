import styled, { css } from 'styled-components';

export const Header = styled.main`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xsmall};
  `}
`;

export const HeaderContent = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: ${theme.grid.container};
    margin: 0 auto;
  `}
`;
