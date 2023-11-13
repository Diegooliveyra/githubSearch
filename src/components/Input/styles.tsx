import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
  `}
`;

export const InputField = styled.input`
  ${({ theme }) => css`
    background-color: transparent;
    color: ${theme.colors.gray};
    padding: calc(${theme.spacings.sp20} / 2);
    border: none;
    text-align: center;
    box-shadow: 0 1px 0 0px ${theme.colors.purple};
    transition: all 0.3s ease-in-out;
    font-size: ${theme.font.sizes.body};

    &:focus,
    &:hover {
      outline: none;
      box-shadow: 0 3px 0 0px ${theme.colors.purple};
    }
  `}
`;
