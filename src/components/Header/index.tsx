import * as S from './styles';
import logo from '../../assets/imgs/logo-x.svg';
import backIcon from '../../assets/icons/ic-back.svg';
import { ReactSVG } from 'react-svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <S.Header>
      <S.HeaderContent>
        <ReactSVG src={logo} role="figure" />

        <S.IconButton onClick={() => navigate('/')} title="Voltar">
          <ReactSVG src={backIcon} role="img" />
        </S.IconButton>
      </S.HeaderContent>
    </S.Header>
  );
};

export default Header;
