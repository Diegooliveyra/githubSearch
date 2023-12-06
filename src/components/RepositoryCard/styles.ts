import styled, { css, keyframes } from 'styled-components';

const toRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);

  }
  `;

export const Card = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-rows: 1fr 3fr 1fr;
    max-width: 400px;
    min-width: 340px;
    height: 220px;
    padding: ${theme.spacings.small};
    background-color: ${theme.colors.black.secondary};
    border-radius: ${theme.border.radius};
    border: 1px solid ${theme.colors.black.secondary};
    animation: ${toRight} 0.5s ease;
    transition: all 0.3s ease-in-out;

    &:hover {
      border-color: ${theme.colors.purple};
    }
  `}
`;

export const IconsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: ${theme.spacings.small};
  `}
`;

export const IconsContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};

    svg {
      margin-top: 4px;
    }
  `}
`;

export const CardInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    margin: ${theme.spacings.xxsmall} 0;

    h2 {
      font-size: ${theme.font.sizes.h2};
    }

    p {
      margin-top: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.button};
      line-height: ${theme.spacings.small};
    }
  `}
`;

export const CardFooter = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: ${theme.spacings.small};
  `}
`;

export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.body};
    font-weight: ${theme.font.bold};
    line-height: ${theme.spacings.small};
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: ${theme.colors.purple};
    }
  `}
`;
