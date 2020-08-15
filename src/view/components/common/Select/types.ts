

export type Options = Array<{
  name: string
  value: string
  selected?:boolean
}>

export type SelectProps= {
  id: string,
  className?: string
  options: Options
  onChangeHandler: Function
  children?:any
} 