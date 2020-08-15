export type ErrorBoundaryProps = {
  renderView?:Function
  reportError: boolean
}

export type ErrorBoundaryState = {
  hasError: boolean
}