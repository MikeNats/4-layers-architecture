export type SelectPropsType= {
  id: string,
  className?: string
  options: Array<{
      name: string
      value: string
  }>
  onChangeHandler: Function
  children?:any
} 