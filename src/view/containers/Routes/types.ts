import { LogInReducer } from '../../../store/auth/reducers/types'

export type RoutesProps = {
    authenticated: boolean
  }
export type RoutesMapStateToProps = {
  auth: LogInReducer
}