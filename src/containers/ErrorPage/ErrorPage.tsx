import React from 'react';
import { Redirect} from "react-router";
import PATHS from '../../routes/PATHS'

type ErrorMessages = {
  [key: number]: string;
}

export const errorMessages: ErrorMessages = { 
  400: 'Bad Request',
  401: 'Unauthorize',
  403: 'Forbidden',
  404: 'Not Found',
  409: 'Conflict',
  500: 'Internal Server Error',
  504: 'Gateway Timeout'
};


const getErrorCode = (props: any) => props.location && props.location.state && props.location.state.errorCode;

const message = (errorCode: number) => errorMessages[errorCode] ||  "Somthing went wrong"

export default ({
  ...props
}) => {
  const errorCode = getErrorCode(props);
  if (errorCode) {
    return (
      <main className="base-layout horiz-vertic-align-layout">  
        <article> 
          <h3>Error Page</h3>
          <p>{message(errorCode)}</p>
        </article>
      </main> 
    );
  } else {
    return <Redirect to={PATHS.HOME}/>
  } 
}