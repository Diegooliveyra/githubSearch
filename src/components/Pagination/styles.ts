import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.medium};
  `}
`;

type ActionButtonProps = {
  disabled: boolean;
};

export const ActionButton = styled.button<ActionButtonProps>`
  ${({ theme, disabled }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};

    background-color: transparent;
    border: none;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    opacity: ${disabled ? '.5' : '1'};

    font-size: ${theme.font.sizes.body};
    color: ${theme.colors.gray};

    svg {
      margin-top: 5px;
      transform: scale(1.2);
    }
  `}
`;
