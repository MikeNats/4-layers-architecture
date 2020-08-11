
import { ErrorMessages } from './types';

export const errorMessages: ErrorMessages = { //Text can be imported by cms with initial configuration call on app bootstrap
    400: 'Bad Request',
    401: 'Unauthorize',
    403: 'Forbidden',
    404: 'Not Found',
    500: 'Internal Server Error',
    504: 'Gateway Timeout'
  };
  
export  const getErrorCode = (props: any) => props.location && props.location.state && props.location.state.errorCode;
  
export const message = (errorCode: number) => errorMessages[errorCode] ||  "Somthing went wrong"
  
  