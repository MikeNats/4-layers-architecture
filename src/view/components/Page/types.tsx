
export type PageProps = {
  authenticated?: boolean,
  component: React.ComponentType<any>
  hasHeaderFooter?:boolean,
  path: string,
  exact?: boolean,
  protectedRoute?: boolean
}  