import { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';

import LeftArrow from '../../assets/icons/ic-arrow-left.svg';
import RigthArrow from '../../assets/icons/ic-arrow-rigth.svg';

import * as S from './styles';

export type PaginationProps = {
  totalRegister: number;
  totalPage: number;
  paginaAtual: number;
  setPaginaAtual: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({
  totalRegister,
  paginaAtual,
  setPaginaAtual,
  totalPage,
}: PaginationProps) => {
  const [lastPage, setLastPage] = useState<number>();

  useEffect(() => {
    const total = totalRegister / totalPage;
    setLastPage(Number.isInteger(total) ? total : Math.round(total) + 1);
  }, [totalPage, totalRegister]);

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
        <ReactSVG src={LeftArrow} data-testid="arrow-left" />
        Preview
      </S.ActionButton>
      <S.ActionButton onClick={handleNext} disabled={lastPage === paginaAtual}>
        Next
        <ReactSVG src={RigthArrow} data-testid="arrow-rigth" />
      </S.ActionButton>
    </S.Wrapper>
  );
};

export default Pagination;
