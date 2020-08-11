import { LogInReducer } from '../../../store/state/auth/reducers/types'

export type RoutesProps = {
    authenticated: boolean
  }
export type RoutesMapStateToProps = {
  auth: LogInReducer
}