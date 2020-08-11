import PATHS from '../../../routes/PATHS'
import fetch from '../../../service/fetch'
import {AsyncActions } from '../.././../store/types'


export const isFormErrorFree = (errorEmail: boolean, errorPassword: boolean, email: string, password: string, prevValue: string) =>
  !!(!errorEmail && !errorPassword && (email || !prevValue) && (password || !prevValue))

export const auth = (email: string, password: string, actions: AsyncActions) =>  
  fetch({
    url: '/mock/auth',
    method: 'post',
    auth: {
      username: email,
      password: password
    }
  },{
    asyncActionName: actions
  })
