import { ReactSVG } from 'react-svg';

import * as S from './styles';

export type ButtonProps = React.ComponentProps<'button'> & {
  disabled?: boolean;
  iconRight?: string;
  iconLeft?: string;
};

const Button = ({
  children,
  iconRight,
  iconLeft,
  disabled = false,
}: ButtonProps) => {
  return (
    <S.Wrapper disabled={disabled}>
      <S.Button>
        {iconLeft ? <ReactSVG src={iconLeft} /> : null}
        {children}
        {iconRight ? <ReactSVG src={iconRight} /> : null}
      </S.Button>
    </S.Wrapper>
  );
};

export default Button;
