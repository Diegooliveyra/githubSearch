import styled, { css, keyframes } from 'styled-components';

const toRight = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);

  }
`;

export const Container = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    max-width: ${theme.grid.container};
    margin: 0 auto;
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 250px;
    margin-top: ${theme.spacings.medium};
    gap: ${theme.spacings.small};
  `}
`;

export const WrapperButton = styled.form`
  ${() => css`
    height: 60px;

    button {
      animation: ${toRight} 0.3s ease-in;
    }
  `}
`;
