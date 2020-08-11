import { Dispatch } from 'redux'
import { RequestType, AsyncActions, initRequestConfig } from './types'
import axios, { AxiosRequestConfig } from 'axios'
import { isMock } from './utils'


const asyncActionCreator = (dispatch: Dispatch<AsyncActions>, axiosRequestConfig: AxiosRequestConfig, requestConfig: RequestType) =>{ 
  const { asyncActionName, actionArgs} = requestConfig;

  dispatch(asyncActionName['REQUEST'](actionArgs));
  
  return axios(isMock(axiosRequestConfig))
        .then(response => {
          const validPayload = requestConfig.responseValidation && 
            requestConfig.responseValidation(response.data)

           if ((validPayload || !requestConfig.responseValidation)) {
             return  dispatch(asyncActionName['SUCCESS'](response.data))
           }
           return dispatch(asyncActionName['FAIL'](403))
        })
        .catch(error => {
          return dispatch(asyncActionName['FAIL'](error.response.status))})}


export default  (axiosRequestConfig: AxiosRequestConfig, requestConfig: RequestType = initRequestConfig): any => 
  requestConfig && requestConfig.asyncActionName ?
    (dispatch: Dispatch<AsyncActions>): Promise<AsyncActions> =>  
      asyncActionCreator (dispatch,axiosRequestConfig, requestConfig) 
    : axios(isMock(axiosRequestConfig)) 