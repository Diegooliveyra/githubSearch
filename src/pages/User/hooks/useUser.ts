/* eslint-disable react-hooks/exhaustive-deps */
import { GithubContext } from '@/context/user';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useUser = () => {
  const parametros = useParams();
  const [page, setPage] = useState<number>(1);
  const { user, getRepositories, getUsers } = useContext(GithubContext);

  useEffect(() => {
    if (!user.login) {
      getRepositories({
        username: String(parametros.username),
        page,
        per_page: 6,
      });
      getUsers(String(parametros.username));
    }
  }, [parametros]);

  useEffect(() => {
    if (user.login)
      getRepositories({ username: user.login, page, per_page: 6 });
  }, [page]);

  return {
    page,
    setPage,
  };
};
