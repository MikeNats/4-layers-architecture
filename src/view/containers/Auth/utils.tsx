import PATHS from '../Routes/PATHS'
import fetch from '../../../service/fetch'
import {AsyncActions } from '../../../store/types'


export const logInFormValidation = (invalidEmail: boolean, invalidPassword: boolean, email: string, password: string, prevValue: string) =>
  !!(!invalidEmail && !invalidPassword && (email || !prevValue) && (password || !prevValue))

export const auth = (email: string, password: string, actions: AsyncActions) =>  
  fetch({
    url: '/mock/auth',
    method: 'post',
    auth: {
      username: email,
      password: password
    }
  },{
    asyncActionNames: actions
  })