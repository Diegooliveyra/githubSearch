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

export const Container = styled.main`
  ${({ theme }) => css`
    max-width: 140rem;
    margin: 0 auto;
    padding-top: ${theme.spacings.large};
    animation: ${toRight} 0.3s ease-in;
  `}
`;

export const Header = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};

    h1 {
      font-size: ${theme.font.sizes.h1};
      line-height: ${theme.spacings.small};
      color: ${theme.colors.purple};
    }

    p {
      font-size: ${theme.font.sizes.body};
      line-height: ${theme.spacings.xsmall};
      color: ${theme.colors.gray};
    }
  `}
`;

export const UserInfo = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2.5fr 1.2fr;
    gap: ${theme.spacings.xsmall};
    max-width: 90rem;
    margin: 0 auto;
  `}
`;

export const Avatar = styled.img`
  ${({ theme }) => css`
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: 2px solid ${theme.colors.purple};
    background-color: ${theme.colors.black.secondary};
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${theme.spacings.xsmall};
    background-color: ${theme.colors.black.secondary};
    border-radius: ${theme.border.radius};
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

export const BranchWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};
    text-align: center;

    svg {
      transform: scale(1.3);
    }
  `}
`;