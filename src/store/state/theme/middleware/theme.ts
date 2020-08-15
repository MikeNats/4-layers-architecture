import { Dispatch , Middleware, MiddlewareAPI, AnyAction} from 'redux';
import { THEME_ACTION_TYPES } from '../actions/types'

export const themeMiddleware: Middleware<Dispatch> = ({
  dispatch
  }: MiddlewareAPI) => next => (action: AnyAction) => {

    if (action.type === THEME_ACTION_TYPES.SET_THEME) {
      localStorage.setItem('theme', action.theme);
    }

    return next(action);
 }