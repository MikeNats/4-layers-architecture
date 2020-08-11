import React from 'react';
import { Redirect} from "react-router";
import PATHS from '../../containers/Routes/PATHS'
import { getErrorCode, message } from './utils';

const ErrorView =  ({
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
  } 
  return <Redirect to={PATHS.HOME}/>
}
export default ErrorView