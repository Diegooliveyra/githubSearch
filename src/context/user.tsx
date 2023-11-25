import { IRepositoryDTO } from '@/@types/repositories';
import { IUserDTO } from '@/@types/user';
import { GetRepositoriesProps, GitHubService } from '@/services/github';
import { AxiosError } from 'axios';
import { ReactNode, createContext, useState } from 'react';

export interface IGithubContext {
  user: IUserDTO;
  repositories: IRepositoryDTO[];
  getUsers: (username: string) => Promise<void>;
  getRepositories: (props: GetRepositoriesProps) => Promise<void>;
  loading: boolean;
}

export const GithubContext = createContext<IGithubContext>(
  {} as IGithubContext
);

export const GithubProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUserDTO>({} as IUserDTO);
  const [repositories, setRepositories] = useState<IRepositoryDTO[]>([]);

  const [loading, setLoading] = useState<boolean>(false);

  const getUsers = async (username: string) => {
    try {
      setLoading(true);
      const response = await GitHubService.getUser(username);
      setUser(response.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 404) {
          throw new Error('Usuario não encontrado');
        }
        throw new Error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const getRepositories = async (props: GetRepositoriesProps) => {
    try {
      setLoading(true);
      const response = await GitHubService.getRepositories(props);
      setRepositories(response.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <GithubContext.Provider
      value={{
        user,
        repositories,
        getUsers,
        getRepositories,

        loading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
