import styled, { css } from 'styled-components';

type WrapperProps = {
  disabled: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.xxsmall};

    background-color: ${theme.colors.purple};
    color: ${theme.colors.white};
    border: none;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};

    font-size: ${theme.font.sizes.body};
    line-height: ${theme.spacings.medium};
    font-weight: ${theme.font.normal};
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      filter: brightness(1.1);
    }
  `}
`;
