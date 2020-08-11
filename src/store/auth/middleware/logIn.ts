import { Dispatch , Middleware, MiddlewareAPI, AnyAction} from 'redux';


export const logInMiddleware: Middleware<Dispatch> = ({
  dispatch
  }: MiddlewareAPI) => next => (action: AnyAction) => {

    // if (action.type === IDENTITY_ACTION_TYPES.IDENTITY_SUCCESS) {
    //   dispatch(logIn())
    // }

    return next(action);
 }