import { ReactSVG } from 'react-svg';

import Star from '../../assets/icons/ic-star.svg';
import Branch from '../../assets/icons/ic-git-branch.svg';
import CodeFile from '../../assets/icons/ic-code-file.svg';

import * as S from './styles';
import { IRepositoryDTO } from '@/@types/repositories';

export type RepositoryCardProps = {
  repository: IRepositoryDTO;
  onClick?: () => void;
};

const RepositoryCard = ({ repository, onClick }: RepositoryCardProps) => {
  return (
    <S.Card onClick={onClick} data-testid="card-component">
      <S.IconsWrapper>
        <S.IconsContent>
          <ReactSVG src={Star} />
          <p>{repository.stargazers_count}</p>
        </S.IconsContent>
        <S.IconsContent>
          <ReactSVG src={Branch} />
          <p>{repository.forks_count}</p>
        </S.IconsContent>
        <S.IconsContent>
          <ReactSVG src={CodeFile} />
          <p>{repository.language}</p>
        </S.IconsContent>
      </S.IconsWrapper>
      <S.CardInfo>
        <h1>{repository.name}</h1>
        <p>{repository.description} </p>
      </S.CardInfo>

      <S.CardFooter>
        <S.Link href={repository.html_url}>Repositorio</S.Link>
        {repository.homepage ? (
          <S.Link href={repository.homepage}>Projeto</S.Link>
        ) : null}
      </S.CardFooter>
    </S.Card>
  );
};

export default RepositoryCard;
