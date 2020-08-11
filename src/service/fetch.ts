import { Dispatch } from 'redux'
import { RequestType, AsyncActions, initRequestConfig } from './types'
import axios, { AxiosRequestConfig } from 'axios'
import { isMock } from './utils'


const asyncActionCreator = (dispatch: Dispatch<AsyncActions>, axiosRequestConfig: AxiosRequestConfig, requestConfig: RequestType) =>{ 
  const { asyncActionNames, actionArgs} = requestConfig;

  dispatch(asyncActionNames['REQUEST'](actionArgs));
  
  return axios(isMock(axiosRequestConfig))
        .then(response => {
          const validPayload = requestConfig.responseValidation && 
            requestConfig.responseValidation(response.data)

            if ((validPayload || !requestConfig.responseValidation)) {
              return  dispatch(asyncActionNames['SUCCESS'](response.data))
            }
            dispatch(asyncActionNames['FAIL'](403))
        })
        .catch(error => {
          return dispatch(asyncActionNames['FAIL']((error.response || {status: 'unknows'}.status)))})}


export default  (axiosRequestConfig: AxiosRequestConfig, requestConfig: RequestType = initRequestConfig): any => 
  requestConfig && requestConfig.asyncActionNames ?
    (dispatch: Dispatch<AsyncActions>): Promise<AsyncActions> =>  
      asyncActionCreator (dispatch,axiosRequestConfig, requestConfig) 
    : axios(isMock(axiosRequestConfig)) 