import { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';

import LeftArrow from '../../assets/icons/ic-arrow-left.svg';
import RigthArrow from '../../assets/icons/ic-arrow-rigth.svg';

import * as S from './styles';

export type PaginationProps = {
  totalRegister: number;
  totalPage: number;
  actualPage: number;
};

const Pagination = ({
  totalRegister,
  actualPage,
  totalPage,
}: PaginationProps) => {
  const [paginaAtual, setPaginaAtual] = useState<number>(actualPage);
  const [lastPage, setLastPage] = useState<number>();

  useEffect(() => {
    setLastPage(Math.round(totalRegister / totalPage) + 1);
  }, [actualPage, totalPage, totalRegister]);

  const handleNext = () => {
    if (lastPage === paginaAtual) return;
    setPaginaAtual(paginaAtual + 1);
  };
  const handlePreview = () => {
    if (paginaAtual === 1) return;
    setPaginaAtual(paginaAtual - 1);
  };

  return (
    <S.Wrapper>
      <S.ActionButton onClick={handlePreview} disabled={paginaAtual === 1}>
        <ReactSVG src={LeftArrow} />
        Preview
      </S.ActionButton>
      <S.ActionButton onClick={handleNext} disabled={lastPage === paginaAtual}>
        Next
        <ReactSVG src={RigthArrow} />
      </S.ActionButton>
    </S.Wrapper>
  );
};

export default Pagination;
