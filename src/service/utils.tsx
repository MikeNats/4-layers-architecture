import  { AxiosRequestConfig } from 'axios';

export const isMock = (axiosRequestConfig: AxiosRequestConfig): AxiosRequestConfig => {
    if ((axiosRequestConfig.url || '').includes('mock')) {
      axiosRequestConfig.url = `${(axiosRequestConfig.url || '')}-${axiosRequestConfig.method}.json`
      axiosRequestConfig.method = 'get';
    }
    return axiosRequestConfig;
  }