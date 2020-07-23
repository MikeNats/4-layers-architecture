export type AsynActionsState = {
  'REQUEST': Function,
  'SUCCESS': Function,
  'FAIL': Function
}
 
export type RequestType = {
  asyncActionName: AsynActionsState,
  actionArgs?: Array<any>,
} 