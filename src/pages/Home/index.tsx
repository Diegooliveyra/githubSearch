import { FormEvent, useState } from 'react';
import { ReactSVG } from 'react-svg';

import * as S from './styles';

import Logo from '../../assets/imgs/logo-y.svg';

import Input from '@/components/Input';
import Button from '@/components/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    navigate('/user/1');
  };
  return (
    <S.Container>
      <ReactSVG src={Logo} role="figure" />
      <S.Form onSubmit={handleSubmit}>
        <Input
          value={user}
          placeholder="Enter user name"
          onChange={({ target }) => setUser(target.value)}
        />
        <S.WrapperButton>
          {user.length > 0 && <Button>Search</Button>}
        </S.WrapperButton>
      </S.Form>
    </S.Container>
  );
};

export default Home;
