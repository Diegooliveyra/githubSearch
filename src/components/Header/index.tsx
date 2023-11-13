import { ReactSVG } from 'react-svg';

import * as S from './styles';

const Header = () => {
  return (
    <S.Header>
      <S.HeaderContent>
        <ReactSVG src="src/assets/imgs/logo-x.svg" />
        <ReactSVG src="src/assets/icons/ic-back.svg" />
      </S.HeaderContent>
    </S.Header>
  );
};

export default Header;
