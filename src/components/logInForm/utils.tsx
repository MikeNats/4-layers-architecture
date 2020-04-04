import PATHS from '../../routes/PATHS'
import fetch from '../../services'
import { AppContextType }  from '../../context'
import { RouteComponentProps } from "react-router";
let axiosDefaults = require('axios/lib/defaults');

type AuthResponse = {
  data: {
    csrfToken: string
    userId:number
  }
}
export type LocalState = {
  email: string,
  password: string,
  validationFailed: boolean
  error: {
    email: boolean,
    password: boolean, 
    isFormValid:boolean,
  }
}
export const isFormErrorFree = (error: {email: boolean, password: boolean}, email: string, password: string, prevValue: string) =>
  !!(!error.email && !error.password && (email || !prevValue) && (password || !prevValue))

export const submit = ({state, context, props} : {state: LocalState, context: AppContextType, props: RouteComponentProps} ) =>  
  fetch({
    url: context.config.AUTH_API_URI,
    method: 'post',
    auth: {
      username: state.email,
      password: state.password
    }
  }).then((response: AuthResponse) => {
      axiosDefaults.headers.common['X-CSRF-Token'] = response.data.csrfToken;
      context.setAuth(response.data.userId);
      props.history.push(PATHS.HOME)})