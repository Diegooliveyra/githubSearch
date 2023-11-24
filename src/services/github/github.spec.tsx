import { GitHubService } from './index';
import { axiosApi } from '../api/axios';

jest.mock('../api/axios');

describe('GitHubService', () => {
  it('should return a successful response if the GET request was successful', async () => {
    const mockResponse = {
      data: {
        results: { name: 'Foo' },
      },
    };

    axiosApi.get = jest.fn().mockResolvedValue(mockResponse);

    const responseData = await GitHubService.getUser('josildo');
    expect(mockResponse).toEqual(responseData);
  });

  it('should return a successful response if the GET request was successful', async () => {
    const mockResponse = {
      data: {
        results: { name: 'Foo' },
      },
    };

    axiosApi.get = jest.fn().mockResolvedValue(mockResponse);

    const responseData = await GitHubService.getRepositories({
      username: 'jose',
      page: 1,
      per_page: 10,
    });
    expect(mockResponse).toEqual(responseData);
  });
});
