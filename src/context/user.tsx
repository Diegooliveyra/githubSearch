import { IRepositoryDTO } from '@/@types/repositories';
import { IUserDTO } from '@/@types/user';
import { GetRepositoriesProps, GitHubService } from '@/services/github';
import { ReactNode, createContext, useState } from 'react';

export interface IGithubContext {
  user: IUserDTO;
  repositories: IRepositoryDTO[];
  getUsers: (username: string) => Promise<void>;
  getRepositories: (props: GetRepositoriesProps) => Promise<void>;
  hasError: boolean;
  loading: boolean;
}

export const GithubContext = createContext<IGithubContext>(
  {} as IGithubContext
);

export const GithubProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUserDTO>({} as IUserDTO);
  const [repositories, setRepositories] = useState<IRepositoryDTO[]>([]);
  const [hasError, setHasError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const getUsers = async (username: string) => {
    try {
      setLoading(true);
      const response = await GitHubService.getUser(username);
      setUser(response.data);
    } catch (error) {
      setHasError(true);
      throw new Error();
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
      setHasError(true);
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
        hasError,
        loading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
