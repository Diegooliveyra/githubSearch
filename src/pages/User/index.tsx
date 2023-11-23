import { ReactSVG } from 'react-svg';
import * as S from './styles';
import Header from '@/components/Header';
import Star from '../../assets/icons/ic-star.svg';
import Location from '../../assets/icons/ic-location.svg';
import Following from '../../assets/icons/ic-peoples-fill.svg';
import Followers from '../../assets/icons/ic-peoples.svg';
import Organized from '../../assets/icons/ic-sharp-home.svg';
import Branch from '../../assets/icons/ic-git-branch-fill.svg';
import Pagination from '@/components/Pagination';
import { useState } from 'react';

const User = () => {
  const [page, setPage] = useState(1);
  return (
    <>
      <Header />
      <S.Container>
        <S.UserInfo>
          <S.Avatar
            src="https://avatars.githubusercontent.com/u/54894831?v=4"
            alt=""
          />

          <S.Wrapper>
            <S.Header>
              <h1>Rafaela Drumont</h1>
              <p>@rafa_drumont</p>
            </S.Header>
            <div>
              <S.IconsWrapper>
                <S.IconsContent>
                  <ReactSVG src={Location} />
                  <p>São Paulo - SP</p>
                </S.IconsContent>
                <S.IconsContent>
                  <ReactSVG src={Organized} />
                  <p>Goggle</p>
                </S.IconsContent>
              </S.IconsWrapper>

              <S.IconsWrapper>
                <S.IconsContent>
                  <ReactSVG src={Following} />
                  <p>125</p>
                </S.IconsContent>
                <S.IconsContent>
                  <ReactSVG src={Followers} />
                  <p>85</p>
                </S.IconsContent>
                <S.IconsContent>
                  <ReactSVG src={Star} />
                  <p>48</p>
                </S.IconsContent>
              </S.IconsWrapper>
            </div>
          </S.Wrapper>

          <S.Wrapper>
            <S.BranchWrapper>
              <h3>Total Repositorios</h3>

              <S.IconsContent style={{ justifyContent: 'center' }}>
                <ReactSVG src={Branch} />
                <h2>50</h2>
              </S.IconsContent>
            </S.BranchWrapper>
          </S.Wrapper>
        </S.UserInfo>

        <S.Title>Meus Repositorios </S.Title>

        <S.WrapperList>{/* <RepositoryCard repository={} /> */}</S.WrapperList>

        <Pagination
          paginaAtual={page}
          setPaginaAtual={setPage}
          totalPage={6}
          totalRegister={50}
        />
      </S.Container>
    </>
  );
};

export default User;
