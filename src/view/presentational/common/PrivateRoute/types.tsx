export type PrivateRouteType = {
  component: React.ComponentType<any>
  path: string
  exact?: boolean
  auth: boolean
}