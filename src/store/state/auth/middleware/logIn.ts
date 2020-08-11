import { Dispatch , Middleware, MiddlewareAPI, AnyAction} from 'redux';


export const logInMiddleware: Middleware<Dispatch> = ({
  dispatch
  }: MiddlewareAPI) => next => (action: AnyAction) => {

    // if (action.erroCode) {
    //   dispatch(logIn())
    // }

    return next(action);
 }