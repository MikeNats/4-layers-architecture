
export type Submit = (event: React.FormEvent<HTMLFormElement>) => void

export type LogInFormProps = {
  submitForm: Submit,
  errorEmail: boolean,
  errorPassword: boolean, 
  isFormValid:boolean,
  updateEmail: Function,
  updatePassword: Function,
  errorCode: number | null,
}
 