import { Dispatch } from 'redux'
import { ActionsType } from '../actions/types'
import { RequestType } from './types'
import axios, { AxiosRequestConfig } from 'axios'
import { isMock } from './utils'


export default  (axiosRequestConfig: AxiosRequestConfig, requestConfig?: RequestType): any => 
  requestConfig && requestConfig.asyncActionName ?
    (dispatch: Dispatch<ActionsType>): Promise<ActionsType> =>  {
      const { asyncActionName, actionArgs} = requestConfig;
      dispatch(asyncActionName['REQUEST'](actionArgs));
      return axios(isMock(axiosRequestConfig))
        .then(response => dispatch(asyncActionName['SUCCESS'](response.data)))
        .catch(error => dispatch(asyncActionName['FAIL'](error.errorCode || 404)))
   
    }: axios(isMock(axiosRequestConfig))