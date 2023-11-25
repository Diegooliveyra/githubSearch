import { FormEvent, useContext, useState } from 'react';
import { ReactSVG } from 'react-svg';

import * as S from './styles';

import Logo from '../../assets/imgs/logo-y.svg';

import Input from '@/components/Input';
import Button from '@/components/Button';
import { useNavigate } from 'react-router-dom';
import { GithubContext } from '@/context/user';

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const { getUsers, getRepositories } = useContext(GithubContext);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await getUsers(username);
      await getRepositories({ username, page: 1, per_page: 6 });
      navigate(`/user/${username}`);
    } catch (error) {
      if (error instanceof Error) setError(String(error.message));
    }
  };
  return (
    <S.Container>
      <ReactSVG src={Logo} role="figure" />
      <S.Form onSubmit={handleSubmit}>
        <Input
          value={username}
          placeholder="Enter user name"
          onChange={({ target }) => {
            setError('');
            setUsername(target.value);
          }}
        />

        <S.WrapperButton>
          {username.length > 0 && <Button>Search</Button>}
        </S.WrapperButton>
        {error.length ? <S.ErrorMessage>{error} 🥲</S.ErrorMessage> : null}
      </S.Form>
    </S.Container>
  );
};

export default Home;
