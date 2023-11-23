import axios from 'axios';

export const axiosApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GITHUB_API,

  headers: {
    'Content-Type': 'application/json',
  },
});
