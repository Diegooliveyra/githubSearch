import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xsmall};
  `}
`;

export const HeaderContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: ${theme.grid.container};
    margin: 0 auto;
  `}
`;

export const IconButton = styled.button`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
  `}
`;
