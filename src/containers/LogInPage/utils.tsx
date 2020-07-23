import PATHS from '../../routes/PATHS'
import fetch from '../../service/fetch'
import { AppContextType }  from '../../context'
import { RouteComponentProps } from "react-router";
import { AuthResponse,  LogInState} from './types';
let axiosDefaults = require('axios/lib/defaults');


export const isFormErrorFree = (error: {email: boolean, password: boolean}, email: string, password: string, prevValue: string) =>
  !!(!error.email && !error.password && (email || !prevValue) && (password || !prevValue))

export const submit = (state: LogInState, context: AppContextType, props: RouteComponentProps) =>  
  fetch({
    url: context.config.AUTH_API_URI,
    method: 'post',
    auth: {
      username: state.email,
      password: state.password
    }
  })
  .then((response: AuthResponse) => 
    onLogInSuccess(response, context, props)) 

const onLogInSuccess = (response: AuthResponse, context: AppContextType, props: RouteComponentProps) => {
  axiosDefaults.headers.common['X-CSRF-Token'] = response.data.csrfToken;
  context.setAuth(response.data.userId);
  props.history.push(PATHS.HOME)
}