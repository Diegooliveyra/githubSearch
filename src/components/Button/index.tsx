import { ReactSVG } from 'react-svg';

import * as S from './styles';

export type ButtonProps = React.ComponentProps<'button'> & {
  disabled?: boolean;
  iconRight?: string;
  iconLeft?: string;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  children,
  iconRight,
  iconLeft,
  disabled = false,
  onclick,
}: ButtonProps) => {
  return (
    <S.Wrapper>
      <S.Button disabled={disabled} onClick={onclick}>
        {iconLeft ? <ReactSVG src={iconLeft} role="img" /> : null}
        {children}
        {iconRight ? <ReactSVG src={iconRight} role="img" /> : null}
      </S.Button>
    </S.Wrapper>
  );
};

export default Button;
