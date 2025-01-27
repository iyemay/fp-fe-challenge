import Axios, { AxiosRequestConfig } from 'axios';

const axiosRequestConfiguration = (endpoint: string): AxiosRequestConfig => {
  return {
    baseURL: `https://67957e6eaad755a134ec1ac4.mockapi.io/api/v1/${endpoint}`,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

export const fetchTransactions = () => {
  const endpoint = 'transaction';
  return Axios(axiosRequestConfiguration(endpoint));
};
