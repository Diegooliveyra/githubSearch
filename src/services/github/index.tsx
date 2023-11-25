import { AxiosResponse } from 'axios';

import { IRepositoryDTO } from '@/@types/repositories';
import { IUserDTO } from '@/@types/user';
import { axiosApi } from '../api/axios';

const baseUrl = '/users';

export type GetRepositoriesProps = {
  username: string;
  per_page?: number;
  page?: number;
};

export class GitHubService {
  static async getUser(username: string): Promise<AxiosResponse<IUserDTO>> {
    return axiosApi.get(`${baseUrl}/${username}`);
  }

  static async getRepositories(
    props: GetRepositoriesProps
  ): Promise<AxiosResponse<IRepositoryDTO[]>> {
    return axiosApi.get(
      `${baseUrl}/${props.username}/repos?per_page=${props.per_page}&page=${props.page}`
    );
  }
}
