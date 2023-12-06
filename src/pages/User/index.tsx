/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from 'react';

import { ReactSVG } from 'react-svg';

import RepositoryCard from '@/components/RepositoryCard';
import Pagination from '@/components/Pagination';
import Header from '@/components/Header';

import Following from '../../assets/icons/ic-peoples-fill.svg';
import Branch from '../../assets/icons/ic-git-branch-fill.svg';
import Organized from '../../assets/icons/ic-sharp-home.svg';
import Location from '../../assets/icons/ic-location.svg';
import Followers from '../../assets/icons/ic-peoples.svg';

import { GithubContext } from '@/context/user';

import * as S from './styles';
import { useUser } from './hooks/useUser';

const User = () => {
  const { repositories, user } = useContext(GithubContext);
  const { page, setPage } = useUser();

  return (
    <>
      <Header />
      <S.Container>
        <S.UserInfo>
          <S.Avatar src={user.avatar_url} alt={user.name} />

          <S.Wrapper>
            <S.Header>
              <h1>{user.name}</h1>
              <p>@{user.login}</p>
            </S.Header>
            <div>
              <S.IconsWrapper>
                <S.IconsContent>
                  <ReactSVG src={Location} />
                  <p>{user.location || '--'}</p>
                </S.IconsContent>
                <S.IconsContent>
                  <ReactSVG src={Organized} />
                  <p>{user.company || '--'}</p>
                </S.IconsContent>
              </S.IconsWrapper>

              <S.IconsWrapper>
                <S.IconsContent>
                  <ReactSVG src={Following} />
                  <p>{user.following}</p>
                </S.IconsContent>
                <S.IconsContent>
                  <ReactSVG src={Followers} />
                  <p>{user.followers}</p>
                </S.IconsContent>
              </S.IconsWrapper>
            </div>
          </S.Wrapper>

          <S.Wrapper>
            <S.BranchWrapper>
              <h3>Total Repositorios</h3>

              <S.IconsContent style={{ justifyContent: 'center' }}>
                <ReactSVG src={Branch} />
                <h2>{user.public_repos}</h2>
              </S.IconsContent>
            </S.BranchWrapper>
          </S.Wrapper>
        </S.UserInfo>

        <S.Title>Meus Repositorios </S.Title>

        {repositories?.length ? (
          <>
            <S.WrapperList>
              {repositories?.map((repo) => (
                <RepositoryCard key={repo.id} repository={repo} />
              ))}
            </S.WrapperList>
            <S.WrapperPagination>
              <Pagination
                paginaAtual={page}
                setPaginaAtual={setPage}
                totalPage={6}
                totalRegister={user.public_repos}
              />
            </S.WrapperPagination>
          </>
        ) : (
          <S.NotFound>{<p>Nenhum repositorio encontrado 😱</p>}</S.NotFound>
        )}
      </S.Container>
    </>
  );
};

export default User;
