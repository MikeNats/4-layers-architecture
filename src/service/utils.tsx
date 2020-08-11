import  { AxiosRequestConfig } from 'axios';

export const isMock = (axiosRequestConfig: AxiosRequestConfig): AxiosRequestConfig => {
  if ((axiosRequestConfig.url || '').includes('mock')) {
    axiosRequestConfig.url = `${(axiosRequestConfig.url || '')}-${axiosRequestConfig.method}.json`
    axiosRequestConfig.method = 'get';
  }
  return axiosRequestConfig;
}

export const asyncErrorMessages = (errorCode: any): string => {
  switch (errorCode) {
    case 400: 
      return 'Bad Request'
    case 401: 
      return  'Unauthorize'
    case 403: 
      return 'Forbidden'
    case 404: 
      return 'Not Found'
    case 500: 
      return  'Internal Server Error'
    case 504: 
      return 'Gateway Timeout'
    default:
      return 'Somthing went wrong'
  }
};