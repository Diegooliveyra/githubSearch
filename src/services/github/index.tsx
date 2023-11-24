/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';

import { IRepositoryDTO } from '@/@types/repositories';
import { IUserDTO } from '@/@types/user';
import { axiosApi } from '../api/axios';

const baseUrl = '/users';

type GetRepositoriesProps = {
  username: string;
  per_page?: number;
  page?: number;
};

export class GitHubService {
  static async getUser(username: string): Promise<AxiosResponse<IUserDTO>> {
    return axiosApi.get(`${baseUrl}/users/${username}`);
  }

  static async getRepositories(
    props: GetRepositoriesProps
  ): Promise<AxiosResponse<IRepositoryDTO[]>> {
    return axiosApi.get(
      `${baseUrl}/users/${props.username}?per_page=${props.page}&page=${props.per_page}`
    );
  }
}
