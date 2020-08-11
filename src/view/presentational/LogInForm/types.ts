
export type Submit = (event: React.FormEvent<HTMLFormElement>) => void

export type LogInFormProps = {
  submitForm: Submit,
  invalidEmail: boolean,
  invalidPassword: boolean, 
  invalidFormValid:boolean,
  updateEmail: Function,
  updatePassword: Function,
  errorCode: number | null,
}
 