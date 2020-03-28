import PATHS from '../../routes/PATHS'
import {auth} from '../../services/auth'
import { AppContextType }  from '../../context'
import { RouteComponentProps } from "react-router";


export type LocalState = {
  email: string,
  password: string,
  error: {
    email: boolean,
    password: boolean,
    isFormValid:boolean,
  },
}

export const isFormErrorFree = (error: {email: boolean, password: boolean}, email: string, password: string, prevValue: string) =>
  !!(!error.email && !error.password && email && password && prevValue)


export const onFormSubmition = ({state, context, props} : {state: LocalState, context: AppContextType, props: RouteComponentProps} ) =>  
    auth(state.email, state.password).then(() => {
      context.setAuth(true);
      props.history.push(PATHS.HOME)})