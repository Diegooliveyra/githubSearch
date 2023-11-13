import { useState } from 'react';
import { ReactSVG } from 'react-svg';

import * as S from './styles';

import Input from '@/components/Input';
import Button from '@/components/Button';

const Home = () => {
  const [user, setUser] = useState<string>('');
  return (
    <S.Container>
      <ReactSVG src="src/assets/imgs/logo-y.svg" />
      <S.Form>
        <Input
          value={user}
          placeholder="Enter user name"
          onChange={({ target }) => setUser(target.value)}
        />
        <S.WrapperButton>
          {user.length > 0 && <Button type="submit">Search</Button>}
        </S.WrapperButton>
      </S.Form>
    </S.Container>
  );
};

export default Home;
