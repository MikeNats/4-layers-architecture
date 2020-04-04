export type InputPropsType= {
  id: string,
  type: string,
  name: string
  required?: boolean,
  checked?: boolean
  onChangeHandler: Function
  className?: string,
  label: string,
  placeholder: string
  error:boolean;
  errorMessage:string
}