import React from 'react'
import { Redirect} from "react-router"
import { PATHS } from '../../../enums'
import { getErrorCode, message } from './utils'
import { OneColumnLayout } from '../../components/Layouts'

const ErrorView =  ({
  ...props
}) => {
  const errorCode = getErrorCode(props);
  if (errorCode) {
    return (<OneColumnLayout className={'horiz-vertic-align-layout'}>
        <article> 
          <h3>Error Page</h3>
          <p>{message(errorCode)}</p>
        </article>
      </OneColumnLayout>
    );
  } 
  return <Redirect to={PATHS.HOME}/>
}
export default ErrorView